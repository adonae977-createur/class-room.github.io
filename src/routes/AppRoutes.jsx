import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DashboardLayout from '../layouts/DashboardLayout';

// Pages Import
import Login from '../pages/Login';
import DashboardAdmin from '../pages/DashboardAdmin';
import DashboardTeacher from '../pages/DashboardTeacher';
import DashboardStudent from '../pages/DashboardStudent';
import StudentList from '../pages/StudentList';
import QuizEngine from '../pages/QuizEngine';
import Library from '../pages/Library';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/dashboard/admin" element={<ProtectedRoute><DashboardAdmin /></ProtectedRoute>} />
      <Route path="/dashboard/teacher" element={<ProtectedRoute><DashboardTeacher /></ProtectedRoute>} />
      <Route path="/dashboard/student" element={<ProtectedRoute><DashboardStudent /></ProtectedRoute>} />
      
      <Route path="/students" element={<ProtectedRoute><StudentList /></ProtectedRoute>} />
      <Route path="/library" element={<ProtectedRoute><Library /></ProtectedRoute>} />
      <Route path="/quiz" element={<ProtectedRoute><QuizEngine /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, role);
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-3xl border-2 border-slate-100 shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-medical-500 rounded-2xl mx-auto flex items-center justify-center text-white text-3xl font-black shadow-lg mb-4">🩺</div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">InfiniCare Studio</h1>
          <p className="text-slate-500 font-medium mt-1">Gestion de classe & Apprentissage Gamifié</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Rôle Simulator</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl font-semibold text-slate-700 focus:border-medical-500 outline-none transition-all"
            >
              <option value="admin">Administrateur (Complet)</option>
              <option value="teacher">Enseignant</option>
              <option value="student">Étudiant (Gamifié)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Identifiant / Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre.nom@infinicare.edu"
              className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-medical-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-medical-500 outline-none transition-all"
            />
          </div>

          <button type="submit" className="w-full duo-btn-primary mt-4">
            Se connecter
          </button>
        </form>
      </motion.div>
    </div>
  );
}

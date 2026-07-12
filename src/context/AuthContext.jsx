import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Par défaut, connecté en Administrateur pour la démo instantanée
  const [user, setUser] = useState({
    uid: '1',
    email: 'admin@infinicare.edu',
    role: 'admin',
    name: 'Pr. Sarah Courtois',
    xp: 2450,
    level: 12
  });

  const login = (email, password, role) => {
    setUser({
      uid: Math.random().toString(),
      email,
      role,
      name: role === 'admin' ? 'Pr. Sarah Courtois' : role === 'teacher' ? 'Dr. Jean Dupuis' : 'Clara Morgane',
      xp: role === 'student' ? 450 : 2500,
      level: role === 'student' ? 3 : 15
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
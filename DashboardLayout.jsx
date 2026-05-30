import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiHome, FiUsers, FiBook, FiCpu, FiLogOut, FiAward } from 'react-icons/fi';
import NotificationCenter from '../components/NotificationCenter';
import ThemeToggle from '../components/ThemeToggle';

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { label: 'Accueil', path: `/dashboard/${user?.role}`, icon: FiHome },
    { label: 'Étudiants', path: '/students', icon: FiUsers },
    { label: 'Bibliothèque', path: '/library', icon: FiBook },
    { label: 'Quiz Duolingo', path: '/quiz', icon: FiCpu },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r-2 border-slate-100 p-6 space-y-8">
        <div className="flex items-center space-x-3">
          <div className="bg-medical-500 p-2.5 rounded-2xl text-white font-black text-xl shadow-md">
            I
          </div>
          <span className="font-extrabold text-xl text-slate-800 tracking-tight">InfiniCare</span>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3.5 rounded-2xl font-bold transition-all ${
                  isActive 
                    ? 'bg-medical-50 text-medical-600 border-2 border-medical-500/20' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                <Icon className="text-xl" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3.5 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-colors w-full text-left"
        >
          <FiLogOut className="text-xl" />
          <span>Déconnexion</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-24 md:pb-0">
        {/* Top Navbar */}
        <header className="bg-white border-b-2 border-slate-100 px-6 py-4 flex justify-between items-center sticky top-0 z-40">
          <div>
            <h2 className="font-extrabold text-xl text-slate-800 hidden md:block">Espace Conecté</h2>
            <p className="text-xs font-bold text-medical-600 bg-medical-50 px-2.5 py-1 rounded-full uppercase inline-block md:hidden">
              {user?.role}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <NotificationCenter />
            <div className="h-10 w-px bg-slate-200" />
            <div className="text-right hidden sm:block">
              <p className="font-bold text-sm text-slate-800">{user?.name}</p>
              <p className="text-xs font-semibold text-slate-400 capitalize">{user?.role}</p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-medical-500 text-white flex items-center justify-center font-bold shadow-sm">
              {user?.name?.charAt(0)}
            </div>
          </div>
        </header>

        {/* Content Injector */}
        <main className="p-4 md:p-8 flex-1">
          {children}
        </main>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-slate-100 px-4 py-2 flex justify-around items-center z-40 shadow-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center p-2 rounded-xl transition-all ${
                isActive ? 'text-medical-600' : 'text-slate-400'
              }`}
            >
              <Icon className="text-xl" />
              <span className="text-[10px] font-bold mt-1">{item.label}</span>
            </Link>
          );
        })}
        <button 
          onClick={handleLogout}
          className="flex flex-col items-center p-2 text-red-400"
          aria-label="Se déconnecter"
        >
          <FiLogOut className="text-xl" />
          <span className="text-[10px] font-bold mt-1">Quitter</span>
        </button>
      </nav>
    </div>
  );
}
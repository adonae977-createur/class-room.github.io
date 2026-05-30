import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';
import BadgeList from '../components/BadgeList';
import { FiTrendingUp, FiCpu, FiAward } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function DashboardStudent() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Profil Gamifié Style Duolingo */}
      <div className="bg-gradient-to-br from-medical-600 to-medical-900 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl shadow-inner">
              🩵
            </div>
            <div>
              <h2 className="text-2xl font-black">{user?.name}</h2>
              <p className="text-medical-200 font-bold text-sm">Niveau {user?.level || 3} — Infirmière d'Élite</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold">
              <span>Progression Niveau</span>
              <span>{user?.xp || 450} / 1000 XP</span>
            </div>
            <ProgressBar value={user?.xp || 450} max={1000} color="bg-yellow-400" />
          </div>

          <div className="flex justify-around md:justify-end md:space-x-8 text-center">
            <div>
              <p className="text-xs font-bold uppercase text-medical-200">Total XP</p>
              <p className="text-3xl font-black text-yellow-300">{user?.xp || 450}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-medical-200">Rang Promotion</p>
              <p className="text-3xl font-black text-teal-300">#2</p>
            </div>
          </div>
        </div>
        <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Core Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border-2 border-slate-100 rounded-3xl p-6">
            <h3 className="text-xl font-extrabold text-slate-800 mb-2 flex items-center gap-2">
              <FiCpu className="text-medical-500" /> Quêtes Quotidiennes Actives
            </h3>
            <p className="text-slate-500 font-medium text-sm mb-6">Validez vos modules de révision rapides pour maintenir votre série.</p>
            
            <div className="p-4 border-2 border-slate-100 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h4 className="font-extrabold text-slate-800">Quiz Hebdomadaire : Pharmacologie</h4>
                <p className="text-xs font-bold text-orange-500 mt-1">+150 XP de bonus d'évaluation</p>
              </div>
              <Link to="/quiz" className="duo-btn-primary w-full sm:w-auto text-sm py-2 px-4 shadow-[0_3px_0_#0284c7]">
                Lancer le Défi
              </Link>
            </div>
          </div>
        </div>

        {/* Badges Column */}
        <div className="bg-white border-2 border-slate-100 rounded-3xl p-6">
          <h3 className="text-xl font-extrabold text-slate-800 mb-4 flex items-center gap-2">
            <FiAward className="text-yellow-500" /> Mes Badges Débloqués
          </h3>
          <BadgeList />
        </div>
      </div>
    </div>
  );
}
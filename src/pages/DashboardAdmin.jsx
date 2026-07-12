import React from 'react';
import CardStat from '../components/CardStat';
import { FiUsers, FiBookOpen, FiActivity, FiCheckSquare } from 'react-icons/fi';
import { mockEvents } from '../data/mockData';

export default function DashboardAdmin() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-800">Tableau de bord Admin</h1>
        <p className="text-slate-500 font-medium">Vue d'ensemble de l'institut de formation infirmière.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardStat title="Étudiants Actifs" value="148" icon={FiUsers} colorClass="bg-blue-50 text-blue-500" delay={0.1} />
        <CardStat title="Cours en Ligne" value="32" icon={FiBookOpen} colorClass="bg-green-50 text-green-500" delay={0.2} />
        <CardStat title="Examens Planifiés" value="6" icon={FiCheckSquare} colorClass="bg-red-50 text-red-500" delay={0.3} />
        <CardStat title="Taux de Présence" value="94.2%" icon={FiActivity} colorClass="bg-purple-50 text-purple-500" delay={0.4} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 lg:col-span-2">
          <h3 className="text-xl font-extrabold text-slate-800 mb-4">Planning Académique Récent</h3>
          <div className="space-y-3">
            {mockEvents.map(event => (
              <div key={event.id} className={`p-4 rounded-2xl border-2 flex justify-between items-center ${event.color}`}>
                <div>
                  <h4 className="font-bold">{event.title}</h4>
                  <p className="text-xs opacity-70">Type: {event.type}</p>
                </div>
                <span className="font-bold text-sm">{event.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-slate-100 rounded-3xl p-6">
          <h3 className="text-xl font-extrabold text-slate-800 mb-4">Statistiques Globales</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-bold mb-1">
                <span>Validation PWA Cache</span>
                <span className="text-green-600">100%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold mb-1">
                <span>Rapports de Stage Clôturés</span>
                <span className="text-blue-600">78%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[78%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
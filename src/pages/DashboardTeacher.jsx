import React, { useState } from 'react';
import CardStat from '../components/CardStat';
import { FiBookOpen, FiLayers, FiCheckCircle } from 'react-icons/fi';
import { mockStudents } from '../data/mockData';

export default function DashboardTeacher() {
  const [attendance, setAttendance] = useState(
    mockStudents.reduce((acc, current) => ({ ...acc, [current.id]: 'Présent' }), {})
  );

  const toggleAttendance = (id, status) => {
    setAttendance(prev => ({ ...prev, [id]: status }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-800">Espace Formateur</h1>
        <p className="text-slate-500 font-medium">Gérez vos modules de cours et validez les fiches de présence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardStat title="Mes Modules de Cours" value="4" icon={FiBookOpen} colorClass="bg-blue-50 text-blue-500" />
        <CardStat title="Copies à Corriger" value="28" icon={FiLayers} colorClass="bg-orange-50 text-orange-500" />
        <CardStat title="Sessions Validées" value="12" icon={FiCheckCircle} colorClass="bg-green-50 text-green-500" />
      </div>

      <div className="bg-white border-2 border-slate-100 rounded-3xl p-6">
        <h3 className="text-xl font-extrabold text-slate-800 mb-4">Gestion d'Appel Numérique (Aujourd'hui)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-100 text-slate-400 font-bold text-sm">
                <th className="pb-3">Étudiant</th>
                <th className="pb-3">Matricule</th>
                <th className="pb-3 text-center">Émargement Rapide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockStudents.map(student => (
                <tr key={student.id} className="text-slate-700 font-semibold">
                  <td className="py-4 flex items-center space-x-3">
                    <span className="text-2xl">{student.avatar}</span>
                    <span>{student.name}</span>
                  </td>
                  <td className="py-4 font-mono text-sm">{student.matricule}</td>
                  <td className="py-4">
                    <div className="flex justify-center space-x-2">
                      {['Présent', 'Absent', 'Retard'].map(status => (
                        <button
                          key={status}
                          onClick={() => toggleAttendance(student.id, status)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition-all ${
                            attendance[student.id] === status
                              ? status === 'Présent' ? 'bg-green-500 text-white border-green-500'
                                : status === 'Absent' ? 'bg-red-500 text-white border-red-500'
                                : 'bg-yellow-500 text-white border-yellow-500'
                              : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
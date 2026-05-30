import React, { useState } from 'react';
import { mockStudents } from '../data/mockData';
import { FiSearch, FiSliders, FiMail, FiPhone } from 'react-icons/fi';

export default function StudentList() {
  const [search, setSearch] = useState('');
  const [filterPromo, setFilterPromo] = useState('All');

  const filtered = mockStudents.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.matricule.includes(search);
    const matchesPromo = filterPromo === 'All' || s.promo === filterPromo;
    return matchesSearch && matchesPromo;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800">Annuaire des Étudiants</h1>
          <p className="text-slate-500 font-medium">Liste complète des promotions infirmières.</p>
        </div>
      </div>

      {/* Filters bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center bg-white border-2 border-slate-100 p-4 rounded-2xl shadow-sm">
        <div className="relative flex-1 w-full">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom ou matricule..."
            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-700 outline-none focus:border-medical-500 transition-colors"
          />
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <FiSliders className="text-slate-400 hidden sm:block" />
          <select
            value={filterPromo}
            onChange={(e) => setFilterPromo(e.target.value)}
            className="w-full sm:w-auto bg-slate-50 border-2 border-slate-200 rounded-xl py-3 px-4 font-bold text-slate-700 outline-none"
          >
            <option value="All">Toutes les promos</option>
            <option value="A">Promotion A</option>
            <option value="B">Promotion B</option>
          </select>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(student => (
          <div key={student.id} className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                  {student.avatar}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-800">{student.name}</h3>
                  <p className="text-xs font-mono text-slate-400">{student.matricule}</p>
                  <span className="inline-block mt-1 text-[11px] font-extrabold bg-medical-50 text-medical-600 px-2.5 py-0.5 rounded-full">
                    Promo {student.promo}
                  </span>
                </div>
              </div>

              <div className="space-y-2 border-t border-b border-slate-50 py-3 my-3 text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-2"><FiMail className="text-slate-400" /> {student.email}</div>
                <div className="flex items-center gap-2"><FiPhone className="text-slate-400" /> {student.phone}</div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-2 bg-slate-50 p-3 rounded-xl">
              <span className="text-xs font-bold text-slate-400 uppercase">Progression</span>
              <span className="text-sm font-black text-yellow-600">Lvl {student.level} ({student.xp} XP)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
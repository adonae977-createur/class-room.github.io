import React, { useState } from 'react';
import { mockCourses } from '../data/mockData';
import { FiBookOpen, FiDownloadCloud, FiPlusCircle } from 'react-icons/fi';

export default function Library() {
  const [courses, setCourses] = useState(mockCourses);
  
  const handleSimulateUpload = () => {
    alert("Simulateur d'upload Firebase Storage activé. Le fichier sera indexé de façon asynchrone.");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800">Bibliothèque Pédagogique</h1>
          <p className="text-slate-500 font-medium">Banque centrale des documents et supports cliniques de l'IFSI.</p>
        </div>
        <button 
          onClick={handleSimulateUpload} 
          className="duo-btn-primary flex items-center justify-center gap-2 text-sm whitespace-nowrap"
        >
          <FiPlusCircle /> Uploader un PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 bg-medical-50 text-medical-600 rounded-full uppercase">
                  {course.category}
                </span>
                <span className="text-xs font-semibold text-slate-400">{course.duration}</span>
              </div>
              <h3 className="font-extrabold text-lg text-slate-800 mb-2">{course.title}</h3>
              <p className="text-sm font-medium text-slate-400 mb-4">Par : {course.instructor}</p>
            </div>

            <div className="space-y-2 border-t border-slate-50 pt-4">
              <p className="text-xs font-bold text-slate-400 uppercase mb-2">Pièces jointes ({course.files.length})</p>
              {course.files.map((file, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2 truncate">
                    <FiBookOpen className="text-medical-500 shrink-0" />
                    <span className="truncate">{file}</span>
                  </div>
                  <button 
                    onClick={() => alert(`Téléchargement fictif de : ${file}`)}
                    className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors"
                    aria-label="Télécharger"
                  >
                    <FiDownloadCloud />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
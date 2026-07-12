import React from 'react';
import { FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  return (
    <button 
      onClick={() => alert("Mode sombre prévu pour la prochaine mise à jour (Fichiers de variables Tailwind prêts !)")}
      className="p-3 bg-white border-2 border-slate-200 rounded-2xl text-slate-700 hover:bg-slate-50 transition-colors"
      aria-label="Changer de thème"
    >
      <FiSun className="text-xl" />
    </button>
  );
}
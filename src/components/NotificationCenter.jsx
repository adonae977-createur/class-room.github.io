import React, { useState } from 'react';
import { FiBell, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, text: "Nouveau Quiz de Pharmacologie ouvert !", time: "Il y a 5 min" },
    { id: 2, text: "Rapport de stage validé par l'instructeur.", time: "Il y a 1h" },
  ]);

  return (
    <div className="relative z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-white border-2 border-slate-200 rounded-2xl relative text-slate-700 hover:bg-slate-50 transition-colors"
        aria-label="Centre de notifications"
      >
        <FiBell className="text-xl" />
        <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute right-0 mt-3 w-80 bg-white rounded-3xl border-2 border-slate-100 shadow-xl p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-slate-800">Notifications</h4>
              <button onClick={() => setIsOpen(false)} aria-label="Fermer"><FiX /></button>
            </div>
            <div className="space-y-3">
              {notifications.map(n => (
                <div key={n.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-sm text-slate-700 font-medium">{n.text}</p>
                  <span className="text-xs text-slate-400 mt-1 block">{n.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
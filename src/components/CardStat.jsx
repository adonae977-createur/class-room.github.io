import React from 'react';
import { motion } from 'framer-motion';

export default function CardStat({ title, value, icon: Icon, colorClass, delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-sm flex items-center justify-between"
    >
      <div>
        <p className="text-slate-500 font-medium text-sm tracking-wide uppercase">{title}</p>
        <h3 className="text-3xl font-extrabold text-slate-800 mt-2">{value}</h3>
      </div>
      <div className={`p-4 rounded-2xl ${colorClass}`}>
        <Icon className="text-2xl" />
      </div>
    </motion.div>
  );
}
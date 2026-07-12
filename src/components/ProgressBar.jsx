import React from 'react';

export default function ProgressBar({ value, max = 100, color = 'bg-medical-500' }) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden border border-slate-200">
      <div 
        className={`${color} h-full rounded-full transition-all duration-500`}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={max}
      />
    </div>
  );
}
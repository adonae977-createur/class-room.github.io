import React from 'react';
import { FiAward, FiZap, FiBookOpen, FiActivity } from 'react-icons/fi';

const badgesData = [
  { id: 1, title: 'Major de Promo', icon: FiAward, color: 'text-yellow-500 bg-yellow-50 border-yellow-200' },
  { id: 2, title: 'Infaillible (Quiz)', icon: FiZap, color: 'text-orange-500 bg-orange-50 border-orange-200' },
  { id: 3, title: 'Rat de Bibliothèque', icon: FiBookOpen, color: 'text-blue-500 bg-blue-50 border-blue-200' },
  { id: 4, title: 'Major de Stage', icon: FiActivity, color: 'text-green-500 bg-green-50 border-green-200' },
];

export default function BadgeList() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {badgesData.map((b) => {
        const Icon = b.icon;
        return (
          <div key={b.id} className={`flex flex-col items-center p-4 border-2 rounded-2xl ${b.color}`}>
            <Icon className="text-3xl mb-2" />
            <span className="text-xs font-bold text-center">{b.title}</span>
          </div>
        );
      })}
    </div>
  );
}
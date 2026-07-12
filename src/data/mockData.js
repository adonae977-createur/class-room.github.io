export const mockStudents = [
  { id: '1', name: 'Clara Morgane', matricule: 'IFSI-2024-001', promo: 'A', email: 'clara.m@student.fr', phone: '0612345678', xp: 1250, rank: 1, level: 5, avatar: '🩵' },
  { id: '2', name: 'Lucas Bernard', matricule: 'IFSI-2024-002', promo: 'A', email: 'lucas.b@student.fr', phone: '0687654321', xp: 980, rank: 2, level: 4, avatar: '🩺' },
  { id: '3', name: 'Emma Watson', matricule: 'IFSI-2024-003', promo: 'B', email: 'emma.w@student.fr', phone: '0654321897', xp: 840, rank: 3, level: 3, avatar: '🧬' },
  { id: '4', name: 'Thomas Sotto', matricule: 'IFSI-2024-004', promo: 'B', email: 'thomas.s@student.fr', phone: '0645127893', xp: 710, rank: 4, level: 3, avatar: '🧠' },
];

export const mockCourses = [
  { id: 'c1', title: 'Anatomie Cardiaque', category: 'Anatomie', instructor: 'Dr. J. Dupuis', duration: '4h', files: ['Anat_Coeur_V2.pdf'] },
  { id: 'c2', title: 'Pharmacologie Clinique - Antalgiques', category: 'Pharmacologie', instructor: 'Pr. S. Courtois', duration: '6h', files: ['Pharma_Palier1_3.pdf'] },
  { id: 'c3', title: 'Calculs de Doses et Débits', category: 'Soins infirmières', instructor: 'Mme L. Lefevre', duration: '8h', files: ['Exercices_Doses.pdf', 'Guide_Methode.pdf'] },
];

export const mockQuiz = {
  title: 'Validation de Pharmacologie - Cycle 1',
  duration: 15, // secondes par question
  questions: [
    {
      id: 1,
      question: "Quel est le principal risque d'un surdosage en Paracétamol ?",
      options: [
        "Insuffisance rénale aiguë",
        "Hépatotoxicité sévère (cytolyse)",
        "Arrêt cardio-respiratoire immédiat",
        "Ulcère gastrique perforé"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Quelle est la surveillance prioritaire lors de l'administration de Morphine ?",
      options: [
        "La température corporelle",
        "La fréquence respiratoire",
        "La diurèse horaire",
        "La glycémie capillaire"
      ],
      correct: 1
    }
  ]
};

export const mockEvents = [
  { id: 'e1', title: 'Examen Pharmacologie', date: '2026-06-02', type: 'Exam', color: 'bg-red-100 text-red-700 border-red-300' },
  { id: 'e2', title: 'Stage - CHU Urgences', date: '2026-06-05', type: 'Stage', color: 'bg-purple-100 text-purple-700 border-purple-300' },
  { id: 'e3', title: 'TD Calculs de Doses', date: '2026-06-10', type: 'TD', color: 'bg-blue-100 text-blue-700 border-blue-300' },
];
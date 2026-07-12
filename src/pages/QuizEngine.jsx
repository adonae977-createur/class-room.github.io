import React, { useState, useEffect } from 'react';
import { mockQuiz } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiClock, FiAlertTriangle } from 'react-icons/fi';

export default function QuizEngine() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(mockQuiz.duration);
  const [quizFinished, setQuizFinished] = useState(false);

  const activeQuestion = mockQuiz.questions[currentQuestion];

  useEffect(() => {
    if (timer === 0 && !isAnswered) {
      handleAnswerValidation(null);
    }
    if (timer > 0 && !isAnswered && !quizFinished) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isAnswered, quizFinished]);

  const handleAnswerValidation = (index) => {
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === activeQuestion.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < mockQuiz.questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimer(mockQuiz.duration);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return (
      <div className="max-w-xl mx-auto text-center py-12 space-y-6">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-6xl">🎉</motion.div>
        <h1 className="text-3xl font-black text-slate-800">Quiz Terminé !</h1>
        <p className="text-slate-500 font-semibold">Félicitations, vous validez des compétences fondamentales.</p>
        <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-xl">
          <p className="text-sm font-bold text-slate-400 uppercase">Votre score final</p>
          <p className="text-5xl font-black text-medical-500 mt-2">{score} / {mockQuiz.questions.length}</p>
          <p className="text-xs text-green-500 font-bold mt-2">+{score * 50} XP ajoutés à votre profil</p>
        </div>
        <button onClick={() => window.location.reload()} className="duo-btn-primary w-full">
          Recommencer le module
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Header info */}
      <div className="flex justify-between items-center text-sm font-bold text-slate-400">
        <span>Question {currentQuestion + 1} sur {mockQuiz.questions.length}</span>
        <span className="flex items-center gap-2 text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-full">
          <FiClock className={timer < 5 ? 'text-red-500 animate-pulse' : 'text-medical-500'} /> {timer}s
        </span>
      </div>

      {/* Progress Bar Top */}
      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
        <div 
          className="bg-medical-500 h-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / mockQuiz.questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-extrabold text-slate-800 leading-snug">{activeQuestion.question}</h2>
      </div>

      {/* Options Stack */}
      <div className="space-y-3">
        {activeQuestion.options.map((option, index) => {
          let btnStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700';
          if (isAnswered) {
            if (index === activeQuestion.correct) {
              btnStyle = 'border-green-500 bg-green-50 text-green-700 shadow-[0_4px_0_#22c55e]';
            } else if (index === selectedOption) {
              btnStyle = 'border-red-500 bg-red-50 text-red-700 shadow-[0_4px_0_#ef4444]';
            } else {
              btnStyle = 'border-slate-100 bg-white opacity-50 text-slate-400';
            }
          }

          return (
            <button
              key={index}
              disabled={isAnswered}
              onClick={() => handleAnswerValidation(index)}
              className={`w-full p-5 text-left border-2 font-bold rounded-2xl transition-all flex justify-between items-center ${btnStyle}`}
            >
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {/* Verification Dialog Validation panel footer */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-2xl border flex flex-col sm:flex-row justify-between items-center gap-4 ${
              selectedOption === activeQuestion.correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
            }`}
          >
            <div className="flex items-center gap-3">
              {selectedOption === activeQuestion.correct ? (
                <FiCheckCircle className="text-2xl text-green-600" />
              ) : (
                <FiAlertTriangle className="text-2xl text-red-600" />
              )}
              <span className={`font-bold ${selectedOption === activeQuestion.correct ? 'text-green-800' : 'text-red-800'}`}>
                {selectedOption === activeQuestion.correct ? 'Excellent travail !' : 'Correction requise.'}
              </span>
            </div>
            <button onClick={handleNext} className="duo-btn-primary py-2 px-6 w-full sm:w-auto text-sm shadow-[0_3px_0_#0284c7]">
              Continuer
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
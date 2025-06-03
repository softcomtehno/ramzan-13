import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Question } from '../data/quizData';

interface QuizContextType {
  answers: Record<string, string>;
  setAnswer: (questionId: string, optionId: string) => void;
  clearAnswers: () => void;
  score: number;
  totalQuestions: number;
  calculateScore: (questions: Question[]) => void;
  currentTopicId: string | null;
  setCurrentTopicId: (topicId: string) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [currentTopicId, setCurrentTopicId] = useState<string | null>(null);

  const setAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const clearAnswers = () => {
    setAnswers({});
    setScore(0);
    setTotalQuestions(0);
  };

  const calculateScore = (questions: Question[]) => {
    let correctCount = 0;
    const total = questions.length;
    
    questions.forEach(question => {
      const selectedOptionId = answers[question.id];
      if (selectedOptionId) {
        const selectedOption = question.options.find(option => option.id === selectedOptionId);
        if (selectedOption && selectedOption.isCorrect) {
          correctCount++;
        }
      }
    });
    
    setScore(correctCount);
    setTotalQuestions(total);
  };

  const value = {
    answers,
    setAnswer,
    clearAnswers,
    score,
    totalQuestions,
    calculateScore,
    currentTopicId,
    setCurrentTopicId
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
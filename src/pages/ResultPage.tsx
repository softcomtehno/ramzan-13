import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { getTopicById, getQuizByTopicId } from '../data/quizData';
import { Award, RotateCcw, Home } from 'lucide-react';

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { score, totalQuestions, currentTopicId, clearAnswers } = useQuiz();
  
  const topic = currentTopicId ? getTopicById(currentTopicId) : undefined;
  const quiz = currentTopicId ? getQuizByTopicId(currentTopicId) : undefined;
  
  useEffect(() => {
    if (!currentTopicId || !topic || !quiz || totalQuestions === 0) {
      navigate('/tests');
    }
  }, [currentTopicId, navigate, topic, quiz, totalQuestions]);
  
  if (!topic || !quiz) {
    return null;
  }
  
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let performanceLevel = '';
  let performanceColor = '';
  
  if (percentage >= 90) {
    performanceLevel = 'Отлично';
    performanceColor = 'text-green-600';
  } else if (percentage >= 70) {
    performanceLevel = 'Хорошо';
    performanceColor = 'text-primary-600';
  } else if (percentage >= 50) {
    performanceLevel = 'Удовлетворительно';
    performanceColor = 'text-yellow-600';
  } else {
    performanceLevel = 'Есть пробелы';
    performanceColor = 'text-red-600';
  }
  
  const handleRetakeQuiz = () => {
    clearAnswers();
    navigate(`/quiz/${currentTopicId}`);
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-primary-100 mb-4">
          <Award className="h-12 w-12 text-primary-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Результаты теста</h1>
        <p className="text-gray-600 text-lg">{topic.title}</p>
      </div>
      
      <div className="card p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0 md:mr-12">
            <p className="text-gray-600 mb-1">Ваш результат:</p>
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-primary-600">{score}</span>
              <span className="text-xl text-gray-500 ml-1">/ {totalQuestions}</span>
            </div>
          </div>
          
          <div className="h-20 border-r border-gray-200 hidden md:block"></div>
          
          <div className="text-center md:text-left md:ml-12">
            <p className="text-gray-600 mb-1">Процент правильных:</p>
            <p className="text-5xl font-bold text-primary-600">{percentage}%</p>
          </div>
        </div>
        
        <div className="text-center py-6 border-t border-b border-gray-200 mb-8">
          <p className="text-lg text-gray-600 mb-2">Уровень знаний:</p>
          <p className={`text-3xl font-bold ${performanceColor}`}>{performanceLevel}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={handleRetakeQuiz}
            className="btn-primary flex items-center justify-center"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Пройти заново
          </button>
          
          <Link 
            to="/" 
            className="btn-secondary flex items-center justify-center"
            onClick={() => clearAnswers()}
          >
            <Home className="mr-2 h-5 w-5" />
            На главную
          </Link>
        </div>
      </div>
      
      <div className="text-center">
        <Link 
          to="/tests" 
          className="text-primary-600 hover:text-primary-800 font-medium"
          onClick={() => clearAnswers()}
        >
          Выбрать другой тест
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuizByTopicId, getTopicById } from '../data/quizData';
import { useQuiz } from '../context/QuizContext';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const QuizPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const { answers, setAnswer, clearAnswers, calculateScore, setCurrentTopicId } = useQuiz();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const topic = topicId ? getTopicById(topicId) : undefined;
  const quiz = topicId ? getQuizByTopicId(topicId) : undefined;
  
  useEffect(() => {
    if (!topic || !quiz) {
      navigate('/tests');
      return;
    }
    
    clearAnswers();
    if (topicId) {
      setCurrentTopicId(topicId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);
  
  useEffect(() => {
    // Set the selected option based on any previously answered question
    if (quiz && quiz.questions[currentQuestionIndex]) {
      const questionId = quiz.questions[currentQuestionIndex].id;
      const savedAnswer = answers[questionId];
      
      if (savedAnswer) {
        setSelectedOptionId(savedAnswer);
        setIsAnswered(true);
      } else {
        setSelectedOptionId(null);
        setIsAnswered(false);
      }
    }
  }, [currentQuestionIndex, answers, quiz]);

  if (!topic || !quiz) {
    return (
      <div className="quiz-container text-center py-16">
        <p className="text-xl">Тест не найден. Пожалуйста, выберите другую тему.</p>
      </div>
    );
  }
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOptionId(optionId);
    }
  };
  
  const handleNextQuestion = () => {
    if (selectedOptionId) {
      // Save the answer
      setAnswer(currentQuestion.id, selectedOptionId);
      setIsAnswered(true);
      
      // If it's the last question, calculate score and go to results
      if (currentQuestionIndex === quiz.questions.length - 1) {
        calculateScore(quiz.questions);
        navigate('/result');
      } else {
        // Move to next question
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setIsAnswered(false);
        setSelectedOptionId(null);
      }
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const exitQuiz = () => {
    if (confirm('Вы уверены, что хотите выйти? Ваш прогресс будет потерян.')) {
      clearAnswers();
      navigate('/tests');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="quiz-container animate-fade-in">
        {/* Quiz Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary-800">{topic.title}</h1>
          <button 
            onClick={exitQuiz}
            className="text-gray-500 hover:text-red-600 transition-colors"
            aria-label="Выйти из теста"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Вопрос {currentQuestionIndex + 1} из {quiz.questions.length}</span>
            <span>{Math.round(((currentQuestionIndex + 1) / quiz.questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-primary-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Question Card */}
        <div className="card p-6 mb-8 animate-slide-up">
          <h2 className="text-xl font-semibold mb-4">{currentQuestion.text}</h2>
          
          {currentQuestion.image && (
            <div className="mb-4">
              <img 
                src={currentQuestion.image} 
                alt={currentQuestion.imageCaption || "Иллюстрация к вопросу"} 
                className="w-full rounded-lg max-h-60 object-cover mb-2"
              />
              {currentQuestion.imageCaption && (
                <p className="text-sm text-gray-500 text-center">{currentQuestion.imageCaption}</p>
              )}
            </div>
          )}
          
          <div className="space-y-3 mt-6">
            {currentQuestion.options.map(option => {
              let optionClass = "answer-option answer-option-default";
              if (selectedOptionId === option.id) {
                optionClass = "answer-option answer-option-selected";
              }
              
              return (
                <div 
                  key={option.id}
                  className={optionClass}
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3 flex-shrink-0 flex items-center justify-center">
                    {selectedOptionId === option.id && (
                      <div className="w-3 h-3 rounded-full bg-primary-600"></div>
                    )}
                  </div>
                  <span>{option.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center ${
              currentQuestionIndex === 0 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-primary-600 hover:text-primary-800'
            }`}
          >
            <ArrowLeft size={20} className="mr-1" />
            Предыдущий
          </button>
          
          <button
            onClick={handleNextQuestion}
            disabled={!selectedOptionId}
            className={`btn-primary flex items-center ${
              !selectedOptionId ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {currentQuestionIndex === quiz.questions.length - 1 ? 'Завершить' : 'Следующий'}
            {currentQuestionIndex < quiz.questions.length - 1 && (
              <ArrowRight size={20} className="ml-1" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { topics } from '../data/quizData';

const TestsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-12">Выберите тему теста</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div 
            key={topic.id} 
            className="card overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {topic.image && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={topic.image} 
                  alt={topic.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{topic.questionsCount} вопросов</span>
                <Link 
                  to={`/quiz/${topic.id}`} 
                  className="btn-primary text-sm px-4 py-2"
                >
                  Пройти тест
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestsPage;
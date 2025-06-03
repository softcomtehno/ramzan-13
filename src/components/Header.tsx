import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const isQuizRoute = location.pathname.includes('/quiz/');
  
  if (isQuizRoute) {
    return null; // Don't show header on quiz pages
  }
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-primary-800">BioTest.kg</span>
          </Link>
          <nav className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Главная
            </Link>
            <Link 
              to="/tests" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Тесты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
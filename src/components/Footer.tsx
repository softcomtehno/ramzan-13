import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookOpen className="h-6 w-6 text-primary-600" />
            <span className="text-lg font-semibold text-primary-700">BioTest.kg</span>
          </div>
          <div className="text-center md:text-right text-sm text-gray-500">
            <p>© {new Date().getFullYear()} BioTest.kg. Все права защищены.</p>
            <p className="mt-1">Бесплатные тесты по биологии</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BrainCircuit, Award, ClipboardList } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">BioTest.kg</h1>
            <p className="text-xl md:text-2xl mb-8">Проверь свои знания по биологии</p>
            <Link 
              to="/tests" 
              className="btn-primary inline-block"
            >
              Начать тест
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают наш сервис</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-primary-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BrainCircuit className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Разнообразные темы</h3>
              <p className="text-gray-600">Тесты по клеточной биологии, анатомии, ботанике, генетике и другим областям</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-primary-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Без регистрации</h3>
              <p className="text-gray-600">Просто выберите тему и начните проходить тест — никаких аккаунтов и паролей</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-primary-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Мгновенный результат</h3>
              <p className="text-gray-600">Сразу узнайте свой уровень знаний и области, требующие улучшения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Для кого наш сайт</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm animate-slide-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                Школьники и студенты
              </h3>
              <p className="text-gray-600">Подготовка к экзаменам, проверка знаний, закрепление материала из учебников в интерактивной форме</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                Учителя и преподаватели
              </h3>
              <p className="text-gray-600">Дополнительный материал для проведения занятий, контроля знаний учащихся</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm animate-slide-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                Энтузиасты биологии
              </h3>
              <p className="text-gray-600">Расширение кругозора, проверка имеющихся знаний, изучение новых аспектов биологии</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                Родители
              </h3>
              <p className="text-gray-600">Помощь детям в подготовке к занятиям, проверка их знаний, совместное изучение биологии</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы проверить свои знания?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">Выберите интересующую вас тему и начните тестирование прямо сейчас!</p>
          <Link 
            to="/tests" 
            className="btn-primary inline-block"
          >
            Перейти к тестам
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestsPage from './pages/TestsPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Layout from './components/Layout';
import { QuizProvider } from './context/QuizContext';

function App() {
  return (
    <QuizProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/quiz/:topicId" element={<QuizPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </Layout>
      </Router>
    </QuizProvider>
  );
}

export default App;
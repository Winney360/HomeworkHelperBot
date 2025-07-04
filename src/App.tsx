import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import ChatInterface from './components/ChatInterface';
import GradeSelector from './components/GradeSelector';
import PricingModal from './components/PricingModal';
import AuthModal from './components/AuthModal';
import type { User } from './types/auth';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'chat'>('landing');
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [showGradeSelector, setShowGradeSelector] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for existing user session
    const savedUser = localStorage.getItem('homeworkHelper_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleStartChat = () => {
    if (!user) {
      setShowAuth(true);
      return;
    }
    setShowGradeSelector(true);
  };

  const handleGradeSelect = (grade: number) => {
    setSelectedGrade(grade);
    setShowGradeSelector(false);
    setCurrentPage('chat');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    setSelectedGrade(null);
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('homeworkHelper_user', JSON.stringify(userData));
    setShowAuth(false);
    setShowGradeSelector(true);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('homeworkHelper_user');
    setCurrentPage('landing');
    setSelectedGrade(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {currentPage === 'landing' && (
        <LandingPage 
          onStartChat={handleStartChat}
          onShowPricing={() => setShowPricing(true)}
          user={user}
          onLogout={handleLogout}
        />
      )}
      
      {currentPage === 'chat' && selectedGrade && user && (
        <ChatInterface 
          grade={selectedGrade}
          user={user}
          onBack={handleBackToLanding}
          onLogout={handleLogout}
        />
      )}

      {showGradeSelector && (
        <GradeSelector
          onSelectGrade={handleGradeSelect}
          onClose={() => setShowGradeSelector(false)}
        />
      )}

      {showPricing && (
        <PricingModal
          onClose={() => setShowPricing(false)}
          onSelectPlan={() => {
            setShowPricing(false);
            if (!user) {
              setShowAuth(true);
            }
          }}
        />
      )}

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;
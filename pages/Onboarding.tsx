import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background-light p-4 font-display">
      <header className="flex justify-end pt-2">
        <button onClick={() => navigate(AppRoute.HOME)} className="text-text-subtle font-bold">Skip for now</button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center mb-8">
          <span className="material-symbols-outlined text-primary text-9xl" style={{ fontSize: '120px' }}>checkroom</span>
        </div>
        <h1 className="text-text-main text-3xl font-bold mb-4">Let's build your wardrobe.</h1>
        <p className="text-text-main text-base max-w-xs mx-auto">
          Adding clothes helps our AI assistant learn your style and create personalized outfit recommendations.
        </p>
      </main>

      <footer className="pb-8 flex flex-col items-center gap-6">
        <div className="flex gap-2">
          <div className="w-6 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
          <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
        </div>
        <button 
          onClick={() => navigate(AppRoute.SCAN)}
          className="w-full max-w-md h-12 bg-primary text-text-main text-base font-bold rounded-xl"
        >
          Add First Item
        </button>
      </footer>
    </div>
  );
};
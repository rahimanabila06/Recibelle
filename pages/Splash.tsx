import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

export const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(AppRoute.AUTH);
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-24 h-24 mb-2 flex items-center justify-center rounded-full bg-primary/10">
          <span className="material-symbols-outlined text-6xl text-primary">styler</span>
        </div>
        <h2 className="text-text-main tracking-tight text-4xl font-bold leading-tight text-center font-display">
          Recibelle
        </h2>
        <p className="text-text-subtle text-base font-normal leading-normal text-center">
          Your Personal Outfit AI
        </p>
      </div>
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2">
        <div className="h-2 w-2 rounded-full bg-primary animate-bounce"></div>
        <div className="h-2 w-2 rounded-full bg-primary animate-bounce delay-75"></div>
        <div className="h-2 w-2 rounded-full bg-primary animate-bounce delay-150"></div>
      </div>
    </div>
  );
};
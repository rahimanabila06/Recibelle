import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

export const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login' | 'signup'>('signup');

  const handleAuth = () => {
    navigate(AppRoute.ONBOARDING);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background-light px-6 py-8 font-display">
      <div className="mt-12 mb-8 text-center">
        <h1 className="text-text-main text-[32px] font-bold leading-tight mb-2">Recibelle</h1>
        <p className="text-text-subtle text-base font-normal">Create Your Digital Wardrobe</p>
      </div>

      {/* Segmented Control */}
      <div className="flex w-full max-w-sm bg-[#EAE7E3] rounded-xl p-1 mb-8">
        <button
          className={`flex-1 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
            mode === 'signup' 
              ? 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-text-main' 
              : 'text-text-subtle hover:text-text-main'
          }`}
          onClick={() => setMode('signup')}
        >
          Sign Up
        </button>
        <button
          className={`flex-1 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
            mode === 'login' 
              ? 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-text-main' 
              : 'text-text-subtle hover:text-text-main'
          }`}
          onClick={() => setMode('login')}
        >
          Login
        </button>
      </div>

      {/* Form */}
      <div className="w-full max-w-sm flex flex-col gap-4">
        {mode === 'signup' && (
          <div className="flex flex-col gap-2">
            <label className="text-text-main text-base font-medium">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              className="w-full h-14 px-4 rounded-xl border border-[#D7CCC8] bg-white text-text-main placeholder:text-text-subtle focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label className="text-text-main text-base font-medium">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full h-14 px-4 rounded-xl border border-[#D7CCC8] bg-white text-text-main placeholder:text-text-subtle focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-text-main text-base font-medium">Password</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full h-14 px-4 pr-12 rounded-xl border border-[#D7CCC8] bg-white text-text-main placeholder:text-text-subtle focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />
            <button className="absolute right-0 top-0 bottom-0 px-4 text-text-subtle flex items-center justify-center hover:text-text-main transition-colors">
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </div>

        <button 
          onClick={handleAuth}
          className="w-full h-14 mt-4 bg-primary text-white rounded-xl font-bold text-base shadow-sm hover:opacity-90 active:scale-[0.98] transition-all"
        >
          {mode === 'signup' ? 'Sign Up' : 'Login'}
        </button>
        
        <div className="text-center mt-2">
            <a href="#" className="text-primary text-sm font-medium hover:underline">Forgot Password?</a>
        </div>
      </div>

      <div className="w-full max-w-sm my-8 flex items-center gap-4">
        <div className="h-px bg-[#D7CCC8] flex-1"></div>
        <span className="text-text-subtle text-sm font-medium">OR</span>
        <div className="h-px bg-[#D7CCC8] flex-1"></div>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4">
        <button className="w-full h-14 border border-[#D7CCC8] rounded-xl flex items-center justify-center font-semibold bg-white text-text-main hover:bg-gray-50 transition-colors">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7HDk5WmcHnlQKbvpTz5wTaagxKFRjZB20bikdhVbKFKhDJk1icJ6F9aWMs3SHsh2ZinGP3o33S5AfoxGKpMQm0gHcY4JlR-CO4v8CYBGlgKfMtoIga9KTxXV39xpwtyD8M5ZsZCgGmmN5hbPuLEAFc14OY8zOJilVi6GmbpRxi9udteqAhEOl8c10waIKYBQJf9d2FOnr41aPn0_C5mITiHpy_NFu3T9QRUehe5u6z9WRtZc4-80WHJ0M__Mj4I0fCsLoOk31ksY" alt="Google" className="w-6 h-6 mr-3" />
          Continue with Google
        </button>
        <button className="w-full h-14 border border-[#D7CCC8] rounded-xl flex items-center justify-center font-semibold bg-white text-text-main hover:bg-gray-50 transition-colors">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWUGu-YpaFnJKd-HDWNtUa-I5l7LvOooES4Ak_HhWto-DD8s64smBlIqEOo88LmmiczgKTq1dkB6VqIAMYgSWVIlH_qC4o5fsf2LmvhRdGzcsV7wkmQ7Zq-K7jztvAPoD8lu_iOavKswRKaASB5Ki10hMZAtgIJRisHhoJP0P06PGbyHyjn2DVlxlUPjNxwk3I6rZFsJ-93a8dY2kO8tcji9C1q2Mk9WzqZHmnyyiJe8bWtkzXRmf4SaTi18HQVCURPxs94VqUXzQ" alt="Apple" className="w-6 h-6 mr-3" />
          Continue with Apple
        </button>
      </div>

      <div className="w-full max-w-sm mt-auto pt-8 pb-4 text-center">
        <p className="text-text-subtle text-xs leading-relaxed">
            By signing up, you agree to our <a href="#" className="font-medium text-primary hover:underline">Terms</a> & <a href="#" className="font-medium text-primary hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../types';

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: 'home', label: 'Home', route: AppRoute.HOME },
    { icon: 'checkroom', label: 'Wardrobe', route: AppRoute.WARDROBE },
    { icon: 'add_circle', label: 'Add', route: AppRoute.SCAN },
    { icon: 'favorite', label: 'Wishlist', route: AppRoute.RE_WEAR }, // Using Re-wear as wishlist/for you for demo
    { icon: 'person', label: 'Profile', route: AppRoute.PROFILE },
  ];

  return (
    <div className="sticky bottom-0 mt-auto bg-background-light/90 backdrop-blur-lg border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-20 px-2 pb-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.route;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.route)}
              className={`flex flex-col items-center gap-1 w-full ${
                isActive ? 'text-primary' : 'text-gray-400'
              }`}
            >
              <span className={`material-symbols-outlined text-2xl ${isActive ? 'filled' : ''}`}>
                {item.icon}
              </span>
              <span className="text-[10px] font-bold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
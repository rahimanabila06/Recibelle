import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

export const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light font-display pb-24">
      <div className="p-4 flex items-center justify-between sticky top-0 bg-background-light z-10">
         <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-text-main">arrow_back</span></button>
         <h1 className="font-bold text-lg text-text-main">Settings & Profile</h1>
         <div className="w-6"></div>
      </div>

      <div className="flex flex-col items-center mt-4 mb-8">
         <div className="w-32 h-32 rounded-full bg-cover bg-center mb-4" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBc_ykG8llbUcC-Ch1NF2N3ed14drkniaLqCv_g3OO_hlx3DKYnEhvigHTHGBpMgrqrhwMB0wwdKCmxVc9g_d_rzTmr0Gm8j5UCd6BJBe0QDRlnNXcL4yhM3M3US07iYjczyKQPO4ZE-FQs2tldBhFLr_NwubImvGQtwsJEpPUWU4dVH-oihhltme__-56X2_j8QRMaJhvtAWHBzYIsM6NDxojr4p2YV6oWfpDp2qWGvcm-WgIZgGhrLzahe0UIWTcqAmEool8aXUU")' }}></div>
         <h2 className="text-2xl font-bold text-text-main">Alexandra Harris</h2>
         <p className="text-amber-700/80">alexandra.harris@email.com</p>
      </div>

      <div className="px-4 space-y-6">
         <div>
            <h3 className="text-xs font-bold text-text-main uppercase tracking-widest mb-2 px-2">STYLE</h3>
            <div className="bg-white/50 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
               <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-text-main"><span className="material-symbols-outlined">apparel</span></div>
                     <span className="font-medium text-text-main">Edit Style Preference</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
               </div>
            </div>
         </div>

         <div>
            <h3 className="text-xs font-bold text-text-main uppercase tracking-widest mb-2 px-2">GENERAL</h3>
            <div className="bg-white/50 rounded-xl overflow-hidden border border-gray-100 shadow-sm divide-y divide-gray-100">
               <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-text-main"><span className="material-symbols-outlined">location_on</span></div>
                     <span className="font-medium text-text-main">Set Wardrobe Location</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
               </div>
               <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-text-main"><span className="material-symbols-outlined">notifications</span></div>
                     <span className="font-medium text-text-main">Manage Notifications</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
               </div>
               <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-text-main"><span className="material-symbols-outlined">contrast</span></div>
                     <span className="font-medium text-text-main">Dark Mode</span>
                  </div>
                  {/* Toggle Switch */}
                  <div className="w-11 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                     <div className="w-5 h-5 bg-white rounded-full shadow-sm absolute top-0.5 left-0.5"></div>
                  </div>
               </div>
            </div>
         </div>

         <div>
            <h3 className="text-xs font-bold text-text-main uppercase tracking-widest mb-2 px-2">ACCOUNT</h3>
            <div className="bg-white/50 rounded-xl overflow-hidden border border-gray-100 shadow-sm divide-y divide-gray-100">
               <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-text-main"><span className="material-symbols-outlined">help</span></div>
                     <span className="font-medium text-text-main">Help & Support</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
               </div>
               <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-text-main"><span className="material-symbols-outlined">privacy_tip</span></div>
                     <span className="font-medium text-text-main">Privacy Policy</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
               </div>
            </div>
         </div>

         <button 
           onClick={() => navigate(AppRoute.AUTH)}
           className="w-full h-14 bg-white/50 border border-gray-100 rounded-xl text-red-500 font-bold"
         >
           Log Out
         </button>
      </div>
    </div>
  );
};
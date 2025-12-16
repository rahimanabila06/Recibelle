import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

export const ScanItem: React.FC = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);

  const handleCapture = () => {
    setIsScanning(true);
    // Simulate AI analysis delay
    setTimeout(() => {
      navigate(AppRoute.EDIT_ITEM, { replace: true });
    }, 2000);
  };

  return (
    <div className="h-screen w-full relative bg-black font-body overflow-hidden">
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
      
      {/* Background simulating camera feed */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCs8Mvgm2C6AEzOoIwAfSs_nPQ5FA19sSAZkYNY62aq5bAGG5hM19dPjAiHXpsdbz5NdPne7ZVGLNtK0FabXwPSKAK_1biZrHKWAxxXCDfs7l9yL0wN8BEXr_QuZ7BXfS-GqddocIZsxBczdXR-P0rjJM3khjuF0wO88Lv1Kv8YBRyo1WWmK60fa7abHTG-cSC_ommrTqQZxxOq7ayt4lqzf-mgW-sPsI0O5I7Ayr67FySLioaQt879_7VKLpXc3CgHQiw4Shi_zSI")' }}
      ></div>

      {/* Scanning Overlay */}
      {isScanning && (
        <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300">
           <div className="relative w-64 h-64 rounded-xl overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(230,178,76,0.3)]">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs8Mvgm2C6AEzOoIwAfSs_nPQ5FA19sSAZkYNY62aq5bAGG5hM19dPjAiHXpsdbz5NdPne7ZVGLNtK0FabXwPSKAK_1biZrHKWAxxXCDfs7l9yL0wN8BEXr_QuZ7BXfS-GqddocIZsxBczdXR-P0rjJM3khjuF0wO88Lv1Kv8YBRyo1WWmK60fa7abHTG-cSC_ommrTqQZxxOq7ayt4lqzf-mgW-sPsI0O5I7Ayr67FySLioaQt879_7VKLpXc3CgHQiw4Shi_zSI" className="w-full h-full object-cover opacity-60" />
              <div className="absolute top-0 left-0 w-full h-1 bg-primary shadow-[0_0_15px_rgba(230,178,76,1)] animate-scan"></div>
           </div>
           <div className="mt-6 flex flex-col items-center gap-2">
             <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
             <p className="text-white font-bold text-lg tracking-wide">Analyzing Item...</p>
           </div>
        </div>
      )}

      {/* Top Controls */}
      {!isScanning && (
        <div className="absolute top-0 w-full p-4 pt-8 flex justify-between items-center z-10 text-white">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-md">
             <span className="material-symbols-outlined">close</span>
          </button>
          <div className="flex gap-4">
             <button className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-md">
               <span className="material-symbols-outlined">flash_on</span>
             </button>
             <button className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-md">
               <span className="material-symbols-outlined">help</span>
             </button>
          </div>
        </div>
      )}

      {/* Guide Text */}
      {!isScanning && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <div className="bg-black/40 px-6 py-2 rounded-full backdrop-blur-md">
              <p className="text-white font-medium">Place your item on a flat surface</p>
           </div>
        </div>
      )}

      {/* Bottom Controls */}
      {!isScanning && (
        <div className="absolute bottom-0 w-full p-8 pb-12 flex justify-around items-center z-10">
          <button className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white backdrop-blur-md">
             <span className="material-symbols-outlined">photo_library</span>
          </button>
          
          {/* Shutter Button */}
          <button 
            onClick={handleCapture}
            className="w-20 h-20 rounded-full border-4 border-white bg-transparent flex items-center justify-center p-1 active:scale-95 transition-transform"
          >
             <div className="w-full h-full bg-white rounded-full"></div>
          </button>

          <button className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white backdrop-blur-md">
             <span className="material-symbols-outlined">flip_camera_ios</span>
          </button>
        </div>
      )}
    </div>
  );
};
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

export const Visualizer: React.FC = () => {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="h-screen w-full relative bg-background-light font-display overflow-hidden">
      {/* Top Bar */}
      <div className="absolute top-0 w-full p-4 flex justify-between items-center z-10 text-white">
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
           <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="font-bold text-lg drop-shadow-md">My Wardrobe</span>
        <button className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
           <span className="material-symbols-outlined">search</span>
        </button>
      </div>

      {/* 3D Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvTX6trUHpppBGv1m0SyH1WfgabRWNJ4WxW-E37I2LNwu5U82Jqcn9SvlCl3PVq2lcM6_5NPHeWD-9k30RQ-odAE6Y1BsFcUU5Ia-koJ5fhFA0FnA_x5CcG8hSimnIkZrEIpxFak75Xi0YMAnjem9g00EQEp4k-Ag5kyTmD5UAhgiFicItNjTPoyqhwt9GEK3PATJby_9KAb6CWtaN1JlmqG4Smnu_fV6iYvPCVSr-lKMh1-IF4pCrrAFBTFZfTk-Gxaij70lrOpU")' }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Interactive Hotspot */}
      <div className="absolute top-[38%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
         <button 
           onClick={() => setShowDrawer(!showDrawer)}
           className="relative w-12 h-12 flex items-center justify-center"
         >
            <div className="absolute w-full h-full bg-white/30 rounded-full animate-ping"></div>
            <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
         </button>
      </div>

      {/* Drawer */}
      <div 
        className={`absolute bottom-0 w-full bg-[#3f3526] text-[#e3d9c4] rounded-t-2xl shadow-2xl transition-transform duration-300 z-20 ${showDrawer ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ maxHeight: '60%' }}
      >
         <div className="p-4" onClick={() => setShowDrawer(false)}>
            <div className="w-12 h-1 bg-gray-500 rounded-full mx-auto mb-4"></div>
            <div className="flex justify-between items-center mb-4">
               <h3 className="font-bold text-xl">Hanging Shirts</h3>
               <span className="text-sm text-gray-400">12 items</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3 overflow-y-auto pb-20 max-h-64">
               {[
                 { name: 'Striped Tee', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqu3AxeA3LWEn42U-gGiJtNuIFLuJujsMnGy1Fe24GpNKTgSCiDEFStKptuSUJui_0TWjN3WTBxLdg5r36sFfR2QjGJYxSIZDVc8upB9rrRVaIDeFNTCWJOY1jVOcDCb5PCdV5UrN3VQAD9l691O-QLWRLTBFyL5vQ8usAO_x1ACTZmhU1qDFcYw1atAXpISuhLVM4TFGKytH0rQzvMxoOBgMFZfo-RdtE1nHCJJHP8i6nndK7XRe8qTY48NvfjiG9iLRDNwqvf_o' },
                 { name: 'White Shirt', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDThOmVKRgOpMykVqWSIsVP8BTC5142HJjFZ8w4L0gnTFAMJv-pXfwvtPI1YRvacWSsvBSkj5HPAXJSlCXpow37-Aj3Xupcrn0FG-ZUTXIZQaccPfoyGq8w9MSKvXnSlb230J1uBTwEcGNSu7w2_1j2NcHpN0H6sdHszNomeRO8hz13UAqX5RXcBP0vxNEiL7IXEf51mNhR8fAYy-EQWEbXMLTeO_SyX0Wlr4-hZXsqU8vl1Gf1PJC0DI0-KsH6YwgUvSu2Ke9m8QM' },
                 { name: 'Black Polo', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGL8D2__fJ8p9YsNUGjzc6cOOzpi4Co4uw3JjV_akviAXiQnBjuUXCNZG0ZC_NcvJdZkcjRY1wRKaQz44WmIzjuEZB4q7O6TT443yPsFJHueUadfDEYCuilvI6mZjRp1JLL0c7r9t9m3gNlM0HhEs7T47OztfDmh4RP0zQ12JvvHTwJ1va-LRBCvVFrSupugRtaLcSBcdjQ50AMu2MNC2WCWKvjk9gc5WXcE-RpdfVZMHa3oW0MZ0RlxDD5llOU3wwrKzq60iSiuw' },
                 { name: 'Denim Shirt', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPrmTZI4fLidXdME7Y4BU09qo3mw4mX5-U_-GE0lbwu4ZXiq3PeghcdOEi40q1YXCERe5oPIjxoAZ-g0tSt9KzZ3sS8jeTCjksaf2pydty9SYVZxoTpP_cV6syWL2qdJemXHn61DvfnlGZMUpJogRrAUt9ahVRmGkcumCzjXPu79HVlzwgohr9vUXq8tHC2fTgTU60GJK9iEOsUPlaAHn4u2FzlQxZ_cRlll5-YRG3NQGRr5-lex3AB17ypp4u7XuHupFNjvnnW8U' },
                 { name: 'Floral Print', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg2VvhdHeKL9Gnv3XegWtWz12A583PHJKTyWG4clUzeeczQCXoItU_ENNRoDrbP9JO0JlqFSEE6rLEZt7VG79XEAa54tj-nRgUszhqUEJLFBK_0ttT9sax0zpXiAGfObSKSoBR6ZzY5XTOG33bya1QZwMPm-pcAT2DEeMrW8L2haOhAOqKDhdC5pN3r5h_Hf8ANDFrM97z65DQ-oa5DJz8s8k_w0hRKK_5h9f30s5Cs_7Qv8tspDHD9xdwGMdN2XPT1GYRRKnXJKE' }
               ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                     <div className="aspect-square bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${item.img})` }}></div>
                     <p className="text-xs text-center truncate">{item.name}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
      
      {/* Visualizer Bottom Nav */}
      <div className="absolute bottom-0 w-full bg-[#322a1b]/90 backdrop-blur-md p-2 flex justify-around border-t border-[#463b25] z-30">
        <button onClick={() => navigate(AppRoute.HOME)} className="flex flex-col items-center gap-1 text-[#c6b695]">
           <span className="material-symbols-outlined">home</span>
           <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-white">
           <span className="material-symbols-outlined filled">dresser</span>
           <span className="text-[10px] font-bold">Wardrobe</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#c6b695]">
           <span className="material-symbols-outlined">auto_awesome</span>
           <span className="text-[10px] font-bold">Outfits</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#c6b695]">
           <span className="material-symbols-outlined">person</span>
           <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>

    </div>
  );
};
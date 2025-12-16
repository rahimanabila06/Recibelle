import React from 'react';
import { useNavigate } from 'react-router-dom';

export const StyleSwap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light font-display">
      <header className="p-4 flex items-center justify-between sticky top-0 bg-background-light z-10">
         <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-text-main">arrow_back</span></button>
         <h1 className="font-bold text-lg text-text-main">Style Swap</h1>
         <div className="w-6"></div>
      </header>

      {/* Tabs */}
      <div className="px-4 border-b border-gray-200 flex mb-4">
         <button className="flex-1 pb-3 border-b-2 border-primary font-bold text-sm text-text-main">Matches for You</button>
         <button className="flex-1 pb-3 border-b-2 border-transparent font-bold text-sm text-text-subtle">My Swaps</button>
      </div>

      <div className="px-4 pb-4">
         {/* Search */}
         <div className="bg-white rounded-lg flex items-center px-4 h-12 mb-4 shadow-sm">
            <span className="material-symbols-outlined text-gray-400">search</span>
            <input placeholder="Search items or users" className="flex-1 ml-2 outline-none bg-transparent" />
         </div>

         <div className="flex flex-col gap-4">
            {/* Swap Card 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
               <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbCmpeqLPnB7B1WcPcj-GPOlyycUi7N5NJPkUtpomHUjoj8VzA1OYBBWZwOaL_koskTJILnAbyBR4Ri50VgTf49UV1DmLkOuaU69LBIKrgegPD_9fOQ30qPmzhbXhkRi-xh1sP4ptNLI_FeuOf51Z4SUTYlHT7jVAJ08dXR5nHiiTAm9rSOREnhUT6LqlTlhcKiAhjkWtv7jv_HaeMj1iG0i3zW14ROWK-PZjJrAeiT3LWmjy71dHdqMNQ-WwyESSPF6dGDVpInW4")' }}>
                  <div className="absolute top-3 left-3 bg-black/40 text-white px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                     <span className="material-symbols-outlined text-sm">auto_awesome</span>
                     <span className="text-xs font-semibold">AI Suggested</span>
                  </div>
               </div>
               <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <h3 className="font-bold text-lg text-text-main">Vintage Denim Jacket</h3>
                        <p className="text-sm text-text-subtle">Brand: Levi's, Size: M</p>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC93C1XGYUDM6-FLuJmr6WGRD4pTzTY0ymjmK9lylZJ5p_EDQsyn9wxhagPjJapI9uAD5cHBrd6Ymc7MEtL5fN9xppl-V3CW49wMTnrDHxARabWUiHw4qcovlehhlSPoPumR1Er_tTGNfScsg1KwTrz5FmaUlIs2iU-UJ57pjqHN32ik17TlhANmEzps2l3HnxaSTzLVwnQ9Z2suL-YbNqmZNzZEmx0Dw8KPHl6JNL3VEzXHjkdiZhcNieWfPcG51_w6zW5ahI1pOE")' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-center my-2">
                     <span className="material-symbols-outlined text-primary text-2xl">swap_horiz</span>
                  </div>

                  <div className="mb-4 text-center">
                      <h3 className="font-bold text-lg text-text-main">Silk Scarf</h3>
                      <p className="text-sm text-text-subtle">Your Item - Brand: Gucci, Size: OS</p>
                  </div>

                  <div className="flex gap-3">
                     <button className="flex-1 bg-gray-100 text-text-main h-12 rounded-lg font-medium">Decline</button>
                     <button className="flex-1 bg-primary text-text-main h-12 rounded-lg font-medium">Accept Swap</button>
                  </div>
               </div>
            </div>

            {/* Swap Card 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
               <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9lTCSn8qcxo4EX6OSb75oVBQhyNnOZ5U2norzuXMb66xiPtdEXBBsHa5VUIE59oudGyGqo_ghWdLODeu8Mg1dydGoOZ2hkLEoGlLqvFeVj8ELghXThtsz5EPPeqWhLtfE78xfYPq6DN0DP4M57eLMirLmkIB1iwJYsKAJ-QDiIg0OQsDRQV1T1jQc2Xf0fpB3lYlWawzYzTdE2Cm5X7lySFHIoXab_A2AV8SqbIPzEBRRE4VKtmImfFO1WHspUrbCsd8vz-MBMKo")' }}>
                  <div className="absolute top-3 left-3 bg-black/40 text-white px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                     <span className="material-symbols-outlined text-sm">auto_awesome</span>
                     <span className="text-xs font-semibold">Good Match</span>
                  </div>
               </div>
               <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <h3 className="font-bold text-lg text-text-main">Leather Ankle Boots</h3>
                        <p className="text-sm text-text-subtle">Brand: Dr. Martens, Size: 8</p>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiWoZ5bqFYvTLpIjor3Svl4kWtQ85gtyBmpMe8_KXQ6VyPbqQB80pUYuuLCUQXKJK_HB2AquXqa1Mm68bOW_UQLQFHmM7rBK74MLUV1XyL5B7L9sgwYOYtT6_XA0pF8Os0TiRN4-oHyomVNjSjQLf4w-79fa-iGtIW3Xv0gMkRYhT0DWZJk1LVo6wKKBlPhDSen_JGeqM6HB2Z97OcuNALWP3CCng_cnUXcAs8H4rn1Jf-GqHoeDaJzCD_jGG-zOwJ0OCK9kyOsxg")' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-center my-2">
                     <span className="material-symbols-outlined text-primary text-2xl">swap_horiz</span>
                  </div>

                  <div className="mb-4 text-center">
                      <h3 className="font-bold text-lg text-text-main">Floral Midi Dress</h3>
                      <p className="text-sm text-text-subtle">Your Item - Brand: Zara, Size: S</p>
                  </div>

                  <div className="flex gap-3">
                     <button className="flex-1 bg-gray-100 text-text-main h-12 rounded-lg font-medium">Decline</button>
                     <button className="flex-1 bg-primary text-text-main h-12 rounded-lg font-medium">Accept Swap</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <div className="fixed bottom-6 right-6">
         <button className="w-16 h-16 rounded-full bg-primary text-text-main shadow-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl">add</span>
         </button>
      </div>
    </div>
  );
};
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MixMatch: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-background-light font-display">
      <div className="p-4 flex justify-between items-center bg-background-light">
         <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-text-main">arrow_back_ios_new</span></button>
         <h1 className="text-lg font-bold text-text-main">Mix & Match AI</h1>
         <span className="material-symbols-outlined text-text-main">replay</span>
      </div>

      <div className="flex-1 flex flex-col p-4">
         {/* Canvas Area */}
         <div className="bg-white/50 rounded-xl p-4 mb-6 flex-1 flex flex-col justify-center items-center relative overflow-hidden">
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="col-span-2 flex justify-center">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfmU3hnbGzncothQ9F5nbrbNNao9hfJeb5pK-wZMrEsEeZfxe5XEXpGUqGlHrVJxtItnfA-hgV-xAInnUHI7Fj1U-9BO1lEZTgSg3eKmLsP_mwW3MHdvOxRvFrqHF3D2xteF0Zi10BErwOmAkVNLU9C3xgSjjmswSNp-KHAMuvrKQXooQLe9_JP7ang8nOFdut7a7AhPZsWk2saumveceyTU6k6Xk4yS_OJ4GB26Ny_a_8_u4XmjygOKPHKSgtOHQfV7mcE8S9MUQ" className="rounded-lg shadow-sm w-40" />
                </div>
                <div className="flex justify-center">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI5Dkr5P0LaWGEqLXBvSGdWxZxaZtO8F9qUkeMMYeTrsaIKqwFVRTJMcpaT89BoXXiVbzY_aHbzkmDv13qXJyMEGg9tnY4F98BF5AP8fRjC_Dc_pj0cu-AliZ6WToqafvNpDVmVUHZeBJZeJwquaE-QPUdWgjC_d57vI0rRym94NFNjA-HpeBjn4IqvFpUNHtvObJchBEG95s5Fk2qdF-WfdFpIr3FhJmf1fFGESf7kaafUOi-6WrEsxdDkPXDYMncQhdbF83L294" className="rounded-lg shadow-sm w-32" />
                </div>
                <div className="flex justify-center">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwU4cJdQWEIN4CDolBqF8Rp7wOIS2hA6KxSgdC2R_i--gBDynnToTrV1f35_bEqN1TrOvf-mvyw8vvD-Olm0pZ_ZcH_eIXid46XJS4BdvUsPpWWxrStPAHOBf-aqBnkfYv8HfteJwHYVhnZIvW1oQ4aE-ikczv-30aYb5M6XcRs5a8j4_4A0Ny9ulvi7B5NLDL2ejp4W5qTmgiwcwkQq23OKI5Bs2m-J0vcIimA6CTyGlKOsJzO1QB8sK6Az-Lz9J-b1kRM-zGQm8" className="rounded-lg shadow-sm w-32" />
                </div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 flex gap-3">
               <button className="flex-1 bg-white h-12 rounded-full font-bold text-text-main shadow-sm flex items-center justify-center gap-2">
                 <span className="material-symbols-outlined">bookmark</span> Save Outfit
               </button>
               <button className="flex-1 bg-white h-12 rounded-full font-bold text-text-main shadow-sm flex items-center justify-center gap-2">
                 <span className="material-symbols-outlined">ios_share</span> Share
               </button>
            </div>
         </div>

         {/* Suggestions Rail */}
         <div className="h-40 bg-white rounded-t-xl -mx-4 px-4 pt-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <h3 className="font-bold text-text-main mb-3">More AI suggestions</h3>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
               {[
                 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCWlc_fYhEADBYQa8e9xGSasKwGmqfouL-U3xhcF56lhVdQpnwXcRltY00angev9fPoVME4pEVHH3xE4C54LXxAla6cco2FSgnGzb9RP7lVAVMp9D13fStP4E4TWENiU_yL4COdpg3m0xBzvFNFMcdGjQ4qqXjV5Tbq6U3ysmYHT2Y3-CcNJLaGPMfCY6o3XgQWCeHZPl1LmCwhEzC0wR5eaL1ygglEPiESzB4_zQQopSLqNFdzbJVF7IYGghgLwmoCN0UBKVZBnM',
                 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnljUNrxv_nBjuT7RfrdYz-TCM3ovnaxUIZ7YW9ZEMOF7cymSwtpvfToxglemhSAUALbAt6obwrqk2e2b4zE9ABjzIt0Xp-lKX0y7d5ALnacXdOeCdGbTbLsEn43J45jvliptywYpRrfvvCceCDfe5t4GtvKMz7TBkmHY70owzCsRxBcanV7sxpAay1rVzSzUjBcr8dx52XqVFY3qox_68I52clc6Po5dr4oStfZmUFtmRyiG2_8-nlnIQICpqS_tEikw-RXOzAps',
                 'https://lh3.googleusercontent.com/aida-public/AB6AXuBctMFyEtjI-PcY5HSToSDIcMU2q00tF3Go912hBDr1y3raOKeVyJq2Wz2keZmkhoKi3tB_OCXHSjMTTql1Yy2XmBEEpDDxi6aD5jyFNxU24gns86ecIIwueoa7U1ao4NsXq0bbLSmn5BvE6SzAtbfri-7IF9JqSOtmQ-U9MBNnTQDDK_Ma0B_-8yUekDuR2jwC1B_ZWPS-wo8x06Lu2K0VrURCTwZL45gsmY1oOcwh-S7VuXBnQvWSFxo84N9W10Y85KK5y6P7Qxg'
               ].map((src, i) => (
                 <img key={i} src={src} className="h-24 w-24 rounded-lg bg-gray-50 flex-shrink-0 object-cover" />
               ))}
            </div>
         </div>
      </div>
      
      {/* FAB */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center text-white">
         <span className="material-symbols-outlined text-3xl">auto_awesome</span>
      </button>
    </div>
  );
};
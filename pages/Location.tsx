import React from 'react';
import { useNavigate, useLocation as useRouterLocation } from 'react-router-dom';
import { AppRoute } from '../types';

export const LocationPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useRouterLocation();
  const isSettingLocation = location.pathname === AppRoute.SET_LOCATION;

  // Render Set Location
  if (isSettingLocation) {
    return (
        <div className="min-h-screen bg-[#FDFBF8] font-display flex flex-col">
          <div className="sticky top-0 z-10 flex items-center justify-between bg-[#FDFBF8]/95 p-4 backdrop-blur-sm">
             <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-3xl text-[#5D4037]">arrow_back</span></button>
             <h2 className="flex-1 text-center text-lg font-bold text-[#5D4037]">Set Item Location</h2>
             <div className="w-12"></div>
          </div>

          <div className="flex w-full justify-center px-4 py-6">
             <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-[#EFEBE9] bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBKCRmD5SLO7MsWHqcC4mxQ3gfyY8bWgv04jIvmp2L54KLQFOsBqeL-n6JXRfuFm7aAi0FXCPcjM2Z5VHUX174qesBkVV3cEO6XM5hbSwUIVB5mjkTE0i2hzyKrLndMyfKy2B_2csFFZMm3NoICZZGaZz-zfMVRKi7eU6BH6i1XAFo4CnYVpb0L_GHINRoL5SL3f54ikge9H26E_YQxUOwRfpdcURX-aynerx1fRDmvNxWhCeRvZX3O0XgP7SGdaHSP6a08EArny4")' }}></div>
          </div>
          <p className="text-center text-[#5D4037] mb-4">Where did you put this item?</p>

          <div className="flex flex-col gap-3 px-4 flex-1">
             {['Top Shelf', 'Bottom Shelf', 'Left Hanger Rail', 'Right Hanger Rail', 'Drawer 1', 'Box A'].map((loc, i) => (
                <label key={loc} className={`flex items-center gap-4 rounded-xl border p-4 cursor-pointer ${i === 0 ? 'border-[#8D6E63] bg-[#8D6E63]/10' : 'border-[#EFEBE9]'}`}>
                   <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#EFEBE9] bg-white ${i === 0 ? 'text-[#5D4037]' : 'text-transparent'}`}>
                      <span className="material-symbols-outlined text-sm">check</span>
                   </div>
                   <p className="font-medium text-[#5D4037]">{loc}</p>
                   <input type="radio" name="location" defaultChecked={i===0} className="sr-only" />
                </label>
             ))}
          </div>
          
          <div className="sticky bottom-0 bg-[#FDFBF8] p-4">
             <button onClick={() => navigate(-1)} className="w-full h-12 bg-[#8D6E63] text-white rounded-xl font-bold shadow-lg">Save Location</button>
          </div>
        </div>
    );
  }

  // Render Search Location
  return (
    <div className="min-h-screen bg-background-light font-display">
       <div className="flex items-center bg-background-light p-4 justify-between sticky top-0 z-10">
          <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-2xl text-text-main">arrow_back_ios_new</span></button>
          <h2 className="text-lg font-bold text-text-main">Search Location</h2>
          <div className="w-6"></div>
       </div>

       <div className="px-4 sticky top-[60px] bg-background-light pb-4 z-10">
          <div className="bg-white flex items-center px-4 h-14 rounded-xl shadow-sm">
             <span className="material-symbols-outlined text-gray-400">search</span>
             <input placeholder="Search for an item (e.g., 'blue jeans')" className="flex-1 ml-2 outline-none" />
          </div>
       </div>

       <div className="px-4 flex flex-col gap-2">
          {[
            { name: "Levi's 501 Jeans", loc: "Top Shelf, Closet", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBDBPlf6tU6J7-nfj86PIwMzFNZ96rCdfyOM8tJS9IZzmV1s_o9elXQgMQFwoToUkS753lpSwBZ-QWAaTyhyFdIglYY-cxltU9nzSoPdMmYBF3Eu3cSL_IxYdx6Ae5f7zavuWIlreVk6Gnv-RdVKaFefaLwdxIxj_yIafuU0h6UxaQed36T-6CJCEnNLYK9Spq31HuQxcYhfhPqNKC2GvJd1ANp_QMkxJnqpLu715_prcVdvaSXq5lMbgptHAQAeutUO0QdsPzGXo" },
            { name: "White Summer Dress", loc: "Wardrobe, Section 2", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqhi6eCr1v8h1iQ-_7DwjUtxfCc2C7v_jabrlDaRdoOHT4F2o-XFDoIKero_9G_8JVDqfUicWA2fLPSzR5JxJFzuZj6KFBWr2YFpADI9iEmQMFSO58RLhkpiFkbQmsLtKZfMHduDIOAzmr6XMSuIznbiC1PjaRMdnLeByRGdopVqJrB28V9zHpPNYKVus_H7fN5w-eEHVaCmDw2AKHuXPb9VbkEOCpEhCnicvjpPsFoMrx2tnI0bxtc9niVVkYgMuDCiRc39A6n_E" },
            { name: "Brown Leather Jacket", loc: "Box A, Under Bed", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoL4G3y4ZoLA72LlJF530TY-1mKNmMtjBaj1w-hSS8zk3jqcrpUWqCtCdZjf_pgmauIagSEnEkZJvwXUbGDhmLyD1xWwdn2QxmwFnqjWwJ_MztpT2g4I6jrSB6eztmWyD3hAN-CpvpzxsWmyS0Tp3U-21HQ-KqQmO4ysapG6QuUvnwiZLBEu9Nsw1WiXOKzrQOqSDTICTGUpwP8kD-dhywSdHfZWvuNZSgB4tpveAWjUrgIBjZboboFMgccc15BqhHP6xDavm-RRo" }
          ].map((item, i) => (
             <div key={i} className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="flex-1 min-w-0">
                   <p className="font-bold text-text-main truncate">{item.name}</p>
                   <p className="text-sm text-text-subtle truncate">{item.loc}</p>
                </div>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
             </div>
          ))}
       </div>
    </div>
  );
};
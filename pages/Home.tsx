import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: 'photo_camera', title: 'Scan Wardrobe', subtitle: 'Add new items', route: AppRoute.SCAN },
    { icon: 'auto_awesome', title: 'Mix & Match AI', subtitle: 'Create unique outfits', route: AppRoute.MIX_MATCH },
    { icon: 'calendar_month', title: 'Planner', subtitle: 'Schedule your looks', route: AppRoute.PLANNER },
    { icon: 'location_on', title: 'Wardrobe Locator', subtitle: 'Find your clothes', route: AppRoute.SEARCH_LOCATION },
    { icon: 'style', title: 'Style Swap', subtitle: 'Trade with friends', route: AppRoute.STYLE_SWAP },
    { icon: 'storefront', title: 'Thrift & Re-Wear', subtitle: 'Sustainable choices', route: AppRoute.THRIFT },
    { icon: 'recycling', title: 'Re-Wear Recs', subtitle: 'Give it another chance', route: AppRoute.RE_WEAR },
    { icon: 'view_in_ar', title: '3D Visualizer', subtitle: 'View your closet', route: AppRoute.VISUALIZER },
  ];

  return (
    <div className="min-h-screen bg-background-light pb-24 font-display">
      {/* Header */}
      <header className="p-4 bg-background-light sticky top-0 z-10">
        <div className="flex justify-between items-center mb-2">
           <div 
             className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
             style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5oAL3AS8WnrX0YR16NbtPJ-U6BPaOSiiD-3Wpr-O_eb1sCZ9p7rpXtEWlo3VDRGfkctDs05wZTTUW4Sr_rDtAOZgz_UOsVY8Ji0JMmjOc2zcdMDOjfloLl5ivq-zolukEyUw9aLLTDe0mum4KiOotXKk2Eiku4v990kI4A8BO3qYFiYVkSBpUlfMkCFXldLl1Xjlq1A-_7QrspPkCSSNMqmHvwn3BgE8x56qjqmpsWtguk45-ORecR7HVk8PewuiXQNhDvcZZYME")' }}
           ></div>
           <div className="flex items-center gap-2">
             <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-text-main">
               <span className="material-symbols-outlined">notifications</span>
             </button>
           </div>
        </div>
        <p className="text-2xl font-bold text-text-main">Sunny, 18°C</p>
        <h1 className="text-3xl font-extrabold text-text-main mt-1">Good Morning, Olivia</h1>
      </header>

      {/* Today's Look */}
      <section className="px-4 mt-2">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div 
            className="h-64 w-full bg-cover bg-center"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPI5bJ47tztxDUT0jan0r0KVHSES7i4cqcdQjx7zMPjy47vlAlSQKBcHjcVt403t2sNpPFEYrEBuLQ_kz89GFZRIAg4gScMaSk6FO7dnHB1E2R1uduaK-LS3DWkY5PPy3drlNfG8xsLQvw9YG9M5UAb8u1wthXDVlqk3lvqfV6QkmTAhpIJmZUlUlQ36WnOwQT1B3GLCrEIGS5zUBpj-jepvUu_KsAaENt2VJ-1R1g8zY2DiNP0ooKJnJ9CGg3DhL9dPzKz5yZRsg")' }}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-text-main">Today's Look</h3>
            <div className="flex justify-between items-end mt-1">
              <p className="text-text-subtle text-sm max-w-[70%]">Based on today's weather and your style profile.</p>
              <button 
                onClick={() => navigate(AppRoute.OUTFIT_DETAILS)}
                className="bg-primary text-text-main px-4 py-2 rounded-lg text-sm font-bold shadow-sm"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Menu */}
      <section className="px-4 mt-8">
        <h3 className="text-lg font-bold text-text-main mb-4">Explore Your Wardrobe</h3>
        <div className="grid grid-cols-2 gap-3">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              onClick={() => navigate(item.route)}
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3 active:scale-95 transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-3xl text-text-main">{item.icon}</span>
              <div>
                <h4 className="font-bold text-text-main text-sm">{item.title}</h4>
                <p className="text-text-subtle text-xs">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
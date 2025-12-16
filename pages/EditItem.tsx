import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../types';
import { AnalyzedItem } from '../services/ai';

export const EditItem: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState<AnalyzedItem | null>(null);

  useEffect(() => {
    if (location.state?.itemData) {
      setData(location.state.itemData);
    } else {
        // Fallback if accessed directly without scanning
        setData({
            itemName: "White Linen Shirt",
            category: "Tops > Shirts",
            color: "White",
            brand: "Everlane",
            size: "M",
            season: "Summer",
            tags: ["casual", "work", "linen"],
            description: "Slightly oversized fit. Goes well with jeans."
        });
    }
  }, [location]);

  if (!data) return <div className="min-h-screen bg-[#F7F3F0] flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="min-h-screen bg-[#F7F3F0] font-display pb-12">
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-[#F7F3F0]/90 backdrop-blur-md">
         <button onClick={() => navigate(-1)} className="text-[#8D7B68] font-medium">Cancel</button>
         <h2 className="text-lg font-bold text-[#4A453F]">Edit Item</h2>
         <button onClick={() => navigate(AppRoute.WARDROBE)} className="text-[#8D7B68] font-bold">Save</button>
      </div>

      <div className="px-4">
        <div className="w-full h-80 rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDo0dp2KVKpv9se6gYAgBylvJ0Y2fpwUJ0vGXg1lCEs8LNOLN9G8CE0_BVfGbEccADL_Y-trYxOihhiopE3R7Tyat3YgVUTNjjcSNWLgSQk8B5vM4QfjA1v7VE6cjIpl4c45pE3JDm__RcMrcJSkmdMgYe_5a01VCphAWbuTkBKhSRJTJ8nTqcYs8mOhl7botb584AujKQIq5mUowVPrpndczBhQVUONXd3jaOU5JxUkNowrqIV6g5ekHspo28QLygvOL_VHWFJfvk")' }}></div>
        
        <button onClick={() => navigate(AppRoute.SET_LOCATION)} className="w-full bg-[#8D7B68] text-white p-4 rounded-xl flex items-center justify-center gap-2 font-bold mb-6">
           <span className="material-symbols-outlined">location_on</span> Set Location
        </button>

        <h3 className="font-bold text-[#4A453F] mb-2 px-2">Basic Information</h3>
        <div className="bg-white/50 border border-[#D3C5BC]/30 rounded-xl overflow-hidden mb-6">
           <div className="flex justify-between items-center p-4 border-b border-[#D3C5BC]/30">
              <span className="text-[#4A453F]">Item Name</span>
              <input 
                className="text-right bg-transparent border-none outline-none text-[#4A453F] font-medium"
                defaultValue={data.itemName} 
              />
           </div>
           <div className="flex justify-between items-center p-4 border-b border-[#D3C5BC]/30">
              <span className="text-[#4A453F]">Category</span>
              <span className="text-[#8D7B68] font-medium flex items-center gap-1">{data.category} <span className="material-symbols-outlined text-sm">arrow_forward_ios</span></span>
           </div>
           <div className="flex justify-between items-center p-4">
              <span className="text-[#4A453F]">Color</span>
              <div className="flex items-center gap-2 text-[#8D7B68] font-medium">
                 <div className="w-4 h-4 rounded-full bg-white border border-gray-300"></div>
                 {data.color} <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
              </div>
           </div>
        </div>

        <h3 className="font-bold text-[#4A453F] mb-2 px-2">Details</h3>
        <div className="bg-white/50 border border-[#D3C5BC]/30 rounded-xl overflow-hidden mb-6">
           <div className="flex justify-between items-center p-4 border-b border-[#D3C5BC]/30">
              <span className="text-[#4A453F]">Brand</span>
              <span className="text-[#4A453F]">{data.brand}</span>
           </div>
           <div className="flex justify-between items-center p-4 border-b border-[#D3C5BC]/30">
              <span className="text-[#4A453F]">Size</span>
              <span className="text-[#8D7B68] font-medium flex items-center gap-1">{data.size} <span className="material-symbols-outlined text-sm">arrow_forward_ios</span></span>
           </div>
           <div className="flex justify-between items-center p-4">
              <span className="text-[#4A453F]">Season</span>
              <span className="text-[#8D7B68] font-medium flex items-center gap-1">{data.season} <span className="material-symbols-outlined text-sm">arrow_forward_ios</span></span>
           </div>
        </div>

        <h3 className="font-bold text-[#4A453F] mb-2 px-2">Organization</h3>
        <div className="bg-white/50 border border-[#D3C5BC]/30 rounded-xl overflow-hidden mb-8">
           <div className="p-4 border-b border-[#D3C5BC]/30">
              <label className="block mb-2 text-[#4A453F]">Tags (AI Suggested)</label>
              <div className="flex flex-wrap gap-2">
                 {data.tags.map(tag => (
                    <span key={tag} className="bg-[#8D7B68]/20 text-[#8D7B68] px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      {tag} <span className="material-symbols-outlined text-[14px]">close</span>
                    </span>
                 ))}
                 <span className="text-[#4A453F]/50 text-sm py-1 ml-2">Add tag...</span>
              </div>
           </div>
           <div className="p-4">
              <label className="block mb-2 text-[#4A453F]">Notes</label>
              <textarea 
                className="w-full bg-transparent border-none p-0 text-[#4A453F] resize-none focus:ring-0" 
                rows={2} 
                defaultValue={data.description}
              />
           </div>
        </div>

        <button className="w-full py-3 bg-red-100 text-red-500 rounded-lg flex items-center justify-center gap-2 font-bold">
           <span className="material-symbols-outlined">delete</span> Delete Item
        </button>
      </div>
    </div>
  );
};
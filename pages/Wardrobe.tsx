import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

const SAMPLE_ITEMS = [
  { id: '1', name: 'White Linen Shirt', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6OOD9UDCdS814gEpbkxjZ66u9OZi120kOvTwbAtu7ViSYHOnxqQVrgXF287MW33IYS69HaW1R47XkOQMwq-EmLuDEtgIbOhbS7xU7ROp_V4qmDEepwSp92x8HLvsjo3Sj4kKRVe3os6qfQ32hoN9DVAWeAXbdZkaEPIY4KR0RkiECDib-busBLi3vMd2eYldzE3MjFLfEfZSd-FUPQcwR0T_L_fXXeIzhCb6LXMP2LOOMtwa9cNTqBw3T4f67sZGOkA7xvN0JMdI' },
  { id: '2', name: 'Blue Denim Jeans', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8eG_jx8pBzY4W9I0Zz1tWHZ27FBkUHkWkZVyq9VmJ9j_3uI7HPQICFDZcwO9z7O4krd0d1MvHZ8J3oGHUwbuVya73kwlgHqVlkWxZRnIlgQ4_6Iawpova7HrWx9JGEUUP0C0-QOaC7aXiTL7PXfHcmedBUASWGBE96cGPSHm53Zqn_SUsTPzCg19lIMhCAR0VEpEZvyeTZwyHs4vwRUc7Zzgp75RPrkv8j7sKAaHE-vOBUe6q-1L8eydrJwJGC5Kwlc4cHZYDyZA' },
  { id: '3', name: 'Brown Leather Boots', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4exNccLDXReGsMnqB7CTFFfc7SSwWWMB0znxn1TZMW9QPddo2dm1ooqVr14khpVqqrHcs5_YLQp-znnaDA_5KICi2XB6wvMh9s45MbhHNf9sZSRNqxX3osSLdXMitok5giEgO_2oaqZCgduM36QMdEt2KRyFZkUFYjsHsbtXTS3Ek-HjJX8eeKz1DyGucZJ_-4WaP0tdEld37cZzAr2JQlr9ecB8_o5drEwKwjbYtqkDZnmOB5YAMXGpEXpZW7YemyyaoNOzgo6k' },
  { id: '4', name: 'Black T-shirt', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMUOMudu2d6a0vrXLqoNJjDwwEe0sgoMj4foBV39RhwHR_KJS9yaTogT6myx57XpdnBqr6Iu6VzPzimraswKck2v7tk8U6opqlvOBTwuSwOFGJKIHc7To7B7WGYOVWrkSsx9F6O_l2Y-T8nTm7MAN_8RD99QFcS-BA5y8j5npyYSf2ENyMgOME9YRIBGRaHIsuS94U91jpJ4crr-AOZxuHnJoGSS_KKImWL90OyfnfvdtNLluYJT2WZu7GFXDfVecadXt57c8n684' },
  { id: '5', name: 'Grey Sweatpants', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6toxD_gXnNAzgO4B3OGHzzObe-FhAnrkMHeUioVqpxce8nlJf_btM3fpMcouCRZmJWa675NR_rEAFy2iiLsPaj6_RW_z4TBlTYFFhCkCpe2vUi0IKCsNxUHFulj-DSEdctJVT38txVlxbgEZUj5f4e7upyAbSSPChPOiRdElUaPtnZSHstFvpdOavQRRhOcz8IYXMXzlxBcHgAjVJgR-DLV0epTLM4pJKqmgGSAQS_fyBquua5dHAl06jgsEUqkr4Wztjota7nKo' },
  { id: '6', name: 'White Sneakers', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhaT7kGfZGKVmDI35cGyetPt6r6xv-fNuBFJVbp2_UtNcDNIid1_qhBwTVTdC91I559pWACzbaqT2BDpdqaCzq7aALRdCXsxNTq-IXdjQ-0SUJPEvUiw88Qd5xmKzVqo5WzYe29ZXSVarug2DXRgkfP0iHNuunLaykTyhKOyCC628GPwgFCbc6zqg9faTvXUjNQvn1_uSgHzkmTQUaIlOBVUPARhHVSOskNzlpmQcrGTIumWAXgX2vLR1rYZMFSBo_gz-HS-C6GYc' },
  { id: '7', name: 'Floral Sundress', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAgLtU8D8Ts3ayz3NeuLvLljKjltr5cIU6yD4DAMaH-kX_tZIScLDJKy-KsLH5XEJOiByLmJcwpjmDApeyl1_z9Rw18_XTPnz-vGxcxuThQE-j89yvfXCIwnbXaMlU8y6KOopUqzVi28KKCHWQyMM_vUjRe2yX5ZVNnsbaMe4DrqppQU671pOzALKTKkn59MKdnDQokylH78OR5k9KZZGSU1_jDB1g-DYwlYSymeIV6-TSwB-p0kaoURwXE05Rd5fp2JI1vmHCKJ8' },
  { id: '8', name: 'Beige Trench Coat', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDprGdexA3Jj0NgwE2TNAIYMSBGh6045Azr91hE08WRh8o4EtVGauthoeBxHhF1XC52Ing_q3WPda_6PAQW68yEDdBjX1CZ1O5W99aepHO8zp0HIQZVUH-ToO1vrJlKYTnX0960pl65gZOP2aeb1kJXp3L0ExS4MeU34KsmK62RLyohwmRSlMobw7Wdb3797DchiNv3lYH6UeoXLCPgVWJCYwKQGb5TK7hZ7uGqmOgW1GA2NjwyPcW5l0Kq-2iHu8Rx8BeAekn8ycM' },
];

export const Wardrobe: React.FC = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-screen bg-background-light pb-24 font-display relative">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background-light/95 backdrop-blur-sm p-4 border-b border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate(-1)} className="text-text-main">
            <span className="material-symbols-outlined text-3xl">arrow_back_ios_new</span>
          </button>
          <h1 className="text-2xl font-bold text-text-main">My Wardrobe</h1>
          <button onClick={() => navigate(AppRoute.SCAN)} className="text-text-main">
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>

        {/* Search & Filter Trigger */}
        <div className="flex gap-2">
          <div className="flex-1 bg-white rounded-xl flex items-center px-4 h-12 border border-gray-200">
            <span className="material-symbols-outlined text-gray-400">search</span>
            <input placeholder="Search for clothes" className="flex-1 ml-2 outline-none bg-transparent" />
          </div>
          <button 
            onClick={() => setShowFilter(true)}
            className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-text-main"
          >
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>

        {/* Chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mt-4 pb-2">
          {['All', 'Tops', 'Bottoms', 'Shoes', 'Dresses', 'Outerwear'].map((cat, i) => (
            <button 
              key={cat}
              className={`px-5 h-10 rounded-lg whitespace-nowrap text-sm font-medium ${
                i === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-text-main'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 mt-2">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-text-subtle">124 items</span>
          <div className="flex gap-2">
             <button className="flex items-center gap-1 text-sm font-bold text-text-main">
               Sort by <span className="material-symbols-outlined">swap_vert</span>
             </button>
             <span className="material-symbols-outlined text-text-main">grid_view</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {SAMPLE_ITEMS.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(AppRoute.EDIT_ITEM)} // Simulating opening item details
              className="aspect-square rounded-xl bg-cover bg-center relative group overflow-hidden"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                 <p className="text-white font-bold text-sm leading-tight">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Modal Overlay */}
      {showFilter && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowFilter(false)}></div>
          <div className="bg-white rounded-t-3xl p-6 relative z-10 animate-slide-up">
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-text-main">Filter & Sort</h2>
              <button className="text-primary font-bold text-sm">Reset</button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-text-main mb-3">Type</h3>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Tops', 'Bottoms', 'Dresses', 'Shoes'].map(t => (
                     <span key={t} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-text-main">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-text-main mb-3">Color</h3>
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full border border-gray-300 bg-white"></div>
                   <div className="w-8 h-8 rounded-full bg-black"></div>
                   <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                   <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                   <div className="w-8 h-8 rounded-full bg-green-500"></div>
                   <div className="w-8 h-8 rounded-full bg-red-500"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <h3 className="font-bold text-text-main mb-2">Season</h3>
                    <select className="w-full bg-gray-100 border-none rounded-lg p-3 text-text-main outline-none">
                        <option>All Seasons</option>
                    </select>
                 </div>
                 <div>
                    <h3 className="font-bold text-text-main mb-2">Occasion</h3>
                    <select className="w-full bg-gray-100 border-none rounded-lg p-3 text-text-main outline-none">
                        <option>Any Occasion</option>
                    </select>
                 </div>
              </div>

              <button 
                onClick={() => setShowFilter(false)}
                className="w-full h-14 bg-primary text-white rounded-xl font-bold text-lg mt-4"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
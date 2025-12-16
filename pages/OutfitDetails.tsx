import React from 'react';
import { useNavigate } from 'react-router-dom';

export const OutfitDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light pb-24 font-display">
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light">
        <button onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined text-text-main">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold text-text-main">Today's Outfit</h1>
        <div className="w-6"></div>
      </div>

      <div className="px-4">
        {/* Hero Image */}
        <div 
          className="w-full h-96 rounded-xl bg-cover bg-center mb-6"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCH02alkl6dNrgeGxqTNza5s8RTmHOxp4_Jxs-QlbX_Zf57Xt9E1YlMvrlx-bQcLWEq_Zu_xMlPljnjHHlbOqFgLapyyEZPcRA2SuzuIRRfpAFcq8v3tFRyzqiEJfXK50hW1waqLa95UBFb8nBgC8DfkAeltxQwbd5d19_jS6gNMVMbSA4tLhEcy6lhALYeOqFyVy3v2Yx6RpNlgMHprYsVt3cgRoCxV8rYhKyFbgZ-Xa_dutAfRMeH4KdSEcxBLGtguRluu1nwqXw")' }}
        ></div>

        <h2 className="text-2xl font-bold text-text-main mb-3">Outfit Items</h2>
        <div className="grid grid-cols-2 gap-3 mb-6">
           <div className="bg-white p-2 rounded-xl">
              <div className="aspect-square bg-gray-100 rounded-lg mb-2 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYkIs5yfqudHnNAmHCxs8yd-dNGn-3mrKg0NpyVxuEZGBvIrMZCaZwekqS7YONXDSVq9gJn3xLvjBWJIn5nPBahLKpkyJ7KXpdDIOnm5SL58rY-O74k04Qxt-tNjTdr6lFYJ5RXS016odCyOx7UH4uEl7SE8iTY5sJU5aCUITxqLUz_SnqshE8zQxZDFd-EfbP13rMrbkR1rIQtiDV-se2x1gLuzGCBIz4f3EWkRH_-TZ9jy1OuC93WmKonEATZMf5l3soW1gG25s")'}}></div>
              <p className="font-bold text-text-main text-sm">White Linen Shirt</p>
              <p className="text-text-subtle text-xs">Top</p>
           </div>
           <div className="bg-white p-2 rounded-xl">
              <div className="aspect-square bg-gray-100 rounded-lg mb-2 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAN0Rz8YwJbJMpo0UWv0tPMntRS-cO3s0yE7qEckPcl4HX4k_jJxfypjj-ai4jj2OCJU-2kJlxr8fT5pP4AdrJBcVFVpZ0GDhX9kDTaShlP-4GVfqrcldA_LM6MTr0EktfuKuyB-dR-RIJRqzdFC4VJLGoYB1RbUrRHezYE5zJNw4VYFQCUrVrNOJs2xsa3hbHOR8_-5sf561rvWUHv3r8SaOC97ql61A8S2U4At3kq2a9ZKsIA-rGx5og65xcmTnCkG2iP2EoLfqg")'}}></div>
              <p className="font-bold text-text-main text-sm">Denim Jeans</p>
              <p className="text-text-subtle text-xs">Bottom</p>
           </div>
           <div className="bg-white p-2 rounded-xl">
              <div className="aspect-square bg-gray-100 rounded-lg mb-2 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDArqxMzHIw-leguqbPJY-Is0QEQkCcyQWIgjSDklr7OiVUXofSWNVONaU8d4mlbQWQKQzjvn1-1k5zY8LabO3QtynnUhNZCfpHmFZqz5F7h8DhTemZ5juoGOLAKC3YNP8LtAP2nvnOQluQ797vxX-OLIoVtMf2WHt2Cb0HrFhaZLGZlhIfaxfR4e4ero69xxRW__i0ZwZV52XD8snbeEGPdX2-UpEuRPRMCN6f9CTzb-6sphZcx1FW4bkSxmpvPTTPvlbkM1e1IyA")'}}></div>
              <p className="font-bold text-text-main text-sm">Leather Boots</p>
              <p className="text-text-subtle text-xs">Shoes</p>
           </div>
           <div className="bg-white p-2 rounded-xl">
              <div className="aspect-square bg-gray-100 rounded-lg mb-2 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBa-waXoSWRwOw0VDBUs092cPqKhxkUe4abmWoNVgE4pgya2kBI4oG4mw6XmaPa7Jl3k_yOKINVFyhtBApAtw10Bt4p1JNgxXPUncK4lSdLsINs_6UZJLf1GTa52T0_RRNSv9j0xSpvEPOEbzeMxWvvEkw0njZblDfdr7EUWtLmgg6vhF5FRrJshkHuVqxfX-oXvdLD8oQhrtEf8ztFsudObVM8YE49cBjZodMxaDAQN4nTn2DYVV4ylwHgpSTvay71mYvlDYRIk7k")'}}></div>
              <p className="font-bold text-text-main text-sm">Gold Necklace</p>
              <p className="text-text-subtle text-xs">Accessory</p>
           </div>
        </div>

        {/* Styling Tips Accordion Style */}
        <div className="border-t border-gray-200 py-4">
           <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-text-main">Styling Tips</h3>
              <span className="material-symbols-outlined">expand_less</span>
           </div>
           <p className="text-text-subtle text-sm leading-relaxed">
             Perfect for a casual brunch or a day of shopping. Roll up the sleeves for a more relaxed look. Complements well with a tan crossbody bag.
           </p>
        </div>

        <div className="border-t border-gray-200 py-4 mb-6">
           <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-text-main">Occasion</h3>
              <span className="material-symbols-outlined">expand_more</span>
           </div>
        </div>

        <button className="w-full h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2">
           <span className="material-symbols-outlined">calendar_month</span>
           Schedule this Outfit
        </button>
      </div>
    </div>
  );
};
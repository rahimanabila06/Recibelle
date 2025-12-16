import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Thrift: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light font-display flex flex-col">
      <div className="p-4 flex items-center gap-4 sticky top-0 bg-background-light z-10">
        <button onClick={() => navigate(-1)} className="text-text-main"><span className="material-symbols-outlined text-2xl">arrow_back</span></button>
        <h1 className="font-bold text-lg text-text-main">List an Item</h1>
      </div>

      <div className="flex-1 p-4 flex flex-col gap-6 pb-24">
        {/* Photos */}
        <div>
           <h3 className="font-bold text-text-main text-lg mb-2">Upload Photos</h3>
           <p className="text-sm text-text-subtle mb-3">Add up to 5 photos. The first photo will be your cover image.</p>
           <div className="flex gap-3 overflow-x-auto">
              <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-1 bg-white cursor-pointer">
                 <span className="material-symbols-outlined text-primary text-3xl">add_a_photo</span>
                 <span className="text-xs font-bold text-primary">Add Photos</span>
              </div>
              <div className="w-24 h-24 rounded-lg overflow-hidden relative">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpV-G5W4tZ1tMPenXwAhyLrp2SFeHOVk1dVeDa58SQZ9mMuEFdGIEkkTY99ccIwHmiGSoieGDYJ3lTXLwzUHcpVqNPd19fCZh8K1ToUuGQLTJRnD-Xv-oKSWT9h_tf4ir8_hLMUih-ID0AfhhpeA5XZp24pimL8U7JujctdML8HivvgQp1fO082ZdBjSBg-oub8x1eBUf6vTqd-3WX95DWgHF6z4pTJ9DMTSD87_C0lHIG9MTl02sFr883MEOkUiFCF4_9T2nQQoA" className="w-full h-full object-cover" />
                 <div className="absolute top-1 left-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">Cover</div>
              </div>
              <div className="w-24 h-24 rounded-lg overflow-hidden relative">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuzq2z9p-noilfYnFpo8OJ6o4Jek0FVLVYRISxaXJdtwdHoMH-L5qmMrThCCtRoB1qy9zTFDQn3StopZL7j9dqmwyXvx7V4A9sX9mq_csDGnP46heMEy7mTuQGrYvHgysdRJ3GfbyVisvZ6FaKMQ4VHP5-XkYnV_t8JS0PbRT7D9J4qyvWLyz8PPV6vGII7UnxnEJOiwYuFhVrkG_e0_-ICZrcDALItJ3NJFec8A-VBF5QMb8A8frMX_iQYhNzS9gKcZfVCSQAhhw" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>

        {/* AI Assessment */}
        <div>
           <h3 className="font-bold text-text-main text-lg mb-3">AI Assessment</h3>
           <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                 <span className="text-sm text-text-subtle">AI-Assessed Condition:</span>
                 <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">Excellent</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-sm text-text-subtle">Recommended Price:</span>
                 <span className="text-sm font-bold text-text-main">$45.00</span>
              </div>
              <p className="text-xs text-text-subtle text-center">Our AI has assessed your item. Adjust the price as you see fit.</p>
           </div>
        </div>

        {/* Details Form */}
        <div>
           <h3 className="font-bold text-text-main text-lg mb-2">Item Details</h3>
           <div className="space-y-4">
              <div>
                 <label className="text-sm font-medium text-text-main block mb-1">Item Title</label>
                 <input type="text" placeholder="e.g. Cream Cable Knit Sweater" className="w-full rounded-lg border-gray-200 bg-white" />
              </div>
              <div>
                 <label className="text-sm font-medium text-text-main block mb-1">Description</label>
                 <textarea rows={4} placeholder="e.g. Worn only a few times..." className="w-full rounded-lg border-gray-200 bg-white"></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="text-sm font-medium text-text-main block mb-1">Category</label>
                    <select className="w-full rounded-lg border-gray-200 bg-white"><option>Sweaters</option></select>
                 </div>
                 <div>
                    <label className="text-sm font-medium text-text-main block mb-1">Size</label>
                    <select className="w-full rounded-lg border-gray-200 bg-white"><option>Small</option></select>
                 </div>
              </div>
              <div>
                 <label className="text-sm font-medium text-text-main block mb-1">Your Price</label>
                 <div className="relative">
                    <span className="absolute left-3 top-2 text-text-subtle">$</span>
                    <input type="text" defaultValue="45.00" className="w-full rounded-lg border-gray-200 bg-white pl-7" />
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-background-light p-4 border-t border-gray-200">
         <button className="w-full bg-primary text-white h-12 rounded-xl font-bold">Post to Marketplace</button>
      </div>
    </div>
  );
};
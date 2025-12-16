import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Planner: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState('Wed');

  const days = [
    { day: 'Mon', date: '12' },
    { day: 'Tue', date: '13' },
    { day: 'Wed', date: '14' },
    { day: 'Thu', date: '15' },
    { day: 'Fri', date: '16' },
    { day: 'Sat', date: '17' },
    { day: 'Sun', date: '18' },
  ];

  return (
    <div className="min-h-screen bg-background-light font-display pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background-light/95 backdrop-blur-sm p-4 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-text-main text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold text-text-main">Outfit Planner</h1>
        <button className="w-10 h-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-text-main text-2xl">more_horiz</span>
        </button>
      </div>

      {/* Calendar Strip */}
      <div className="flex justify-between px-4 py-2 overflow-x-auto no-scrollbar gap-2 mb-6">
        {days.map((item) => (
          <button
            key={item.day}
            onClick={() => setSelectedDay(item.day)}
            className={`flex flex-col items-center justify-center min-w-[56px] h-[72px] rounded-2xl transition-all duration-200 ${
              selectedDay === item.day 
                ? 'bg-primary text-white shadow-lg scale-105' 
                : 'bg-white text-text-subtle border border-gray-100'
            }`}
          >
            <span className="text-xs font-medium mb-1">{item.day}</span>
            <span className="text-lg font-bold">{item.date}</span>
            {selectedDay === item.day && (
                <div className="w-1 h-1 bg-white rounded-full mt-1"></div>
            )}
          </button>
        ))}
      </div>

      {/* Schedule Content */}
      <div className="px-4 flex flex-col gap-6 relative">
        <div className="flex justify-between items-end mb-2">
            <h2 className="text-xl font-bold text-text-main">Wednesday, Oct 14</h2>
            <span className="text-sm text-text-subtle font-medium">2 Events</span>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-[3.25rem] top-10 bottom-0 w-0.5 bg-gray-200 -z-0"></div>

        {/* Event 1 */}
        <div className="flex gap-4 relative z-0">
           <div className="flex flex-col items-center pt-1 w-14 shrink-0">
              <span className="text-sm font-bold text-text-main bg-background-light z-10 py-1">09:00</span>
           </div>
           <div className="flex-1 bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-primary/30 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <h3 className="font-bold text-text-main text-lg">Office Work</h3>
                    </div>
                    <p className="text-xs text-text-subtle pl-4">Business Casual • 09:00 - 17:00</p>
                 </div>
                 <button className="text-gray-300 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">edit</span>
                 </button>
              </div>
              
              <div className="flex gap-2">
                 <div className="w-14 h-14 bg-gray-50 rounded-xl bg-cover bg-center border border-gray-100" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDThOmVKRgOpMykVqWSIsVP8BTC5142HJjFZ8w4L0gnTFAMJv-pXfwvtPI1YRvacWSsvBSkj5HPAXJSlCXpow37-Aj3Xupcrn0FG-ZUTXIZQaccPfoyGq8w9MSKvXnSlb230J1uBTwEcGNSu7w2_1j2NcHpN0H6sdHszNomeRO8hz13UAqX5RXcBP0vxNEiL7IXEf51mNhR8fAYy-EQWEbXMLTeO_SyX0Wlr4-hZXsqU8vl1Gf1PJC0DI0-KsH6YwgUvSu2Ke9m8QM")'}}></div>
                 <div className="w-14 h-14 bg-gray-50 rounded-xl bg-cover bg-center border border-gray-100" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBctMFyEtjI-PcY5HSToSDIcMU2q00tF3Go912hBDr1y3raOKeVyJq2Wz2keZmkhoKi3tB_OCXHSjMTTql1Yy2XmBEEpDDxi6aD5jyFNxU24gns86ecIIwueoa7U1ao4NsXq0bbLSmn5BvE6SzAtbfri-7IF9JqSOtmQ-U9MBNnTQDDK_Ma0B_-8yUekDuR2jwC1B_ZWPS-wo8x06Lu2K0VrURCTwZL45gsmY1oOcwh-S7VuXBnQvWSFxo84N9W10Y85KK5y6P7Qxg")'}}></div>
                 <div className="w-14 h-14 bg-gray-50 rounded-xl bg-cover bg-center border border-gray-100" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4exNccLDXReGsMnqB7CTFFfc7SSwWWMB0znxn1TZMW9QPddo2dm1ooqVr14khpVqqrHcs5_YLQp-znnaDA_5KICi2XB6wvMh9s45MbhHNf9sZSRNqxX3osSLdXMitok5giEgO_2oaqZCgduM36QMdEt2KRyFZkUFYjsHsbtXTS3Ek-HjJX8eeKz1DyGucZJ_-4WaP0tdEld37cZzAr2JQlr9ecB8_o5drEwKwjbYtqkDZnmOB5YAMXGpEXpZW7YemyyaoNOzgo6k")'}}></div>
                 <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed border-gray-200 text-gray-400">
                    <span className="text-xs font-bold">+1</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Event 2 */}
        <div className="flex gap-4 relative z-0">
           <div className="flex flex-col items-center pt-1 w-14 shrink-0">
              <span className="text-sm font-bold text-text-main bg-background-light z-10 py-1">19:00</span>
           </div>
           <div className="flex-1 bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-indigo-400/30 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-3">
                 <div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                        <h3 className="font-bold text-text-main text-lg">Dinner Date</h3>
                    </div>
                    <p className="text-xs text-text-subtle pl-4">Chic & Elegant • 19:00 - 22:00</p>
                 </div>
                 <button className="text-gray-300 group-hover:text-indigo-400 transition-colors">
                    <span className="material-symbols-outlined text-xl">edit</span>
                 </button>
              </div>
              <div className="w-full h-40 bg-gray-100 rounded-xl bg-cover bg-center border border-gray-100 relative overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPI5bJ47tztxDUT0jan0r0KVHSES7i4cqcdQjx7zMPjy47vlAlSQKBcHjcVt403t2sNpPFEYrEBuLQ_kz89GFZRIAg4gScMaSk6FO7dnHB1E2R1uduaK-LS3DWkY5PPy3drlNfG8xsLQvw9YG9M5UAb8u1wthXDVlqk3lvqfV6QkmTAhpIJmZUlUlQ36WnOwQT1B3GLCrEIGS5zUBpj-jepvUu_KsAaENt2VJ-1R1g8zY2DiNP0ooKJnJ9CGg3DhL9dPzKz5yZRsg")'}}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-3">
                    <span className="text-white text-xs font-bold bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">Full Outfit</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Empty Slot */}
        <div className="flex gap-4 relative z-0 opacity-60">
           <div className="flex flex-col items-center pt-1 w-14 shrink-0">
              <span className="text-sm font-bold text-text-subtle bg-background-light z-10 py-1">21:00</span>
           </div>
           <div className="flex-1 h-16 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-text-subtle text-sm">
              Free Slot
           </div>
        </div>

      </div>

      <button className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-white rounded-full shadow-[0_4px_20px_rgba(230,178,76,0.4)] flex items-center justify-center hover:scale-105 transition-transform active:scale-95">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  )
}
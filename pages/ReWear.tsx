import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ReWear: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light pb-24 font-display">
      <div className="p-4 flex items-center justify-between sticky top-0 bg-background-light z-10">
         <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-text-main">arrow_back_ios_new</span></button>
         <h1 className="font-bold text-lg text-text-main">Re-Wear Recommendations</h1>
         <div className="w-6"></div>
      </div>

      <h2 className="text-2xl font-bold px-4 mb-4 text-text-main">Give these another chance</h2>
      
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar">
         {[
           { name: 'Blue Denim Jacket', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7h27l1eas9Qw2CQB25XHBP4q6i-FlbE-p8_SUUUumnwVszkVtqDLck1-7HeUZE2XwwjbMkoKmz-kEjDHMexd3Pa2swiVobyb4ckEWcI5c-KNrRYJ1J9WpDhqv8_V_hwHRIhlIfm2vrYVETFJmAV10f0tdwjM_qyirvtNZssj-0sPL6xQTfzMUqNRTbIZIRLlazqB6pIVJpp3JGIuCyg8yQcSRS_bOwh83QuM_5Ih9k46ipnR1lfs2v17k4tRry6kzrV0KFxUiXg4' },
           { name: 'Floral Maxi Skirt', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNn89bQ9jDkazhU5o-UmyW7tfTuMEcItb0l-apb9dU6_81EHz8mkl1-PxbRVbWzNI59TPh9mLoK73vGVQMOO-shtQYT_2egobtLUC3NQUklER3EPi4oysZYlH7b1ud1PdfXeJJ9sq_p4CPWrsVtpAK892occ5u9Vd-TipcEBopclHFsJ8qIMWnMrPjpxj2jpGoq0TOklB31dzn2y0WhqEXrG66AkZw1zQ1gLJ_PgByF7gww4giWT7gjb-qpBH1_AQK3mKzpvicLZc' },
           { name: 'Linen Trousers', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwAam_t4vyD9dXgvk8HT1_lEpsY3D5Gloy1IlFdgDTKrY-HkOKRM8KL8gBTmd8feN-WPLIJuXMQ5x4Ibcym7Wh-vdDBptoCWTjpEVgw8jX-tv-kk3iHy9z_8BZ5Vld4DaJuzkYWBrm7d8elImddu_5gqnU30nDV9mjPixQZqC6IH3muMCwXu5HbvK3tLxtTasRFdtHl_8LiC2NFflgCF3X9XncAZaqkDRUQfW8Itg5kH-xoym71TAes2x4sLRdzQ5LDfnyGOqN8oo' }
         ].map((item) => (
            <div key={item.name} className="min-w-[150px] flex flex-col gap-2">
               <div className="rounded-xl bg-cover bg-center aspect-[3/4]" style={{ backgroundImage: `url(${item.img})`}}></div>
               <p className="font-medium text-text-main text-sm">{item.name}</p>
            </div>
         ))}
      </div>

      <h3 className="text-lg font-bold px-4 mb-4 mt-4 text-text-main">New Ways to Wear Them</h3>
      <div className="px-4 space-y-6">
         {/* Card 1 */}
         <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-64 bg-cover bg-center bg-top" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBESW1731_bsEIPW6HvQXXsNIiSs-ibcVSv8RtAW-SvxEGKilTbocG32QYr69BfWKTFOuZOKlwRyldGPcB5BrmHRnmd6Lj58549hwD92ep4NV66JYqCLgcxhP-5MHDxf3C6YdyPwkgWPJtYI774ew0F2ajLtG8g1IIRvAKO-vLOuhCJFcCmdBmHY4Yd2-OnCz2_DLicJ2EBFzc34MwTio3m7qF5CNcDyHOewbbrMeyaAJPJESz1lCTLTPkRBUXNB_Ee55x4Dp7__HE")' }}></div>
            <div className="p-4">
               <h4 className="font-bold text-lg text-text-main">Weekend Brunch</h4>
               <p className="text-text-subtle text-sm mt-1 mb-4">A stylish, comfortable look perfect for a weekend outing. Features your <span className="font-medium text-text-main">Blue Denim Jacket.</span></p>
               <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white h-12 rounded-xl font-medium">Try This Outfit</button>
                  <button className="flex-1 bg-transparent border-2 border-primary text-primary h-12 rounded-xl font-medium">View Details</button>
               </div>
            </div>
         </div>

         {/* Card 2 */}
         <div className="bg-white rounded-xl shadow-sm overflow-hidden">
             <div className="h-64 bg-cover bg-center bg-top" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAc7mxiB79mPANo7VDeytQJFKb6DN0s7VqOAAvrWDOXdmLl9J4AkSAeiNunrTqOs_JEG8uKy_1G5cMimSBNkd3_1xNYyQMhe-8OEUuZpHm_wihwmvEBuQWrMI2l7HVxg1vhDReKZREfYmABO-LIJxa9KwNK0usAGwPDez_arV1yHDnDfaNJZa32YCw5YpjTkA2qUuWrk3owgPyvPQpveCs70jOl6fNDS_FkdBSktVpdTSrxHq_O0OTm1rIXGPlNQpQgSQRB-_wst18")' }}></div>
             <div className="p-4">
               <h4 className="font-bold text-lg text-text-main">Art Gallery Visit</h4>
               <p className="text-text-subtle text-sm mt-1 mb-4">Chic and comfortable, this look pairs your forgotten <span className="font-medium text-text-main">Linen Trousers</span> with a classic top.</p>
               <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white h-12 rounded-xl font-medium">Try This Outfit</button>
                  <button className="flex-1 bg-transparent border-2 border-primary text-primary h-12 rounded-xl font-medium">View Details</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
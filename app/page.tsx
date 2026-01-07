'use client'; 

import { useState, useEffect } from 'react';
import Head from 'next/head';
import confetti from 'canvas-confetti';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaVoteYea, FaYoutube, FaEdit, FaBullhorn } from 'react-icons/fa'; 
import { Poppins } from 'next/font/google';

// Font Configuration
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700', '800'] 
});

export default function Home() {
  const candidate = {
    name: "Sou. Shivanitai Raunak Chaudhary",
    ward: "Ward No. 31 (D)",
    city: "Nagpur Municipal Corporation",
    party: "Indian National Congress",
    electionTitle: "General Election - 2026",
    sloganMain: "Ekach Dhyas, Ward 31 Cha Vikas!",
    symbolText: "Panja (Hand)",
    electionDateIso: "2026-01-15T07:30:00", 
    votingDateDisplay: "Tuesday, 15 Jan 2026",
    votingTimeDisplay: "7:00 AM to 5:30 PM",
    phone: "9876543210", 
    whatsappMsg: "Hi, I support Shivanitai Chaudhary for Ward 31. Please vote for Panja!"
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Confetti on Load
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    function randomInRange(min, max) { return Math.random() * (max - min) + min; }
    
    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#FF9933', '#FFFFFF', '#138808'] }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#FF9933', '#FFFFFF', '#138808'] }));
    }, 250);

    // Timer Logic
    const targetDate = new Date(candidate.electionDateIso).getTime();
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else clearInterval(timerInterval);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className={`min-h-screen flex justify-center items-center p-4 ${poppins.className}`}
         style={{ background: 'linear-gradient(135deg, #FF9933 0%, #ffffff 50%, #138808 100%)' }}>
      
      <Head>
        <title>{candidate.name}</title>
      </Head>

      {/* GLASS CARD CONTAINER */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-white/60 relative pb-32">
        
        {/* HEADER */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4 text-center rounded-b-[2.5rem] shadow-lg relative z-10">
          <span className="bg-white text-orange-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
            {candidate.party}
          </span>
          <h2 className="text-white text-xs mt-2 font-medium opacity-90 tracking-wide">
            {candidate.city} | {candidate.electionTitle}
          </h2>
        </div>

        {/* HERO SECTION */}
        <div className="relative mt-6 px-4 text-center">
            <div className="w-44 h-44 mx-auto rounded-full p-1 bg-gradient-to-b from-orange-400 to-green-600 shadow-2xl relative">
                <div className="w-full h-full rounded-full border-[4px] border-white overflow-hidden bg-gray-200">
                    <img src="/shivanitai.png" alt="Candidate" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-14 h-14 bg-white rounded-full shadow-lg border-2 border-orange-500 p-2 flex items-center justify-center animate-bounce-slow">
                     <img src="panja.png" alt="Hand" className="w-full h-full object-contain" />
                </div>
            </div>

            <div className="absolute top-0 right-8 w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-300">
                <img src="/raunak.png" alt="Supporter" className="w-full h-full object-cover" />
            </div>

            <div className="mt-4">
                <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">
                    {candidate.name}
                </h1>
                <p className="text-sm text-gray-600 font-medium mt-1">{candidate.ward}</p>
                <div className="mt-2 inline-block bg-blue-50 text-blue-900 px-3 py-1 rounded-lg text-xs font-bold border border-blue-100 shadow-sm">
                   "{candidate.sloganMain}"
                </div>
            </div>
        </div>

        {/* TIMER */}
        <div className="mx-5 mt-5 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-3 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <p className="text-center text-[9px] uppercase font-bold tracking-widest text-blue-200 mb-2">Voting Countdown</p>
            <div className="flex justify-between px-6 relative z-10">
                {['Days', 'Hours', 'Mins', 'Secs'].map((label, i) => {
                    const val = Object.values(timeLeft)[i];
                    return (
                        <div key={label} className="flex flex-col items-center">
                            <span className="text-2xl font-bold">{String(val).padStart(2, '0')}</span>
                            <span className="text-[8px] opacity-70 uppercase">{label}</span>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* --- INFO LINKS --- */}
        <div className="px-5 mt-5 grid grid-cols-2 gap-3">
             <div className="bg-orange-50 p-3 rounded-xl border border-orange-100 flex flex-col items-center text-center">
                 <FaVoteYea className="text-orange-600 mb-1" size={18}/>
                 <span className="text-[10px] text-gray-500 font-bold uppercase">Date</span>
                 <span className="text-xs font-bold text-gray-800">15 Jan 2026</span>
             </div>
             <a href="https://electoralsearch.eci.gov.in/" target="_blank" className="bg-green-50 p-3 rounded-xl border border-green-100 flex flex-col items-center text-center active:scale-95 transition">
                 <FaMapMarkerAlt className="text-green-600 mb-1" size={18}/>
                 <span className="text-[10px] text-gray-500 font-bold uppercase">Booth</span>
                 <span className="text-xs font-bold text-gray-800">Find Location</span>
             </a>
        </div>

        {/* ========================================= */}
        {/* 🎥 NEW FEATURE: VIDEO APPEAL SECTION    */}
        {/* ========================================= */}
        <div className="mx-5 mt-6">
            <h3 className="text-[#000080] font-bold text-sm mb-2 flex items-center">
                <FaYoutube className="text-red-600 mr-2" size={18} />
                Candidate's Appeal
            </h3>
            
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-200 relative group">
                {/* ⚠️ NOTE: Replace 'VIDEO_ID' in URL below with actual YouTube Video ID */}
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&modestbranding=1&rel=0" 
                    title="Candidate Appeal" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                ></iframe>
            </div>
        </div>

        {/* ========================================= */}
        {/* 📝 NEW FEATURE: SUGGESTION BOX          */}
        {/* ========================================= */}
        <div className="mx-5 mt-5 mb-4">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-2xl border border-orange-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10 text-orange-600">
                    <FaBullhorn size={40} />
                </div>
                
                <div className="flex items-start relative z-10">
                    <div className="bg-white p-2 rounded-full text-orange-500 shadow-sm mr-3">
                        <FaEdit size={16} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">Tell Your Problem</h4>
                        <p className="text-[10px] text-gray-600 mt-1 leading-relaxed">
                            Water, Road, or Cleaning issues? Tell Shivanitai directly via WhatsApp.
                        </p>
                        
                        <a 
                            href={`https://wa.me/91${candidate.phone}?text=Namaskar Tai, I want to report an issue in Ward 31: `}
                            className="mt-3 inline-flex items-center bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow hover:bg-orange-700 transition"
                        >
                            <FaWhatsapp className="mr-2" /> Write Message
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* FIXED FOOTER */}
        <div className="fixed bottom-4 left-4 right-4 bg-[#000080] text-white p-2 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex items-center justify-between z-50 pl-6 pr-2 border-t border-blue-400/30 backdrop-blur-sm">
            <span className="text-xs font-bold mr-2 leading-tight">Vote for<br/><span className="text-orange-400 text-sm">Panja ✋</span></span>
            
            <div className="flex gap-2">
                <a href={`tel:+91${candidate.phone}`} className="w-12 h-12 bg-white text-blue-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition active:scale-95">
                    <FaPhoneAlt size={18} />
                </a>
                <a href={`https://wa.me/?text=${encodeURIComponent(candidate.whatsappMsg)}`} className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition active:scale-95">
                    <FaWhatsapp size={22} />
                </a>
            </div>
        </div>

      </div>
    </div>
  );
}
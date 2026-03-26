/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Users, 
  Clock, 
  Calendar, 
  Video, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  MessageCircle, 
  BookOpen, 
  TrendingUp, 
  Heart, 
  ShieldCheck,
  Zap,
  Gift,
  Languages
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

// --- Motion Components ---

const FloatingNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 20 }).map((_, i) => {
        const num = numbers[Math.floor(Math.random() * numbers.length)];
        const size = Math.random() * 40 + 20;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{ 
              opacity: [0, 0.15, 0],
              y: [0, -100, -200],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear"
            }}
            className="absolute font-black text-primary-blue/10 select-none"
            style={{ 
              fontSize: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
            }}
          >
            {num}
          </motion.div>
        );
      })}
    </div>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-primary-gold z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

const AncientWisdomBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.03]">
      {/* Flower of Life Pattern - Large and slow rotating */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] text-primary-blue"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[0.2]">
          <circle cx="50" cy="50" r="10" />
          {[0, 60, 120, 180, 240, 300].map(angle => (
            <circle 
              key={angle}
              cx={50 + 10 * Math.cos(angle * Math.PI / 180)} 
              cy={50 + 10 * Math.sin(angle * Math.PI / 180)} 
              r="10" 
            />
          ))}
          {/* More circles for a fuller pattern */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => (
            <circle 
              key={angle + 360}
              cx={50 + 17.3 * Math.cos(angle * Math.PI / 180)} 
              cy={50 + 17.3 * Math.sin(angle * Math.PI / 180)} 
              r="10" 
            />
          ))}
        </svg>
      </motion.div>

      {/* Another pattern for the bottom left */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] text-primary-gold"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[0.3]">
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
          <rect x="25" y="25" width="50" height="50" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <path d="M50 10 L50 90 M10 50 L90 50 M21.7 21.7 L78.3 78.3 M21.7 78.3 L78.3 21.7" />
        </svg>
      </motion.div>
    </div>
  );
};

// --- Translations ---

const content = {
  en: {
    banner: "Exclusive Bonuses worth ₹10,000!",
    heroTag: "Name Numerology Report",
    headline: "Is your Name blocking your Overnight Success?",
    subHeadline: "Your Name Holds Power—Unlock It for Wealth & Growth!",
    price: "₹696",
    originalPrice: "₹1199",
    offerNote: "Offer is going to end Soon!",
    enrollBtn: "Get Your Report @ ₹696",
    takeawaysTitle: "What’s Inside Your Name Report?",
    bonusTitle: "Exclusive Bonuses worth ₹10,000!",
    bonusSubtitle: "Just For Today",
    trainerTitle: "Meet the Creator of Name Numerology Report",
    trainerSub: "Dr. Ankiit Btra - Numerologist, TEDx Speaker, Life Coach",
    testimonialsTitle: "Here’s What Customers have to say",
    testimonialsSub: "Real results from real people",
    faqTitle: "FAQs",
    finalCTA: "Your Best Self is Waiting for you",
    finalSub: "Simple name changes that bring massive transformations.",
    startJourney: "Get Your Report Now",
    enrollToday: "Get Your Report @ ₹696 Only",
    ctaShort: "GET REPORT",
    calcTitle: "Check name compatibility",
    calcSub: "Enter your details to reveal your hidden vibrations",
    calcName: "Your Full Name",
    calcDob: "Date of Birth",
    calcBtn: "Calculate My Destiny",
    calcAnalyzing: "Analyzing your cosmic vibration...",
    calcResultsTitle: "Your Compatibility Results",
    calcPsychic: "Psychic Number",
    calcDestiny: "Destiny Number",
    calcPower: "Name Power Score",
    calcHook: "Warning: Your name spelling might be clashing with your success vibration. Unlock the full report to fix this immediately!",
    calcUnlock: "Unlock Full 16-Page Report @ ₹696",
    copyright: "© Copyright 2023 - The Batraa Numerology. All Rights Reserved.",
    takeaways: [
      { title: "Name Meaning", desc: "Decode the hidden power and vibration of your name." },
      { title: "Perfect Spelling", desc: "Find the best spelling to attract wealth & success" },
      { title: "Celebrity Secrets", desc: "Learn how stars & leaders tweak their names for success." },
      { title: "Lucky Numbers", desc: "Discover numbers that enhance your fortune & opportunities." },
      { title: "Unlucky Elements", desc: "Identify and fix name-related blocks stopping your growth." },
      { title: "Personalized Remedies", desc: "Unique techniques to enhance your name’s influence." },
      { title: "Lucky Colors & Dates", desc: "Align your lifestyle with prosperity-driven energies." },
      { title: "Implementation Guide", desc: "Step-by-step process to activate your name’s power." }
    ],
    benefits: [
      { title: "Attract Wealth", desc: "Use the right name spelling to bring in more money." },
      { title: "Stronger Relationships", desc: "Improve love, family & social connections." },
      { title: "Boost Confidence", desc: "Feel more powerful & charismatic in every situation." },
      { title: "Remove Obstacles", desc: "Fix hidden name blocks stopping your progress" },
      { title: "Achieve Fame & Recognition", desc: "Enhance your public image & influence." },
      { title: "Find Your Lucky Elements", desc: "Discover lucky numbers, colors, and dates." },
      { title: "Make Better Decisions", desc: "Choose the right partnerships, business names & ventures." },
      { title: "Align with Success Like Celebrities", desc: "Use the same techniques trusted by leaders & stars." },
      { title: "Quick & Easy Tweaks", desc: "Simple name changes that bring massive transformations." }
    ],
    bonuses: [
      "Remedy for Money Miracles",
      "Secret Remedy for Getting More Clients",
      "Attracting Money Like a Magnet Ritual",
      "Switch word to Find New JOB",
      "Remedy for Improving Health & Energy Levels",
      "Special Remedy to Get Your Dream Job",
      "Special Ritual To get rid of Evil Energy",
      "Special Switchword for Building Interest in Studies",
      "Premium remedy for Migraine",
      "Amazing Remedy for Body Weakness",
      "Remedy for Blood Pressure Regulation",
      "Special Remedy to Find New Love",
      "Switchword to Remove Stress & Anxiety",
      "Premium Ritual to Remove Addiction",
      "Secret Ritual to Stop Hairfall",
      "Premium Remedy for Property Selling Issues"
    ]
  },
  hi: {
    banner: "₹10,000 मूल्य के विशेष बोनस मुफ्त!",
    heroTag: "नाम न्यूमरोलॉजी रिपोर्ट",
    headline: "क्या आपका नाम आपकी रातों-रात सफलता को रोक रहा है?",
    subHeadline: "आपके नाम में शक्ति है—धन और विकास के लिए इसे अनलॉक करें!",
    price: "₹696",
    originalPrice: "₹1199",
    offerNote: "ऑफर जल्द ही समाप्त होने वाला है!",
    enrollBtn: "अपनी रिपोर्ट प्राप्त करें @ ₹696",
    takeawaysTitle: "आपकी नाम रिपोर्ट के अंदर क्या है?",
    bonusTitle: "₹10,000 मूल्य के विशेष बोनस!",
    bonusSubtitle: "केवल आज के लिए",
    trainerTitle: "नाम न्यूमरोलॉजी रिपोर्ट के निर्माता से मिलें",
    trainerSub: "डॉ. अंकित बत्रा - न्यूमरोलॉजिस्ट, TEDx स्पीकर, लाइफ कोच",
    testimonialsTitle: "यहाँ ग्राहकों का क्या कहना है",
    testimonialsSub: "वास्तविक लोगों से वास्तविक परिणाम",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    finalCTA: "आपका सर्वश्रेष्ठ स्वरूप आपका इंतजार कर रहा है",
    finalSub: "साधारण नाम परिवर्तन जो बड़े बदलाव लाते हैं।",
    startJourney: "अभी अपनी रिपोर्ट प्राप्त करें",
    enrollToday: "आज ही रिपोर्ट प्राप्त करें @ ₹696 केवल",
    ctaShort: "रिपोर्ट लें",
    calcTitle: "नाम की अनुकूलता की जाँच करें",
    calcSub: "अपने छिपे हुए कंपन को प्रकट करने के लिए अपना विवरण दर्ज करें",
    calcName: "आपका पूरा नाम",
    calcDob: "जन्म तिथि",
    calcBtn: "मेरी किस्मत की गणना करें",
    calcAnalyzing: "आपके ब्रह्मांडीय कंपन का विश्लेषण किया जा रहा है...",
    calcResultsTitle: "आपकी अनुकूलता के परिणाम",
    calcPsychic: "साइकिक नंबर",
    calcDestiny: "डेस्टिनी नंबर",
    calcPower: "नाम शक्ति स्कोर",
    calcHook: "चेतावनी: आपके नाम की वर्तनी आपकी सफलता के कंपन के साथ टकरा सकती है। इसे तुरंत ठीक करने के लिए पूरी रिपोर्ट अनलॉक करें!",
    calcUnlock: "पूरी 16-पेज की रिपोर्ट अनलॉक करें @ ₹696",
    copyright: "© कॉपीराइट 2023 - द बत्रा न्यूमरोलॉजी। सर्वाधिकार सुरक्षित।",
    takeaways: [
      { title: "नाम का अर्थ", desc: "अपने नाम की छिपी शक्ति और कंपन को डिकोड करें।" },
      { title: "सही वर्तनी", desc: "धन और सफलता को आकर्षित करने के लिए सबसे अच्छी वर्तनी खोजें" },
      { title: "सेलिब्रिटी रहस्य", desc: "जानें कि कैसे सितारे और नेता सफलता के लिए अपने नाम बदलते हैं।" },
      { title: "भाग्यशाली अंक", desc: "उन अंकों की खोज करें जो आपके भाग्य और अवसरों को बढ़ाते हैं।" },
      { title: "अशुभ तत्व", desc: "आपके विकास को रोकने वाले नाम-संबंधी बाधाओं को पहचानें और ठीक करें।" },
      { title: "व्यक्तिगत उपाय", desc: "आपके नाम के प्रभाव को बढ़ाने के लिए अनूठी तकनीकें।" },
      { title: "भाग्यशाली रंग और तिथियां", desc: "अपनी जीवनशैली को समृद्धि-संचालित ऊर्जाओं के साथ संरेखित करें।" },
      { title: "कार्यान्वयन गाइड", desc: "अपने नाम की शक्ति को सक्रिय करने के लिए चरण-दर-चरण प्रक्रिया।" }
    ],
    benefits: [
      { title: "धन को आकर्षित करें", desc: "अधिक पैसा लाने के लिए सही नाम वर्तनी का उपयोग करें।" },
      { title: "मजबूत रिश्ते", desc: "प्यार, परिवार और सामाजिक संबंधों में सुधार करें।" },
      { title: "आत्मविश्वास बढ़ाएं", desc: "हर स्थिति में अधिक शक्तिशाली और करिश्माई महसूस करें।" },
      { title: "बाधाओं को दूर करें", desc: "आपकी प्रगति को रोकने वाली छिपी हुई नाम बाधाओं को ठीक करें" },
      { title: "प्रसिद्धि और पहचान प्राप्त करें", desc: "अपनी सार्वजनिक छवि और प्रभाव को बढ़ाएं।" },
      { title: "अपने भाग्यशाली तत्व खोजें", desc: "भाग्यशाली अंक, रंग और तिथियां खोजें।" },
      { title: "बेहतर निर्णय लें", desc: "सही साझेदारी, व्यावसायिक नाम और उद्यम चुनें।" },
      { title: "सेलिब्रिटी की तरह सफलता के साथ संरेखित हों", desc: "नेताओं और सितारों द्वारा भरोसेमंद उन्हीं तकनीकों का उपयोग करें।" },
      { title: "त्वरित और आसान बदलाव", desc: "साधारण नाम परिवर्तन जो बड़े बदलाव लाते हैं।" }
    ],
    bonuses: [
      "मनी मिरेकल्स के लिए उपाय",
      "अधिक ग्राहक प्राप्त करने का गुप्त उपाय",
      "चुंबक की तरह धन को आकर्षित करने का अनुष्ठान",
      "नई नौकरी खोजने के लिए स्विच वर्ड",
      "स्वास्थ्य और ऊर्जा के स्तर में सुधार के लिए उपाय",
      "सपनों की नौकरी पाने के लिए विशेष उपाय",
      "बुरी ऊर्जा से छुटकारा पाने का विशेष अनुष्ठान",
      "पढ़ाई में रुचि पैदा करने के लिए विशेष स्विचवर्ड",
      "माइग्रेन के लिए प्रीमियम उपाय",
      "शरीर की कमजोरी के लिए अद्भुत उपाय",
      "रक्तचाप विनियमन के लिए उपाय",
      "नया प्यार खोजने के लिए विशेष उपाय",
      "तनाव और चिंता दूर करने के लिए स्विचवर्ड",
      "नशा छुड़ाने के लिए प्रीमियम अनुष्ठान",
      "बालों का झड़ना रोकने के लिए गुप्त अनुष्ठान",
      "संपत्ति बेचने के मुद्दों के लिए प्रीमियम उपाय"
    ]
  }
};

// --- Components ---

const CountdownTimer = ({ lang }: { lang: 'en' | 'hi' }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 14, seconds: 41 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center my-6">
      {[
        { val: timeLeft.hours, label: lang === 'en' ? 'Hours' : 'घंटे' },
        { val: timeLeft.minutes, label: lang === 'en' ? 'Minutes' : 'मिनट' },
        { val: timeLeft.seconds, label: lang === 'en' ? 'Seconds' : 'सेकंड' }
      ].map((t, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-primary-blue text-white text-3xl md:text-5xl font-bold p-3 rounded-lg w-16 md:w-24 text-center shadow-lg border-b-4 border-primary-gold">
            {String(t.val).padStart(2, '0')}
          </div>
          <span className="text-xs uppercase mt-2 font-bold text-primary-blue">{t.label}</span>
        </div>
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-bold text-lg hover:text-primary-blue transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-slate-800">{question}</span>
        {isOpen ? <ChevronUp className="text-primary-blue" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-slate-600 leading-relaxed font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StickyCTA = ({ lang }: { lang: 'en' | 'hi' }) => {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t-2 border-primary-gold p-3 z-50 md:hidden flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.15)]"
    >
      <div className="flex flex-col">
        <span className="text-[10px] text-slate-400 line-through font-bold leading-none">₹1199</span>
        <span className="text-lg font-black text-primary-blue leading-none">₹696 <span className="text-[10px] font-bold text-slate-500">ONLY</span></span>
      </div>
      <motion.button 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-primary-blue text-primary-gold px-8 py-3 rounded-full font-black text-sm uppercase tracking-tighter shadow-lg active:scale-95 transition-transform"
      >
        {content[lang].ctaShort}
      </motion.button>
    </motion.div>
  );
};

const NumerologyCalculator = ({ lang }: { lang: 'en' | 'hi' }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMsg, setStatusMsg] = useState('');
  const [results, setResults] = useState({ psychic: 0, destiny: 0, power: 0 });

  const t = content[lang];

  const calculateNumbers = () => {
    if (!name || !dob) return;

    setIsCalculating(true);
    setShowResults(false);
    setProgress(0);

    const msgs = [
      lang === 'en' ? "Scanning Cosmic Vibrations..." : "ब्रह्मांडीय कंपन को स्कैन किया जा रहा है...",
      lang === 'en' ? "Analyzing Name Frequency..." : "नाम की आवृत्ति का विश्लेषण किया जा रहा है...",
      lang === 'en' ? "Checking Wealth Alignment..." : "धन संरेखण की जाँच की जा रही है...",
      lang === 'en' ? "Finalizing Compatibility Snapshot..." : "अनुकूलता स्नैपशॉट को अंतिम रूप दिया जा रहा है..."
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        if (prev % 25 === 0) {
          setStatusMsg(msgs[currentStep]);
          currentStep++;
        }
        return prev + 1;
      });
    }, 30);

    setTimeout(() => {
      const date = new Date(dob);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const sumDigits = (num: number): number => {
        let sum = String(num).split('').reduce((acc, d) => acc + parseInt(d), 0);
        return sum > 9 ? sumDigits(sum) : sum;
      };

      const psychic = sumDigits(day);
      const destiny = sumDigits(day + month + year);
      
      // Pseudo-random power score based on name
      const nameScore = (name.length * 7 + name.charCodeAt(0)) % 30 + 70;

      setResults({ psychic, destiny, power: nameScore });
      setIsCalculating(false);
      setShowResults(true);
    }, 3500);
  };

  return (
    <section id="calculator" className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-[40px] p-8 md:p-12 border-4 border-primary-blue shadow-2xl relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-gold text-primary-blue px-8 py-2 rounded-full font-black uppercase tracking-widest shadow-lg border-2 border-primary-blue">
            {t.calcTitle}
          </div>

          {!showResults && !isCalculating && (
            <div className="space-y-8 mt-4">
              <div className="text-center">
                <p className="text-slate-500 font-bold">{t.calcSub}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary-blue ml-2">{t.calcName}</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border-2 border-slate-200 rounded-2xl px-6 py-4 font-bold focus:border-primary-blue focus:outline-none transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary-blue ml-2">{t.calcDob}</label>
                  <input 
                    type="date" 
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full bg-white border-2 border-slate-200 rounded-2xl px-6 py-4 font-bold focus:border-primary-blue focus:outline-none transition-all shadow-inner"
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculateNumbers}
                disabled={!name || !dob}
                className="w-full bg-primary-blue text-primary-gold py-5 rounded-2xl font-black text-lg md:text-xl uppercase tracking-tighter shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <span className="relative z-10">{t.calcBtn}</span>
                <motion.div 
                  className="absolute inset-0 bg-primary-gold/10"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>
            </div>
          )}

          {isCalculating && (
            <div className="py-12 text-center space-y-8">
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" stroke="#e2e8f0" strokeWidth="8" 
                  />
                  <motion.circle 
                    cx="50" cy="50" r="45" 
                    fill="none" stroke="#0000CC" strokeWidth="8" 
                    strokeLinecap="round"
                    strokeDasharray="283"
                    animate={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-black text-primary-blue">{progress}%</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-black text-primary-blue animate-pulse">{statusMsg}</p>
                <div className="flex justify-center gap-1">
                  {[0, 1, 2].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-2 h-2 bg-primary-gold rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {showResults && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8 py-4"
            >
              <div className="text-center">
                <h3 className="text-3xl font-black text-slate-900 mb-2">{t.calcResultsTitle}</h3>
                <p className="text-primary-blue font-bold">Hello, {name}!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border-2 border-primary-blue/10 text-center shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{t.calcPsychic}</p>
                  <p className="text-5xl font-black text-primary-blue">{results.psychic}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border-2 border-primary-blue/10 text-center shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{t.calcDestiny}</p>
                  <p className="text-5xl font-black text-primary-blue">{results.destiny}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border-2 border-primary-gold/30 text-center shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary-gold text-[10px] font-black px-2 py-1 rounded-bl-lg uppercase">Live Score</div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{t.calcPower}</p>
                  <p className="text-5xl font-black text-primary-gold">{results.power}%</p>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-100 p-6 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <div className="flex gap-4 items-start">
                  <Zap className="text-red-500 shrink-0" size={24} />
                  <p className="text-red-900 font-bold leading-relaxed">
                    {t.calcHook}
                  </p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,193,7,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary-gold text-primary-blue py-6 rounded-2xl font-black text-lg md:text-2xl uppercase tracking-tighter shadow-2xl flex items-center justify-center gap-3"
              >
                <Award size={28} />
                {t.calcUnlock}
              </motion.button>
              
              <button 
                onClick={() => setShowResults(false)}
                className="w-full text-slate-400 font-bold text-sm hover:text-primary-blue transition-colors"
              >
                {lang === 'en' ? "← Back to Calculator" : "← कैलकुलेटर पर वापस जाएं"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary-gold selection:text-primary-blue relative overflow-x-hidden no-scrollbar">
      <ScrollProgress />
      
      {/* Top Banner */}
      <div className="bg-primary-blue text-white py-2 px-4 text-center text-sm font-bold uppercase tracking-widest border-b-2 border-primary-gold">
        {t.banner}
      </div>

      {/* Navigation / Language Switcher */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-primary-gold font-black text-xl shadow-lg">BN</div>
            <span className="font-black text-xl tracking-tighter text-primary-blue hidden sm:inline">Batraa Numerology</span>
          </div>
          <button 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-2 bg-slate-100 hover:bg-primary-gold hover:text-primary-blue transition-all px-4 py-2 rounded-full text-sm font-bold text-slate-700 shadow-sm"
          >
            <Languages size={18} />
            {lang === 'en' ? 'हिंदी में' : 'In English'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-white pt-20 md:pt-24 pb-20 px-4 overflow-hidden">
        <AncientWisdomBackground />
        <FloatingNumbers />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block bg-primary-gold/20 text-primary-blue px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-12 border border-primary-gold/30">
              {t.heroTag}
            </span>
            <h1 className="text-4xl md:text-7xl font-black leading-tight md:leading-[1.1] mb-8 text-slate-900 tracking-tight">
              {lang === 'en' ? (
                <>Is your Name blocking your <span className="text-primary-blue underline decoration-primary-gold decoration-8 underline-offset-4">Overnight Success?</span></>
              ) : (
                <>{t.headline}</>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-semibold mb-12 max-w-3xl mx-auto">
              {t.subHeadline}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white border-4 border-primary-blue rounded-[40px] p-8 md:p-16 shadow-[20px_20px_0px_0px_rgba(0,0,204,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold rounded-bl-full opacity-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center justify-center bg-slate-50 p-6 rounded-3xl border-2 border-dashed border-primary-gold/30">
                <Star className="text-primary-gold mb-2" size={40} fill="currentColor" />
                <span className="text-4xl font-black text-slate-900">4.9/5</span>
                <span className="text-xs text-slate-400 uppercase font-black tracking-widest mt-1">Customer Rating</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-slate-50 p-6 rounded-3xl border-2 border-dashed border-primary-gold/30">
                <Users className="text-primary-blue mb-2" size={40} />
                <span className="text-4xl font-black text-slate-900">23,000+</span>
                <span className="text-xs text-slate-400 uppercase font-black tracking-widest mt-1">Reports Generated</span>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-primary-blue font-black text-xl md:text-3xl px-2">{t.enrollBtn}</h3>
              <p className="text-slate-400 text-lg font-bold">{t.originalPrice} <span className="line-through text-slate-300">₹1199</span></p>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,193,7,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-primary-gold hover:bg-primary-gold-dark text-primary-blue text-base md:text-2xl font-black py-4 md:py-6 px-8 md:px-16 rounded-full shadow-xl transition-all uppercase tracking-tighter"
              >
                {t.startJourney}
              </motion.button>
              <p className="text-sm text-primary-blue font-bold mt-4">
                {t.offerNote}
              </p>
            </div>
          </motion.div>

          <div className="mt-16">
            <CountdownTimer lang={lang} />
          </div>
        </div>
      </header>

      {/* Numerology Calculator */}
      <NumerologyCalculator lang={lang} />

      {/* Takeaways Section (What's Inside) */}
      <section className="py-24 bg-slate-50 px-4 relative overflow-hidden">
        <AncientWisdomBackground />
        <FloatingNumbers />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">
              {t.takeawaysTitle}
            </h2>
            <div className="h-2 w-32 bg-primary-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.takeaways.map((item: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="bg-white p-6 rounded-3xl border border-slate-200 flex items-start gap-5 transition-all"
              >
                <div className="bg-primary-blue text-primary-gold p-2 rounded-xl shrink-0 shadow-md">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xl mb-1">{item.title}</h4>
                  <p className="font-bold text-slate-500 text-sm leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section (Your Best Self) */}
      <section className="py-24 bg-white px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">
              {t.finalCTA}
            </h2>
            <div className="h-2 w-32 bg-primary-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.benefits.map((item: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col items-center text-center"
              >
                <div className="bg-primary-blue/10 text-primary-blue p-4 rounded-2xl mb-6">
                  <Zap size={32} />
                </div>
                <h4 className="text-xl font-black mb-3 text-slate-900">{item.title}</h4>
                <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-24 bg-primary-blue text-white px-4 relative overflow-hidden">
        <AncientWisdomBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">{t.bonusTitle}</h2>
            <p className="text-primary-blue font-black text-2xl uppercase tracking-widest bg-primary-gold inline-block px-6 py-2 rounded-lg">{t.bonusSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.bonuses.map((bonus: string, idx: number) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl flex items-center gap-4"
              >
                <Gift className="text-primary-gold shrink-0" size={24} />
                <span className="font-bold text-sm">{bonus}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-gold text-primary-blue px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-xl shadow-lg uppercase tracking-tighter"
            >
              {t.enrollBtn}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-24 bg-white px-4 overflow-hidden relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-gold rounded-full opacity-20 blur-3xl"></div>
              <div className="relative z-10 border-8 border-slate-50 rounded-[40px] shadow-2xl overflow-hidden">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLxdFK7OBwVVPP8cJCIiSftA-8y_loZodAA&s" 
                  alt="Dr. Ankiit Btra" 
                  className="w-full object-cover aspect-[3/4]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-blue text-primary-gold p-6 rounded-3xl shadow-2xl z-20">
                <p className="font-black text-2xl">Dr. Ankiit Btra</p>
                <p className="text-white text-sm font-black uppercase tracking-widest">TEDx Speaker</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">{t.trainerTitle}</h2>
              <h3 className="text-2xl font-black text-primary-blue mb-8 leading-tight">{t.trainerSub}</h3>
              
              {/* Featured In Section */}
              <div className="mb-10">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Featured In</p>
                <div className="flex flex-wrap gap-8 opacity-40 grayscale">
                  {/* Placeholder for logos */}
                  <div className="font-black text-xl italic">TEDx</div>
                  <div className="font-black text-xl">NEWS18</div>
                  <div className="font-black text-xl">ZEE NEWS</div>
                  <div className="font-black text-xl">DAINIK BHASKAR</div>
                </div>
              </div>

              <div className="space-y-6 text-slate-500 font-bold leading-relaxed text-lg">
                <p>Ankiit Btra is a Numerologist, Motivational Speaker, and Life Coach with over 10 years of experience in Information Technology (IT) as a Business Analyst for MNCs. Having spent 3 years in Singapore, he brings a practical and rational approach to his work.</p>
                <p>His passion for spiritualism led him to the occult sciences, where his unique, holistic perspective sets him apart. Ankit is known as a trusted friend, philosopher, and guide.</p>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 px-4 py-5 rounded-[24px] border border-slate-100 text-center">
                  <p className="text-2xl font-black text-primary-blue">23k+</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Trained</p>
                </div>
                <div className="bg-slate-50 px-4 py-5 rounded-[24px] border border-slate-100 text-center">
                  <p className="text-2xl font-black text-primary-blue">6+</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Years Exp.</p>
                </div>
                <div className="bg-slate-50 px-4 py-5 rounded-[24px] border border-slate-100 text-center">
                  <p className="text-2xl font-black text-primary-blue">40k+</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">YouTube</p>
                </div>
                <div className="bg-slate-50 px-4 py-5 rounded-[24px] border border-slate-100 text-center">
                  <p className="text-2xl font-black text-primary-blue">104k+</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
            {t.testimonialsTitle}
          </h2>
          <p className="text-2xl text-slate-400 font-bold mb-20">{t.testimonialsSub}</p>

          {/* Video Testimonials Grid */}
          <div className="mb-24">
            <h3 className="text-2xl md:text-3xl font-black mb-12 text-primary-blue uppercase tracking-tight">
              {lang === 'en' ? "Watch Success Stories" : "सफलता की कहानियाँ देखें"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "nXEB1tmi_P0",
                "FQ8iijxnkEI",
                "1TsLqTTrzYg",
                "5qynKW_4jC8",
                "5X4WGkIQ03Q"
              ].map((id, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="aspect-video rounded-[32px] overflow-hidden shadow-xl border-4 border-slate-50"
                >
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${id}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 text-left relative">
                <div className="absolute -top-5 left-10 bg-primary-gold text-primary-blue p-3 rounded-2xl shadow-lg">
                  <Star size={24} fill="currentColor" />
                </div>
                <div className="flex text-primary-gold mb-6 mt-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 font-bold italic mb-8 text-lg leading-relaxed">
                  {lang === 'en' 
                    ? `"The insights I got from Ankiit Btra's workshop were life-changing. I changed my mobile number as suggested and saw a significant improvement in my business leads within a month!"`
                    : `"अंकित बत्रा की वर्कशॉप से मुझे जो जानकारी मिली वह जीवन बदल देने वाली थी। मैंने सुझाव के अनुसार अपना मोबाइल नंबर बदल दिया और एक महीने के भीतर अपने बिजनेस लीड्स में महत्वपूर्ण सुधार देखा!"`
                  }
                </p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                  <div className="w-14 h-14 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-primary-blue font-black text-xl">S</div>
                  <div>
                    <p className="font-black text-slate-900 text-lg">Happy Student {i}</p>
                    <p className="text-xs text-slate-400 uppercase font-black tracking-widest">Verified Learner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20 text-slate-900">
            {t.faqTitle}
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-200">
            <FAQItem 
              question={lang === 'en' ? "What if I don’t see immediate changes?" : "क्या होगा यदि मुझे तत्काल परिवर्तन नहीं दिखाई देते हैं?"} 
              answer={lang === 'en' ? "Numerology works on vibrations. While some see changes quickly, for others it may take a few weeks as the new energy aligns with your life." : "न्यूमरोलॉजी कंपन पर काम करती है। जबकि कुछ लोग जल्दी बदलाव देखते हैं, दूसरों के लिए इसमें कुछ हफ्ते लग सकते हैं क्योंकि नई ऊर्जा आपके जीवन के साथ संरेखित होती है।"} 
            />
            <FAQItem 
              question={lang === 'en' ? "Is name numerology scientifically backed?" : "क्या नाम न्यूमरोलॉजी वैज्ञानिक रूप से समर्थित है?"} 
              answer={lang === 'en' ? "It is an ancient occult science based on mathematical vibrations. Thousands of successful people, including celebrities, use it to align their energy for success." : "यह गणितीय कंपन पर आधारित एक प्राचीन गुप्त विज्ञान है। मशहूर हस्तियों सहित हजारों सफल लोग सफलता के लिए अपनी ऊर्जा को संरेखित करने के लिए इसका उपयोग करते हैं।"} 
            />
            <FAQItem 
              question={lang === 'en' ? "From where can I get my report?" : "मुझे अपनी रिपोर्ट कहाँ से मिल सकती है?"} 
              answer={lang === 'en' ? "Once you complete the payment, your personalized report will be sent to your registered email address within 24-48 hours." : "भुगतान पूरा करने के बाद, आपकी व्यक्तिगत रिपोर्ट 24-48 घंटों के भीतर आपके पंजीकृत ईमेल पते पर भेज दी जाएगी।"} 
            />
            <FAQItem 
              question={lang === 'en' ? "Whom can I reach in case I don't receive the report?" : "यदि मुझे रिपोर्ट प्राप्त नहीं होती है तो मैं किससे संपर्क कर सकता हूँ?"} 
              answer={lang === 'en' ? "You can reach out to our support team at Thebatraanumerolgy@gmail.com or via the WhatsApp support number provided in your confirmation." : "आप हमारी सहायता टीम से Thebatraanumerolgy@gmail.com पर या आपके पुष्टिकरण में दिए गए व्हाट्सएप सपोर्ट नंबर के माध्यम से संपर्क कर सकते हैं।"} 
            />
            <FAQItem 
              question={lang === 'en' ? "How Is the Report Prepared?" : "रिपोर्ट कैसे तैयार की जाती है?"} 
              answer={lang === 'en' ? "The report is manually prepared by Dr. Ankiit Btra and his team of expert numerologists based on your unique birth details and current name." : "रिपोर्ट डॉ. अंकित बत्रा और उनकी विशेषज्ञ न्यूमरोलॉजिस्ट की टीम द्वारा आपके अद्वितीय जन्म विवरण और वर्तमान नाम के आधार पर मैन्युअल रूप से तैयार की जाती है।"} 
            />
            <FAQItem 
              question={lang === 'en' ? "What information do I need to provide to generate this report?" : "इस रिपोर्ट को तैयार करने के लिए मुझे क्या जानकारी देनी होगी?"} 
              answer={lang === 'en' ? "You will need to provide your full current name, date of birth, and the name you use most frequently in your professional life." : "आपको अपना पूरा वर्तमान नाम, जन्म तिथि और वह नाम देना होगा जिसे आप अपने पेशेवर जीवन में सबसे अधिक बार उपयोग करते हैं।"} 
            />
            <FAQItem 
              question={lang === 'en' ? "Would it be possible to request a report for someone else?" : "क्या किसी और के लिए रिपोर्ट का अनुरोध करना संभव होगा?"} 
              answer={lang === 'en' ? "Yes, you can order a report for your family members, friends, or business partners by providing their accurate details." : "हाँ, आप अपने परिवार के सदस्यों, दोस्तों या व्यावसायिक भागीदारों के लिए उनके सटीक विवरण प्रदान करके रिपोर्ट मंगवा सकते हैं।"} 
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-blue text-white px-4 text-center relative overflow-hidden">
        <AncientWisdomBackground />
        <FloatingNumbers />
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary-gold)_0%,_transparent_70%)] opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-10 leading-tight"
          >
            {t.finalCTA}
          </motion.h2>
          <p className="text-2xl mb-16 font-bold text-primary-gold">{t.finalSub}</p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(255,193,7,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-gold text-primary-blue text-lg md:text-3xl font-black py-6 md:py-8 px-10 md:px-20 rounded-full shadow-[0_0_50px_rgba(255,193,7,0.3)] transition-all uppercase tracking-tighter"
          >
            {t.startJourney}
          </motion.button>
          <p className="mt-10 text-lg font-black uppercase tracking-widest text-slate-300">{t.enrollToday}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-400 py-20 px-4 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-primary-gold font-black text-xl">BN</div>
                <span className="font-black text-2xl tracking-tighter text-primary-blue">Batraa Numerology</span>
              </div>
              <p className="text-slate-500 font-bold leading-relaxed max-w-md">
                Helping people unlock the hidden power of their names for wealth, growth, and success. Led by Dr. Ankiit Btra.
              </p>
            </div>
            <div className="text-sm font-bold space-y-4">
              <p className="text-slate-900">Email: Thebatraanumerolgy@gmail.com</p>
              <p className="text-slate-900">GSTIN: 07BHJPR0222E1ZO</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
                {["Privacy Policy", "About Us", "TnC", "Refund & Cancellation", "Disclaimer"].map((link, i) => (
                  <a key={i} href="#" className="text-slate-400 hover:text-primary-blue transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-10 text-xs font-bold leading-relaxed text-slate-300">
            <p className="mb-6">
              The Batraa Numerology is not a part of Facebook.com or Facebook Inc or Google.com or Google Inc. Additionally, The Batraa Numerology is not endorsed by Facebook.com or Facebook Inc or Google.com or Google Inc.
            </p>
            <p className="text-slate-400">{t.copyright}</p>
          </div>
        </div>
      </footer>

      <StickyCTA lang={lang} />
    </div>
  );
}

import { useState, useMemo, useEffect, useDeferredValue, memo } from 'react';
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  AlertCircle, 
  MessageSquare, 
  Gavel, 
  ChevronRight, 
  Share2, 
  X,
  ArrowUpDown,
  Filter,
  Info,
  Calendar,
  Wallet,
  LayoutGrid,
  Layers,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_MPS, STATES, PARTIES, DATA_TIMESTAMP } from './data';
import { MPData } from './types';

// --- Helpers ---
const calculateGrade = (mp: MPData): string => {
  let score = 0;
  score += mp.attendance * 0.3;
  score += Math.min(mp.questions / 4, 30);
  score += Math.min(mp.debates / 1.25, 40);
  score -= mp.criminalCases * 10;

  if (score >= 80) return 'A';
  if (score >= 65) return 'B';
  if (score >= 50) return 'C';
  if (score >= 35) return 'D';
  return 'F';
};

const getGradeColor = (grade: string) => {
  switch (grade) {
    case 'A': return 'stamp-green';
    case 'B': return 'stamp-green';
    case 'C': return 'stamp-amber';
    case 'D': return 'stamp-amber';
    case 'F': return 'stamp-red';
    default: return 'stamp-red';
  }
};

const getPerformanceSummary = (mp: MPData, grade: string) => {
  const attendancePhrase = mp.attendance > 85 ? "exemplary attendance" : mp.attendance < 50 ? "chronic absenteeism" : "consistent presence";
  const participationPhrase = mp.questions > 100 ? "aggressive inquisitor" : mp.questions < 20 ? "largely silent observer" : "active participant";
  const criminalPhrase = mp.criminalCases > 0 ? `notably flagged with ${mp.criminalCases} declared criminal cases` : "a clean legal record";
  
  return `Agent ${mp.name} of ${mp.constituency} (${mp.party}) maintains ${attendancePhrase} in the Lok Sabha. Their record as an ${participationPhrase} is underscored by ${mp.questions} questions raised. From a security standpoint, the individual presents ${criminalPhrase}. This is their term #${mp.term} in Parliament. Overall assessment: Grade ${grade}.`;
};

// --- Components ---

const RubberStamp = ({ grade }: { grade: string }) => (
  <div className={`stamp ${getGradeColor(grade)}`}>
    Grade {grade}
  </div>
);

const MPCard = memo(({ mp, onClick, index, toggleComparison, comparisonList }: { 
  mp: MPData, 
  onClick: () => void, 
  index: number,
  toggleComparison: (mp: MPData) => void,
  comparisonList: MPData[]
}) => {
  const grade = calculateGrade(mp);
  const isShame = mp.attendance < 60 || mp.criminalCases > 5;

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (i % 12) * 0.08,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index}
      viewport={{ once: true, margin: "100px" }}
      className={`dossier-card cursor-pointer group ${isShame ? 'shame-pulse border-red-900/50' : ''} border-gray-900 hover:border-gray-700`}
      id={`mp-card-${mp.id}`}
    >
      <div 
        className="p-8"
        onClick={onClick}
      >
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex justify-between items-start">
            <span className="mono-label text-primary-red mb-1 block">Reg ID: {mp.id}</span>
            <RubberStamp grade={grade} />
          </div>
          <h3 className="text-3xl text-white leading-tight font-display font-black group-hover:text-primary-red transition-colors decoration-primary-red/10 group-hover:decoration-primary-red/40 underline underline-offset-8 decoration-1 mb-2 truncate">
            {mp.name}
          </h3>
          <p className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">{mp.constituency} • {mp.party}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-gray-900 pt-8">
          <div className="space-y-2">
            <p className="mono-label text-gray-700">Participation</p>
            <div className="flex items-baseline gap-1">
              <p className={`text-3xl font-mono font-black tracking-tighter ${mp.attendance > 80 ? 'text-green-500' : mp.attendance < 60 ? 'text-red-500' : 'text-yellow-500'}`}>
                {mp.attendance}%
              </p>
              <span className="text-[10px] font-mono text-gray-700 uppercase font-bold">Attn</span>
            </div>
            <div className="h-0.5 w-full bg-gray-950 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${mp.attendance}%` }}
                transition={{ duration: 1, ease: "circOut" }}
                className={`h-full ${mp.attendance > 80 ? 'bg-green-500' : mp.attendance < 60 ? 'bg-red-500' : 'bg-yellow-500'}`}
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="mono-label text-gray-700">Questions</p>
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-mono font-black tracking-tighter text-white">{mp.questions}</p>
              <span className="text-[10px] font-mono text-gray-700 uppercase font-bold">Inq</span>
            </div>
          </div>
          <div className="space-y-1 border-t border-gray-900 pt-6">
            <p className="mono-label text-gray-700">Assets Disclosed</p>
            <p className="text-lg font-mono font-black text-white tracking-widest uppercase">₹{mp.assets} Cr</p>
          </div>
          <div className="space-y-1 border-t border-gray-900 pt-6">
            <p className="mono-label text-gray-700">Legal Status</p>
            <p className={`text-[10px] font-mono font-black tracking-widest uppercase ${mp.criminalCases > 0 ? 'text-primary-red' : 'text-gray-700'}`}>
              {mp.criminalCases === 0 ? 'Verified Clean' : `${mp.criminalCases} Declarations`}
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800/50 p-2 flex gap-2">
        <button 
          onClick={(e) => { e.stopPropagation(); toggleComparison(mp); }}
          className={`flex-1 font-mono text-[9px] py-1.5 border transition-all uppercase tracking-widest ${comparisonList.find(m => m.id === mp.id) ? 'bg-primary-red border-primary-red text-white' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
        >
          {comparisonList.find(m => m.id === mp.id) ? 'IN COMPARISON' : '+ COMPARE'}
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          className="px-3 border border-gray-800 text-gray-500 hover:border-gray-600 hover:text-white transition-all"
        >
          <Info size={12} />
        </button>
      </div>

      {mp.uncertain && (
        <div className="absolute top-2 left-2 text-yellow-500/50 group-hover:text-yellow-500 transition-colors" title="Data potentially incomplete. Verify at prsindia.org">
          <AlertCircle size={10} />
        </div>
      )}
    </motion.div>
  );
});

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedMP, setSelectedMP] = useState<MPData | null>(null);
  const [sortBy, setSortBy] = useState<'attendance' | 'questions' | 'criminalCases' | 'constituency'>('attendance');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [stateFilter, setStateFilter] = useState('All States');
  const [partyFilter, setPartyFilter] = useState('All Parties');
  const [aStarOnly, setAStarOnly] = useState(false);
  const [alertsOnly, setAlertsOnly] = useState(false);

  // Stats
  const stats = useMemo(() => {
    const total = ALL_MPS.length;
    const avgAttendance = ALL_MPS.reduce((acc, mp) => acc + mp.attendance, 0) / (total || 1);
    const totalQuestions = ALL_MPS.reduce((acc, mp) => acc + mp.questions, 0);
    const criminalPercentage = (ALL_MPS.filter(mp => mp.criminalCases > 0).length / (total || 1)) * 100;
    return { 
      total, 
      avgAttendance, 
      totalQuestions, 
      avgQuestions: totalQuestions / (total || 1),
      avgAssets: ALL_MPS.reduce((acc, mp) => acc + mp.assets, 0) / (total || 1),
      criminalPercentage 
    };
  }, []);

  // Pre-compute searchable content for performance
  const searchableMPs = useMemo(() => {
    return ALL_MPS.map(mp => ({
      ...mp,
      searchString: `${mp.name} ${mp.constituency} ${mp.party} ${mp.state}`.toLowerCase()
    }));
  }, []);

  const deferredSearch = useDeferredValue(search);

  const filteredAndSortedMPs = useMemo(() => {
    const searchLower = deferredSearch.toLowerCase().trim();
    
    return searchableMPs
      .filter(mp => {
        const matchesSearch = searchLower === '' || mp.searchString.includes(searchLower);
        const matchesState = stateFilter === 'All States' || mp.state === stateFilter;
        const matchesParty = partyFilter === 'All Parties' || mp.party === partyFilter;
        const matchesAStar = !aStarOnly || calculateGrade(mp) === 'A';
        const matchesAlerts = !alertsOnly || (mp.criminalCases > 0 || mp.attendance < 60);
        return matchesSearch && matchesState && matchesParty && matchesAStar && matchesAlerts;
      })
      .sort((a, b) => {
        if (sortBy === 'constituency') {
          return sortOrder === 'desc' 
            ? b.constituency.localeCompare(a.constituency) 
            : a.constituency.localeCompare(b.constituency);
        }
        const valA = a[sortBy] as number;
        const valB = b[sortBy] as number;
        return sortOrder === 'desc' ? valB - valA : valA - valB;
      });
  }, [searchableMPs, deferredSearch, sortBy, sortOrder, stateFilter, partyFilter, aStarOnly, alertsOnly]);

  const hallOfFame = useMemo(() => [...ALL_MPS].sort((a, b) => b.attendance - a.attendance)[0], []);
  const hallOfShame = useMemo(() => [...ALL_MPS].sort((a, b) => b.criminalCases - a.criminalCases)[0], []);

  // Performance by State Analytics
  const stateStats = useMemo(() => {
    const map: Record<string, { total: number, attendance: number, questions: number }> = {};
    ALL_MPS.forEach(mp => {
      if (!map[mp.state]) map[mp.state] = { total: 0, attendance: 0, questions: 0 };
      map[mp.state].total++;
      map[mp.state].attendance += mp.attendance;
      map[mp.state].questions += mp.questions;
    });
    return Object.entries(map).map(([state, s]) => ({
      state,
      avgAttendance: s.attendance / s.total,
      avgQuestions: s.questions / s.total,
      count: s.total
    })).sort((a, b) => b.avgAttendance - a.avgAttendance);
  }, []);

  const [showInsights, setShowInsights] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [comparisonList, setComparisonList] = useState<MPData[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleComparison = (mp: MPData) => {
    setComparisonList(prev => {
      if (prev.find(m => m.id === mp.id)) {
        return prev.filter(m => m.id !== mp.id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, mp];
    });
  };

  const handleShare = (mp: MPData) => {
    const grade = calculateGrade(mp);
    const text = `MP REPORT CARD: ${mp.name} (${mp.constituency})
Grade: ${grade}
Attendance: ${mp.attendance}%
Questions: ${mp.questions}
Cases: ${mp.criminalCases}
Track your MP at: ${window.location.href}`;
    navigator.clipboard.writeText(text);
    alert('Dossier summary copied to clipboard.');
  };

  return (
    <div className="min-h-screen pb-20 relative">
      {/* --- DISCLAIMER BANNER --- */}
      <div className="bg-amber-500 text-black py-2 px-4 text-center font-mono text-[10px] uppercase font-bold tracking-wider relative z-[60]">
        This tool uses data from PRS Legislative Research and Myneta.info affidavits. Attendance figures are approximate. Criminal case data is self-declared by candidates. Always verify at the primary source before citing. This is a student civic tech project.
      </div>

      <div className="scanline-overlay" />
      
      {/* --- METHODOLOGY MODAL --- */}
      <AnimatePresence>
        {showMethodology && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMethodology(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-4xl bg-paper border border-gray-800 shadow-[0_0_100px_rgba(225,29,72,0.1)] overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="border-b border-gray-800 p-8 flex justify-between items-center bg-zinc-950">
                <div>
                  <h2 className="text-2xl font-display text-white mb-1 tracking-wider">AUDIT METHODOLOGY & TRANSPARENCY</h2>
                  <p className="mono-label text-primary-red">Protocol v4.2 / Accountability Framework</p>
                </div>
                <button 
                  onClick={() => setShowMethodology(false)} 
                  className="text-gray-500 hover:text-white p-2 border border-gray-950 hover:border-gray-800 transition-all"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8 overflow-y-auto scrollbar-hide space-y-12">
                <section className="space-y-4">
                  <h3 className="mono-label border-l-2 border-primary-red pl-4">1. Primary Data Sources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 p-6 border border-gray-800">
                      <h4 className="text-white font-bold mb-2">Legislative Performance</h4>
                      <p className="text-sm text-gray-400 font-mono leading-relaxed">
                        Data regarding Attendance, Questions Raised, and Participation in Debates is aggregated from <span className="text-white underline decoration-primary-red underline-offset-4">PRS Legislative Research</span>. This represents official Lok Sabha records.
                      </p>
                    </div>
                    <div className="bg-gray-900/50 p-6 border border-gray-800">
                      <h4 className="text-white font-bold mb-2">Affidavits & Wealth</h4>
                      <p className="text-sm text-gray-400 font-mono leading-relaxed">
                        Criminal history and declared assets are extracted from <span className="text-white underline decoration-primary-red underline-offset-4">Myneta.info (ADR)</span>. These values are based on self-declared affidavits submitted by MPs to the Election Commission.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="mono-label border-l-2 border-primary-red pl-4">2. Scoring Framework</h3>
                  <p className="text-sm text-gray-400 font-mono italic">The "Rubber Stamp" grade is a quantitative assessment of an MP's active participation vs personal liabilities.</p>
                  <div className="bg-zinc-950 p-8 border border-gray-800 font-mono space-y-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4 py-4 border-b border-gray-800/50">
                      <span className="text-gray-500">Attendance (Weight: 30%)</span>
                      <span className="text-white">Points = Score % × 0.3</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-4 py-4 border-b border-gray-800/50">
                      <span className="text-gray-500">Inquiry Volume (Weight: 30%)</span>
                      <span className="text-white">Points = Min(Questions / 4, 30)</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-4 py-4 border-b border-gray-800/50">
                      <span className="text-gray-500">Legislative Debates (Weight: 40%)</span>
                      <span className="text-white">Points = Min(Debates / 1.25, 40)</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-4 py-4 text-primary-red font-bold">
                      <span>CRIMINAL PENALTY (Deductive)</span>
                      <span>-10 Points Per Active Case</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-center pt-4">
                    {['A: 80+', 'B: 65+', 'C: 50+', 'D: 35+', 'F: <35'].map(g => (
                      <div key={g} className="bg-paper border border-gray-800 py-3 text-[10px] font-mono text-gray-500">{g}</div>
                    ))}
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="mono-label border-l-2 border-primary-red pl-4">3. Critical Limitations</h3>
                  <ul className="space-y-3 font-mono text-xs text-gray-500 list-none">
                    <li className="flex gap-4">
                      <span className="text-primary-red">[!]</span>
                      <span>Numerical values for attendance are session-averages and may not reflect specific day-level absences due to state-duties.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary-red">[!]</span>
                      <span>Question quality is not assessed; only the volume of inquiries submitted is used for active-participation metrics.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary-red">[!]</span>
                      <span>Criminal data includes all declared cases, including those that may be politically motivated. Use the "Dossier Detail" view for context.</span>
                    </li>
                  </ul>
                </section>
              </div>
              
              <div className="p-6 bg-zinc-950 border-t border-gray-800 text-center">
                <button 
                  onClick={() => setShowMethodology(false)}
                  className="bg-white text-black px-8 py-3 font-mono text-xs font-bold hover:bg-primary-red hover:text-white transition-all uppercase tracking-widest"
                >
                  Understood • Back to Audit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- TOP TICKER --- */}
      <div className="ticker-wrap border-b border-white/5 bg-black">
        <div className="ticker font-mono text-[9px] text-primary-red/80 tracking-[0.2em] py-1.5 font-bold uppercase">
          PROTOCOL: 18TH LOK SABHA AUDIT • STATUS: LIVE • VERIFIED RECORDS: 543 • SESSION: ACTIVE • {new Date().toLocaleDateString()} • DO NOT DUPLICATE WITHOUT AUTHORIZATION • 
        </div>
      </div>

      {/* --- MASTHEAD --- */}
      <header className="container mx-auto px-4 pt-16 pb-12 text-center border-b-[3px] border-double border-gray-900">
        <div className="inline-block px-4 py-1.5 bg-primary-red text-white font-mono text-[10px] tracking-[0.4em] font-extrabold uppercase mb-8 shadow-[0_0_20px_rgba(225,29,72,0.4)]">
          OFFICIAL PERFORMANCE AUDIT
        </div>
        
        <h1 className="text-7xl md:text-[10rem] mb-2 tracking-tighter text-white font-display font-black leading-none flex flex-col md:flex-row items-center justify-center gap-x-6">
          LOK <span className="text-primary-red font-serif italic font-normal">SABHA</span>
        </h1>
        
        <div className="newspaper-divider mx-auto w-3/4 max-w-2xl mb-8">
           <span className="bg-dark-bg px-6 relative z-10 font-mono text-[8px] tracking-[0.5em] text-gray-700 uppercase">Compiled by Firoz Alam • Archive No. LS-18-2024</span>
        </div>
        
        <p className="font-serif italic text-gray-500 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed mb-12">
          "A comprehensive index of legislative attendance, inquiry volume, and legal declarations for the 18th Session Parliamentary Representatives."
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setShowMethodology(true)}
            className="group font-mono text-[10px] border border-gray-800 px-8 py-4 text-gray-500 hover:text-white hover:border-white transition-all flex items-center gap-3 tracking-[0.25em]"
          >
            <Info size={16} className="group-hover:text-primary-red transition-colors" /> PROTOCOL MANUAL
          </button>
          <button 
            onClick={() => setShowInsights(!showInsights)}
            className="group font-mono text-[10px] bg-white border border-white px-8 py-4 text-black font-black hover:bg-primary-red hover:border-primary-red hover:text-white transition-all flex items-center gap-3 tracking-[0.25em]"
          >
             {showInsights ? <X size={16} /> : <TrendingUp size={16} />} 
             {showInsights ? "HALT ANALYTICS" : "UNSEAL DATA INSIGHTS"}
          </button>
        </div>
      </header>

      {/* --- QUICK STATS GRID --- */}
      <div className="bg-paper border-b border-gray-900 border-t border-t-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex border-x border-gray-900">
            <div className="w-full py-5 flex flex-col items-center justify-center group hover:bg-zinc-950/50 transition-colors">
              <p className="mono-label text-[8px] mb-2 group-hover:text-primary-red transition-colors font-black tracking-[0.5em]">AUDITED REGISTRY COUNT</p>
              <div className="flex items-baseline gap-3">
                 <p className="text-4xl font-mono font-black tracking-tighter text-white">{stats.total}</p>
                 <span className="text-[9px] font-mono text-gray-700 uppercase font-bold tracking-widest">Active Units</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SEARCH & QUICK FILTERS --- */}
      <section className="container mx-auto px-4 sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-xl pt-8 pb-4 border-b border-gray-900 dossier-border">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 group w-full">
            <div className="absolute -top-2 left-5 px-2 bg-zinc-950 z-10 transition-transform duration-200 group-focus-within:-translate-y-0.5">
              <span className="mono-label text-[7px] tracking-[0.3em] group-focus-within:text-primary-red transition-colors font-black">SYSTEM ACCESS // QUERY PROTOCOL</span>
            </div>
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-700 group-focus-within:text-primary-red transition-colors" size={12} />
            <input 
              type="text"
              placeholder="ENTER MP IDENTITY, CONSTITUENCY, OR FACTION..."
              className="w-full bg-zinc-900/40 border-2 border-gray-900/60 py-5 pl-14 pr-4 text-white font-mono text-[10px] focus:border-primary-red/50 outline-none transition-all placeholder:text-gray-800 tracking-[0.15em] shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] focus:shadow-[inset_0_2px_20px_rgba(225,29,72,0.08)] rounded-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 group-focus-within:opacity-40 transition-opacity">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-primary-red rounded-full animate-ping" />
                <div className="w-1 h-3 bg-primary-red" />
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button 
              onClick={() => { setSearch(''); setStateFilter('All States'); setPartyFilter('All Parties'); setAStarOnly(false); setAlertsOnly(false); }}
              className="bg-zinc-900 border border-gray-800 px-5 py-3 text-gray-600 hover:text-white transition-all font-mono text-[9px] uppercase tracking-widest font-bold"
              title="Reset All Protocols"
            >
              CLEAR
            </button>
            <button 
              onClick={() => { setAStarOnly(!aStarOnly); if (!aStarOnly) setAlertsOnly(false); }}
              className={`font-mono text-[9px] px-4 py-3 border transition-all uppercase tracking-widest ${aStarOnly ? 'bg-green-600 border-green-600 text-white font-bold shadow-[0_0_15px_rgba(22,163,74,0.2)]' : 'bg-zinc-900 border-gray-800 text-gray-600 hover:border-green-600/50'}`}
            >
              Exemplary Only
            </button>
            <button 
              onClick={() => { setAlertsOnly(!alertsOnly); if (!alertsOnly) setAStarOnly(false); }}
              className={`font-mono text-[9px] px-4 py-3 border transition-all uppercase tracking-widest ${alertsOnly ? 'bg-primary-red border-primary-red text-white font-bold shadow-[0_0_15px_rgba(225,29,72,0.2)]' : 'bg-zinc-900 border-gray-800 text-gray-600 hover:border-primary-red/50'}`}
            >
              Flags Only
            </button>
            <select 
              className="bg-zinc-900 border border-gray-800 px-4 py-3.5 text-white font-mono text-[9px] focus:border-primary-red outline-none tracking-widest cursor-pointer"
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
            >
              {STATES.map(s => <option key={s} value={s}>{s.toUpperCase()}</option>)}
            </select>
            <select 
              className="bg-zinc-900 border border-gray-800 px-4 py-3.5 text-white font-mono text-[9px] focus:border-primary-red outline-none tracking-widest cursor-pointer"
              value={partyFilter}
              onChange={(e) => setPartyFilter(e.target.value)}
            >
              {PARTIES.map(p => <option key={p} value={p}>{p.toUpperCase()}</option>)}
            </select>
            <button 
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="bg-card border border-gray-800 px-6 py-3.5 text-gray-500 hover:text-primary-red transition-all"
            >
              <LayoutGrid size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* --- INSIGHTS DASHBOARD --- */}
      <AnimatePresence>
        {showInsights && (
          <motion.section 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="container mx-auto px-4 py-12 border-b border-gray-900 overflow-hidden bg-black/40"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Top Performing States */}
              <div className="bg-paper p-8 border border-gray-900 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-5 italic text-[40px] font-serif pr-4 pt-4 pointer-events-none">01</div>
                <h3 className="mono-label text-primary-red mb-6 uppercase flex items-center gap-2">
                  <Globe size={14} /> State Ranking Protocol
                </h3>
                <div className="space-y-4">
                  {stateStats.slice(0, 5).map((s, idx) => (
                    <div key={s.state} className="flex items-center justify-between border-b border-gray-900 pb-2.5">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[9px] text-gray-700 font-bold">{idx + 1}.</span>
                        <span className="text-[11px] text-white uppercase font-mono tracking-tight">{s.state}</span>
                      </div>
                      <span className="font-mono text-xs text-green-500 font-black">{s.avgAttendance.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Leaders */}
              <div className="bg-paper p-8 border border-gray-900 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5 italic text-[40px] font-serif pr-4 pt-4 pointer-events-none">02</div>
                <h3 className="mono-label text-primary-red mb-6 uppercase flex items-center gap-2">
                  <MessageSquare size={14} /> Top Inquisitors
                </h3>
                <div className="space-y-4">
                  {[...ALL_MPS].sort((a, b) => b.questions - a.questions).slice(0, 5).map((mp, idx) => (
                    <div key={mp.id} className="flex items-center justify-between border-b border-gray-900 pb-2.5">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[9px] text-gray-700 font-bold">{idx + 1}.</span>
                        <span className="text-[11px] text-white uppercase font-mono truncate max-w-[140px]">{mp.name}</span>
                      </div>
                      <span className="font-mono text-xs text-white font-black">{mp.questions}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wealth Concentration */}
              <div className="bg-paper p-8 border border-gray-900 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5 italic text-[40px] font-serif pr-4 pt-4 pointer-events-none">03</div>
                <h3 className="mono-label text-primary-red mb-6 uppercase flex items-center gap-2">
                  <TrendingUp size={14} /> Wealth Portfolio
                </h3>
                <div className="space-y-4">
                  {[...ALL_MPS].sort((a, b) => b.assets - a.assets).slice(0, 5).map((mp, idx) => (
                    <div key={mp.id} className="flex items-center justify-between border-b border-gray-900 pb-2.5">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[9px] text-gray-700 font-bold">{idx + 1}.</span>
                        <span className="text-[11px] text-white uppercase font-mono truncate max-w-[120px]">{mp.name}</span>
                      </div>
                      <span className="font-mono text-xs text-yellow-500 font-black">₹{mp.assets}Cr</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* National Averages */}
              <div className="bg-zinc-950 p-8 border-2 border-primary-red/10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-red/5 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="mono-label text-primary-red mb-8 uppercase">Session Aggregates</h3>
                  <div className="space-y-6">
                    <div className="group">
                      <p className="text-[9px] font-mono text-gray-600 uppercase mb-1 flex items-center gap-2">
                        <Globe size={10} /> National Attendance
                      </p>
                      <p className="text-4xl text-white font-mono font-black tracking-tighter group-hover:text-green-500 transition-colors">{stats.avgAttendance.toFixed(1)}%</p>
                    </div>
                    <div className="group">
                      <p className="text-[9px] font-mono text-gray-600 uppercase mb-1 flex items-center gap-2">
                        <MessageSquare size={10} /> Inquiry avg
                      </p>
                      <p className="text-4xl text-white font-mono font-black tracking-tighter group-hover:text-primary-red transition-colors">{stats.avgQuestions.toFixed(1)}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-900 pt-4">
                  <p className="font-mono text-[8px] text-gray-700 uppercase leading-relaxed font-bold tracking-widest">
                    SYSTEM REPORT LS-18<br/>
                    STATUS: UNSEALED<br/>
                    SECURITY LEVEL: PUBLIC
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* --- HALL OF FAME/SHAME --- */}
      <section className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
        {hallOfFame && (
          <div className="bg-green-900/5 border border-green-900/30 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />
            <h2 className="text-green-500 text-sm mb-4 font-mono tracking-widest uppercase flex items-center gap-2">
              <TrendingUp size={16} /> Hall of Fame
            </h2>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl text-white">{hallOfFame.name}</h3>
                <p className="font-mono text-xs text-gray-500">{hallOfFame.constituency} • {hallOfFame.attendance}% Attendance</p>
              </div>
              <div className="text-green-500 font-mono text-4xl font-black">A+</div>
            </div>
          </div>
        )}
        {hallOfShame && (
          <div className="bg-red-900/5 border border-red-900/30 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />
            <h2 className="text-primary-red text-sm mb-4 font-mono tracking-widest uppercase flex items-center gap-2">
              <AlertCircle size={16} /> Hall of Shame
            </h2>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl text-white">{hallOfShame.name}</h3>
                <p className="font-mono text-xs text-gray-500">{hallOfShame.constituency} • {hallOfShame.criminalCases} Criminal Cases</p>
              </div>
              <div className="text-primary-red font-mono text-4xl font-black">F</div>
            </div>
          </div>
        )}
      </section>

      {/* --- MP DISPLAY --- */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4 px-1 pb-4 border-b border-gray-900/50">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest leading-none">
              Found {filteredAndSortedMPs.length} MPs in Current Buffer
            </p>
            <div className="flex gap-1">
              <button 
                onClick={() => setViewMode('grid')} 
                className={`p-1.5 border transition-colors ${viewMode === 'grid' ? 'bg-primary-red border-primary-red text-white' : 'border-gray-800 text-gray-600 hover:border-gray-600'}`}
              >
                <LayoutGrid size={12} />
              </button>
              <button 
                onClick={() => setViewMode('list')} 
                className={`p-1.5 border transition-colors ${viewMode === 'list' ? 'bg-primary-red border-primary-red text-white' : 'border-gray-800 text-gray-600 hover:border-gray-600'}`}
              >
                <Layers size={12} />
              </button>
            </div>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto overflow-x-auto scrollbar-hide">
            {[
              { label: 'Legislative Presence', id: 'attendance' },
              { label: 'Inquiry Volume', id: 'questions' },
              { label: 'Legal Alerts', id: 'criminalCases' },
              { label: 'Net Assets', id: 'assets' }
            ].map((sort) => (
              <button 
                key={sort.id}
                onClick={() => { setSortBy(sort.id as any); setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc'); }}
                className={`font-mono text-[10px] px-4 py-2 border transition-all whitespace-nowrap tracking-wider font-bold ${sortBy === sort.id ? 'bg-primary-red text-white border-primary-red shadow-[0_0_15px_rgba(225,29,72,0.3)]' : 'border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300'}`}
              >
                {sort.label.toUpperCase()} {sortBy === sort.id && (sortOrder === 'desc' ? '↓' : '↑')}
              </button>
            ))}
          </div>
        </div>

        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-2"}>
          <AnimatePresence mode="popLayout">
            {filteredAndSortedMPs.map((mp, index) => (
              viewMode === 'grid' ? (
                <MPCard 
                  key={mp.id} 
                  mp={mp} 
                  index={index}
                  onClick={() => setSelectedMP(mp)} 
                  toggleComparison={toggleComparison}
                  comparisonList={comparisonList}
                />
              ) : (
                <motion.div
                  key={mp.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-paper p-4 border border-gray-800 flex items-center justify-between group hover:border-primary-red cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1" onClick={() => setSelectedMP(mp)}>
                    <div className={`w-8 h-8 flex items-center justify-center font-bold text-xs ${calculateGrade(mp) === 'A' ? 'text-green-500' : 'text-gray-400'}`}>
                      {calculateGrade(mp)}
                    </div>
                    <div>
                      <h4 className="text-white text-sm uppercase">{mp.name}</h4>
                      <p className="font-mono text-[9px] text-gray-600 uppercase">{mp.constituency} • {mp.party}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pr-4">
                    <div className="text-right">
                      <p className="text-white text-xs font-mono">{mp.attendance}%</p>
                      <p className="text-[8px] text-gray-600 font-mono uppercase italic">Attn</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-xs font-mono">{mp.questions}</p>
                      <p className="text-[8px] text-gray-600 font-mono uppercase italic">Qs</p>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleComparison(mp); }}
                      className={`p-2 border transition-colors ${comparisonList.find(m => m.id === mp.id) ? 'bg-primary-red border-primary-red text-white' : 'border-gray-800 text-gray-600 hover:border-gray-600'}`}
                    >
                      <ArrowUpDown size={12} />
                    </button>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        {filteredAndSortedMPs.length === 0 && (
          <div className="py-20 text-center border border-dashed border-gray-800">
            <p className="font-mono text-gray-600 uppercase tracking-widest">No matching records found in database.</p>
          </div>
        )}
      </main>

      {/* --- DOSSIER DRAWER (EXPANDED VIEW) --- */}
      <AnimatePresence>
        {selectedMP && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMP(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.98, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-paper border border-gray-800 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] flex flex-col"
              id="mp-dossier-expanded"
            >
              {/* Confidentially Watermark */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-center overflow-hidden">
                <span className="text-[20rem] font-black font-display rotate-12 scale-150 uppercase tracking-tighter select-none">CONFIDENTIAL</span>
              </div>

              {/* Folder Unsealing Header */}
              <div className="bg-primary-red h-1.5 w-full relative z-10" />
              <div className="p-8 md:p-12 overflow-y-auto scrollbar-hide relative z-10">
                <button 
                  onClick={() => setSelectedMP(null)}
                  className="absolute top-6 right-6 text-gray-700 hover:text-white transition-colors p-2 border border-gray-950 hover:border-gray-800"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col md:flex-row gap-8 mb-12 border-b border-gray-900 pb-12 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="font-mono text-[10px] text-primary-red font-black tracking-[0.4em] uppercase">CLASSIFIED FILE // ID: {selectedMP.id}</span>
                       <div className="h-px w-10 bg-primary-red/30" />
                    </div>
                    <h2 className="text-5xl md:text-7xl text-white mb-4 font-black tracking-tighter">{selectedMP.name}</h2>
                    <div className="flex flex-wrap gap-6 font-mono text-[11px] text-gray-500 uppercase tracking-widest font-bold">
                      <span className="flex items-center gap-2 border border-gray-900 px-3 py-1 bg-zinc-950/50"><MapPin size={12} className="text-primary-red" /> {selectedMP.constituency}</span>
                      <span className="flex items-center gap-2 border border-gray-900 px-3 py-1 bg-zinc-950/50"><Globe size={12} className="text-primary-red" /> {selectedMP.state}</span>
                      <span className="flex items-center gap-2 border border-gray-900 px-3 py-1 bg-zinc-950/50"><Filter size={12} className="text-primary-red" /> {selectedMP.party}</span>
                    </div>
                  </div>
                  <div className="self-start pt-2">
                    <RubberStamp grade={calculateGrade(selectedMP)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                       <h4 className="font-mono text-[10px] text-gray-600 font-black tracking-[0.3em] uppercase">PERFORMANCE METRICS</h4>
                       <div className="flex-1 h-px bg-gray-900" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { label: 'Attendance Ratio', value: `${selectedMP.attendance}%`, color: selectedMP.attendance >= 75 ? 'text-green-500' : selectedMP.attendance < 50 ? 'text-primary-red' : 'text-yellow-500' },
                        { label: 'Inquiry Volume', value: selectedMP.questions, color: 'text-white' },
                        { label: 'Debate Participation', value: selectedMP.debates, color: 'text-white' },
                        { label: 'Terms Served', value: selectedMP.term, color: 'text-white' },
                        { label: 'Asset Disclosure', value: `₹${selectedMP.assets} Cr`, color: 'text-white' },
                        { label: 'Legal Notifications', value: selectedMP.criminalCases, color: selectedMP.criminalCases === 0 ? 'text-green-500' : 'text-primary-red' },
                        { label: 'Credential (Audit)', value: selectedMP.education, color: 'text-white', fullWidth: true }
                      ].map((item, idx) => (
                        <div key={idx} className={`bg-zinc-950 p-6 border border-gray-900 shadow-inner group hover:border-gray-700 transition-colors ${item.fullWidth ? 'col-span-2' : ''}`}>
                          <p className="font-mono text-[8px] text-gray-700 uppercase mb-2 tracking-widest font-black">{item.label}</p>
                          <p className={`text-3xl font-mono font-black tracking-tighter leading-none ${item.color}`}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                       <h4 className="font-mono text-[10px] text-gray-600 font-black tracking-[0.3em] uppercase">AGENT PROFILE ANALYSIS</h4>
                       <div className="flex-1 h-px bg-gray-900" />
                    </div>
                    <div className="bg-zinc-950 p-8 border border-gray-900 relative">
                      <div className="absolute top-0 right-0 p-3 opacity-10">
                         <Info size={20} className="text-primary-red" />
                      </div>
                      <p className="font-serif italic text-lg leading-relaxed text-gray-400 first-letter:text-4xl first-letter:float-left first-letter:mr-3 first-letter:font-black first-letter:text-primary-red">
                        {getPerformanceSummary(selectedMP, calculateGrade(selectedMP))}
                      </p>
                      <div className="mt-8 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="font-mono text-[9px] text-gray-700 uppercase tracking-widest leading-loose">
                          // AUTOMATED AUDIT LOG<br />
                          // SOURCE: SECURE_DATABASE.v1<br />
                          // TIME_OFS: {new Date().toLocaleTimeString()}
                        </div>
                        <button 
                          onClick={() => handleShare(selectedMP)}
                          className="px-6 py-3 bg-white text-black font-mono text-[10px] font-black uppercase hover:bg-primary-red hover:text-white transition-all flex items-center gap-3 tracking-widest shadow-xl"
                        >
                          <Share2 size={12} /> EXPORT DOSSIER
                        </button>
                      </div>
                    </div>
                    {selectedMP.criminalCases > 0 && (
                      <div className="bg-red-900/10 border border-red-900/30 p-4 animate-pulse">
                        <p className="text-primary-red font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                          <Gavel size={14} /> Attention: Criminal Record Detected
                        </p>
                        <p className="text-xs text-gray-400 mt-1 font-mono italic">
                          Subject has {selectedMP.criminalCases} active/past legal cases as per election commission affidavits.
                        </p>
                      </div>
                    )}
                    {selectedMP.uncertain && (
                      <div className="bg-yellow-900/10 border border-yellow-900/30 p-4">
                        <p className="text-yellow-500 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                          <AlertCircle size={14} /> Warning: Numerical Variance
                        </p>
                        <p className="text-xs text-gray-400 mt-1 font-mono italic">
                          Some data points for this individual may be approximate due to ongoing sync from PRS Legislative Research.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- COMPARISON STICKY BAR --- */}
      <AnimatePresence>
        {comparisonList.length > 0 && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 flex justify-center"
          >
            <div className="glass-panel px-6 py-4 flex items-center gap-6 shadow-2xl rounded-full">
              <div className="flex -space-x-4">
                {comparisonList.map(mp => (
                  <div key={mp.id} className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-primary-red flex items-center justify-center relative group overflow-hidden">
                    <span className="text-[10px] font-bold text-white relative z-10">{mp.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                    <button 
                      onClick={() => toggleComparison(mp)}
                      className="absolute inset-0 bg-primary-red/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
                    >
                      <X size={12} className="text-white" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="h-4 w-px bg-gray-800" />
              <div className="text-left hidden md:block">
                <p className="mono-label text-primary-red leading-none mb-1">Comparative Analysis</p>
                <p className="text-[10px] text-gray-500 font-mono italic">Select up to 3 agents for cross-referencing</p>
              </div>
              <button 
                onClick={() => setShowComparison(true)}
                disabled={comparisonList.length < 2}
                className="bg-primary-red text-white font-mono text-[10px] font-bold px-6 py-2 rounded-full hover:bg-red-600 transition-colors disabled:opacity-50 disabled:grayscale uppercase tracking-widest"
              >
                Launch Analysis
              </button>
              <button onClick={() => setComparisonList([])} className="text-gray-500 hover:text-white">
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- COMPARISON MODAL --- */}
      <AnimatePresence>
        {showComparison && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComparison(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-paper border border-gray-800 overflow-hidden"
            >
              <div className="border-b border-gray-800 p-6 flex justify-between items-center">
                <h3 className="text-xl font-display uppercase tracking-widest text-primary-red">Field Comparison Analysis</h3>
                <button onClick={() => setShowComparison(false)} className="text-gray-500 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="p-8 grid grid-cols-3 gap-8 overflow-x-auto">
                {comparisonList.map(mp => (
                  <div key={mp.id} className="space-y-8 min-w-[200px]">
                    <div className="text-center">
                      <RubberStamp grade={calculateGrade(mp)} />
                      <h4 className="text-2xl text-white mt-4 font-display leading-tight">{mp.name}</h4>
                      <p className="mono-label mt-1">{mp.constituency}</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="text-center py-4 border-y border-gray-800/30">
                        <p className="mono-label mb-1">Attendance</p>
                        <p className="text-3xl font-mono font-bold text-white">{mp.attendance}%</p>
                      </div>
                      <div className="text-center py-4 border-b border-gray-800/30">
                        <p className="mono-label mb-1">Questions</p>
                        <p className="text-3xl font-mono font-bold text-white">{mp.questions}</p>
                      </div>
                      <div className="text-center py-4 border-b border-gray-800/30">
                        <p className="mono-label mb-1">Declared Assets</p>
                        <p className="text-3xl font-mono font-bold text-white">₹{mp.assets}Cr</p>
                      </div>
                      <div className="text-center py-4 border-b border-gray-800/30">
                        <p className="mono-label mb-1">Criminal Cases</p>
                        <p className={`text-3xl font-mono font-bold ${mp.criminalCases > 0 ? 'text-primary-red' : 'text-gray-600'}`}>{mp.criminalCases}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-gray-900/50 text-center">
                <p className="mono-label text-[8px]">Comparative data based on 18th Lok Sabha sessions</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="container mx-auto px-4 py-20 mt-20 border-t border-gray-900 border-b-8 border-b-primary-red">
        <div className="grid md:grid-cols-4 gap-12 text-left mb-20">
          <div className="col-span-2">
            <h1 className="text-4xl font-display font-black mb-4">LOK <span className="font-serif italic text-primary-red font-normal">SABHA</span> AUDIT</h1>
            <p className="font-serif italic text-gray-500 text-lg mb-6 max-w-sm">"Ensuring legislative transparency through rigorous data aggregation and performance indexing."</p>
            <div className="mb-8">
               <p className="mono-label text-primary-red mb-1">Project Architect</p>
               <p className="text-2xl text-white font-mono font-black tracking-tighter uppercase">Firoz Alam</p>
            </div>
            <div className="flex gap-4">
               <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-500">
                  <Share2 size={12} />
               </div>
               <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
               </div>
            </div>
          </div>
          <div>
            <h5 className="mono-label text-white mb-6">Internal Sources</h5>
            <ul className="font-mono text-[11px] text-gray-500 space-y-3 uppercase tracking-wider">
              <li className="hover:text-primary-red transition-colors cursor-pointer">• PRS Legislative Research</li>
              <li className="hover:text-primary-red transition-colors cursor-pointer">• Myneta.info / ADR</li>
              <li className="hover:text-primary-red transition-colors cursor-pointer">• Election Commission (ECI)</li>
              <li className="hover:text-primary-red transition-colors cursor-pointer">• National Informatics Centre</li>
            </ul>
          </div>
          <div>
            <h5 className="mono-label text-white mb-6">Registry Info</h5>
            <div className="space-y-4 font-mono text-[10px] text-gray-600">
              <p>SESSION ID: 18-LS-2024</p>
              <p>LAST SYNC: {DATA_TIMESTAMP}</p>
              <p>ENCRYPTION: AES-256</p>
              <p>RECORD COUNT: {stats.total}</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-900 font-mono text-[9px] text-gray-700 uppercase tracking-[0.3em]">
          <p>© 2026 FIROZ ALAM • THE PARLIAMENTARY AUDIT PROJECT • LS-4</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-white cursor-pointer">Transparency Act</span>
            <span className="hover:text-white cursor-pointer">Open Registry</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

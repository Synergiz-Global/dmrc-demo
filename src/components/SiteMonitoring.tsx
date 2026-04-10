import React, { useState } from 'react';
import { Video, View, MapPin, AlertCircle, CheckCircle, ArrowRightLeft, Camera, ScanEye, HardHat, FileSignature, Network, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const POUR_DATA = [
  { value: 60 }, { value: 80 }, { value: 95 }, { value: 75 }, { value: 85 }
];

export default function SiteMonitoring() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Read from env variable (supports Create React App, Next.js, and Vite formats)
  const streamUrl = process.env.REACT_APP_YOUTUBE_STREAM_URL || process.env.NEXT_PUBLIC_YOUTUBE_STREAM_URL || (import.meta.env && import.meta.env.VITE_YOUTUBE_STREAM_URL);

  return (
    <div className="space-y-8 pb-20 font-sans">
      {/* Title Section */}
      <section className="px-6 pt-6">
        <div className="flex items-center gap-2 mb-2">
          <ScanEye className="w-5 h-5 text-secondary" />
          <span className="text-secondary font-black tracking-[0.2em] text-[10px] uppercase">
            Site Monitoring Agent Active
          </span>
        </div>
        <h2 className="text-3xl font-black tracking-tight">Reality Capture & Vision</h2>
        <p className="text-on-surface-variant mt-2 text-sm max-w-xl font-medium">
          Observational engine. Ingesting live feeds, detecting anomalies, and validating reality against BIM. All flagged issues are automatically routed to the Escalation Hub or Compliance Agent.
        </p>
      </section>

      {/* Project Context */}
      <section className="px-6 py-3 bg-surface-container-low flex items-center gap-2 border-y border-surface-container">
        <MapPin className="w-4 h-4 text-primary fill-primary/20" />
        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wide">Delhi Metro Phase IV | Janakpuri West Station</span>
      </section>

      {/* Live View Section */}
      <section className="px-4">
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative aspect-video rounded-3xl overflow-hidden bg-on-background shadow-xl group cursor-pointer transition-transform hover:scale-[1.01]"
        >
          <img 
            src="https://picsum.photos/seed/metro/800/450" 
            alt="Live Feed" 
            className="w-full h-full object-cover opacity-80"
          />
          
          {/* AI Vision Overlays */}
          <div className="absolute top-1/4 left-1/3 w-20 h-32 border-2 border-primary rounded-xl bg-primary/10 backdrop-blur-[2px] p-2 flex flex-col justify-between pointer-events-none">
            <span className="bg-primary text-[8px] text-white px-2 py-0.5 font-bold rounded-lg uppercase tracking-widest w-fit">PPE OK</span>
            <span className="text-[8px] text-white font-black bg-black/50 px-1 rounded">ID: W-402</span>
          </div>
          
          <div className="absolute top-1/2 left-2/3 w-16 h-24 border-2 border-secondary rounded-xl bg-secondary/10 backdrop-blur-[2px] p-2 flex flex-col justify-between shadow-[0_0_15px_rgba(var(--secondary-rgb),0.5)] pointer-events-none">
            <span className="bg-secondary text-[8px] text-white px-2 py-0.5 font-bold rounded-lg uppercase tracking-widest w-fit animate-pulse">NO HELMET</span>
            <span className="text-[8px] text-white font-black bg-secondary/80 px-1 rounded w-fit">Drafting RFI...</span>
          </div>

          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-white tracking-[0.15em] uppercase">Live CCTV: Feed 04</span>
          </div>

          {/* View Toggle */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex bg-black/60 backdrop-blur-xl p-1.5 rounded-2xl border border-white/10 shadow-2xl pointer-events-none">
            <button className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-primary shadow-lg flex items-center gap-2 transition-all active:scale-95">
              <Video className="w-4 h-4" /> Reality
            </button>
            <button className="px-6 py-2.5 rounded-xl text-xs font-bold text-white/60 hover:text-white transition-colors flex items-center gap-2 active:scale-95">
              <View className="w-4 h-4" /> BIM Overlay
            </button>
          </div>
          
          {/* Click to play indicator */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <div className="bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                <Video className="w-4 h-4" /> Open Live Stream
             </div>
          </div>
        </div>
      </section>

      {/* Camera Carousel */}
      <section className="px-6">
        <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-4">Active Sensor Feeds</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          <CameraThumb label="CAM-01 (Gate 3)" active seed="cam1" />
          <CameraThumb label="CAM-04 (Track A)" seed="cam2" />
          <CameraThumb label="Drone-02 (Viaduct)" seed="cam3" />
          <CameraThumb label="CAM-07 (Utility)" seed="cam4" />
        </div>
      </section>

      {/* Stats Grid */}
      <section className="px-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Safety Status */}
        <div className="md:col-span-5 bg-white rounded-[2rem] p-6 flex flex-col items-center justify-center text-center shadow-sm border border-surface-container">
          <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-6">Visual PPE Compliance</h3>
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container" cx="48" cy="48" r="42" fill="transparent" stroke="currentColor" strokeWidth="8" />
              <circle className="text-primary" cx="48" cy="48" r="42" fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray="264" strokeDashoffset="5.28" strokeLinecap="round" />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-black text-on-surface">98%</span>
            </div>
          </div>
          <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-4">Scan Rate: 120 frames/sec</span>
        </div>

        {/* Action Routing Log */}
        <div className="md:col-span-7 space-y-4">
          <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Automated Action Log</h3>
          <AlertItem 
            icon={<HardHat className="w-4 h-4" />} 
            title="PPE Violation at Gate 3" 
            action="Auto-drafted Warning RFI"
            time="2 mins ago" 
            type="error" 
          />
          <AlertItem 
            icon={<Camera className="w-4 h-4" />} 
            title="Area 4 Structural Scan Complete" 
            action="Logged to Project Database"
            time="15 mins ago" 
            type="info" 
          />
        </div>
      </section>

      {/* Observational Analysis */}
      <section className="px-6">
        <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-4">Observation Analytics</h3>
        <div className="space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-container border-l-4 border-l-warning">
              <h4 className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Volume Variance</h4>
              <div className="text-2xl font-black text-warning">+2.4%</div>
              <p className="text-[10px] font-bold text-on-surface mt-1">Excavation Surplus Detected via Drone Mesh</p>
            </div>
            {/* Swapped Schedule Health for Agent-appropriate Labour Validation */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-container border-l-4 border-l-primary">
              <h4 className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Labour Validation</h4>
              <div className="text-2xl font-black text-primary flex items-center gap-2">
                1,240 <span className="text-sm font-medium text-on-surface-variant">vs 1,245 API</span>
              </div>
              <p className="text-[10px] font-bold text-on-surface mt-1">Computer Vision Headcount vs. Smart Badge API</p>
            </div>
          </div>

          {/* Photo vs Digital Twin (Strictly Observational, No Resolution buttons) */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-container">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Photo vs Digital Twin Comparison</h4>
              <span className="text-[10px] font-black text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-lg flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> 1 Deviation Detected
              </span>
            </div>
            <div className="flex items-center gap-6 py-4 border-y border-surface-container mb-4">
              <div className="flex-1 flex flex-col items-center gap-2">
                <Camera className="w-8 h-8 text-primary" />
                <span className="text-[8px] font-black uppercase tracking-widest">Site Camera Feed</span>
              </div>
              <ArrowRightLeft className="w-6 h-6 text-on-surface-variant opacity-30" />
              <div className="flex-1 flex flex-col items-center gap-2">
                <View className="w-8 h-8 text-primary" />
                <span className="text-[8px] font-black uppercase tracking-widest">BIM Model Rev 4</span>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-secondary/5 p-4 rounded-2xl border border-secondary/10">
              <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-black text-on-surface">Column P-42 Offset: 12mm</p>
                <p className="text-xs text-on-surface-variant font-medium mt-1">East Axis deviation exceeds structural tolerance limits.</p>
                
                {/* Clear routing indicator instead of an action button */}
                <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-secondary bg-secondary/10 w-fit px-3 py-1.5 rounded-lg border border-secondary/20">
                  <Network className="w-3 h-3" />
                  Flagged & Routed to Escalation Hub for PM Review
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Intelligence */}
      <section className="px-6">
        <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-4">Sensor Intelligence</h3>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-container">
          <h4 className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-6">Concrete Pour Volumetric Accuracy</h4>
          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={POUR_DATA}>
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {POUR_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? '#003f77' : '#003f7733'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest mt-4">Current Batch Consistency: 94.8%</p>
        </div>
      </section>

      {/* YouTube Live Stream Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12">
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 hover:scale-110 transition-all border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {streamUrl ? (
              <iframe 
                src={`${streamUrl}?autoplay=1&mute=1`}
                title="YouTube Live Stream"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            ) : (
              <div className="flex flex-col items-center gap-4 text-white/50">
                <Video className="w-16 h-16 opacity-50" />
                <p className="font-bold tracking-widest uppercase text-sm">Stream not available</p>
                <p className="text-xs opacity-50">Please configure the stream URL environment variable.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CameraThumb({ label, active, seed }: { label: string; active?: boolean; seed: string }) {
  return (
    <div className={cn(
      "flex-shrink-0 w-32 aspect-[4/3] rounded-2xl overflow-hidden relative transition-all",
      active ? "ring-4 ring-primary ring-offset-2 scale-105" : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
    )}>
      <img src={`https://picsum.photos/seed/${seed}/200/150`} className="w-full h-full object-cover" alt={label} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-3 text-[8px] text-white font-black uppercase tracking-widest">{label}</span>
    </div>
  );
}

function AlertItem({ icon, title, action, time, type }: { icon: React.ReactNode; title: string; action: string; time: string; type: 'error' | 'info' }) {
  return (
    <div className={cn(
      "bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border",
      type === 'error' ? "border-secondary/20" : "border-primary/10"
    )}>
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
        type === 'error' ? "bg-secondary text-white shadow-lg shadow-secondary/20" : "bg-primary text-white"
      )}>
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-black text-on-surface truncate">{title}</span>
        <span className="text-[10px] text-on-surface-variant font-bold mt-1 flex items-center gap-1">
          {type === 'error' ? <FileSignature className="w-3 h-3 text-secondary" /> : <CheckCircle className="w-3 h-3 text-primary" />}
          {action}
        </span>
      </div>
      <span className="text-[9px] text-on-surface-variant font-bold uppercase tracking-wider ml-auto shrink-0">{time}</span>
    </div>
  );
}
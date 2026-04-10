import React from 'react';
import { 
  Send, PlusCircle, Brain, User, FileText, View, 
  ExternalLink, AlertTriangle, CheckCircle2, MessageSquareText,
  ShieldAlert, ArrowRight, ShieldCheck, Network 
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function AIChat() {
  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto px-6 pt-8 font-sans">
      
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <MessageSquareText className="w-5 h-5 text-indigo-600" />
          <span className="text-indigo-600 font-black tracking-[0.2em] text-[10px] uppercase">
            Reporting & Communication Agent Active
          </span>
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-900">Ask SynTrack</h2>
        <p className="text-slate-500 mt-4 text-sm leading-relaxed max-w-xl font-medium">
          Your read-only synthesis interface. Query cross-agent data, generate reports, and compare site realities using natural language.
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 space-y-10 pb-40">
        
        {/* ================= TURN 1: Data Synthesis ================= */}
        <div className="flex justify-end items-start gap-4">
          <div className="bg-slate-900 text-white p-6 rounded-[2rem] rounded-tr-none max-w-[80%] shadow-xl shadow-slate-900/10">
            <p className="text-sm font-bold leading-relaxed">Analyze risk for RFI-992 regarding the tunnel boring progress at the Magenta Line extension.</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 border-2 border-white shadow-sm">
            <User className="w-6 h-6 text-slate-500" />
          </div>
        </div>

        <div className="flex justify-start items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-xl shadow-indigo-600/20">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col gap-6 w-full max-w-3xl">
            <div className="bg-white p-8 rounded-[2rem] rounded-tl-none border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-lg">Scheduling + Compliance Synthesis</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Processed in 1.2s</span>
              </div>
              <p className="mb-8 leading-relaxed font-bold text-slate-700">
                Based on RFI-992, the Magenta Line tunnel boring progress at Block-C is currently encountering 15% higher soil resistance than predicted in the geotechnical report. This correlates with a potential 4-day delay in the segment placement schedule.
              </p>

              {/* Chart Mockup */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                <div className="flex justify-between items-end gap-3 h-32 mb-4">
                  <div className="w-full bg-indigo-200 rounded-t-lg h-[80%] relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">MON</span>
                  </div>
                  <div className="w-full bg-indigo-200 rounded-t-lg h-[75%]" />
                  <div className="w-full bg-orange-400 rounded-t-lg h-[95%] relative shadow-lg shadow-orange-400/20">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-orange-600 whitespace-nowrap bg-orange-50 px-2 py-1 rounded-md">SPI: 0.82</div>
                  </div>
                  <div className="w-full bg-indigo-200 rounded-t-lg h-[65%]" />
                  <div className="w-full bg-indigo-200 rounded-t-lg h-[70%]" />
                  <div className="w-full bg-indigo-200 rounded-t-lg h-[60%]" />
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Weekly Soil Resistance Trend</span>
                  <span className="text-[10px] text-orange-600 font-black uppercase tracking-widest flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3" /> Critical Variance
                  </span>
                </div>
              </div>

              {/* Attachments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AttachmentItem icon={<FileText className="w-5 h-5 text-indigo-600" />} title="RFI-992-Geotech.pdf" subtitle="Technical Documentation" />
                <AttachmentItem icon={<View className="w-5 h-5 text-indigo-600" />} title="BIM Segment-C" subtitle="3D Structural Model" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= TURN 2: Visual Synthesis ================= */}
        <div className="flex justify-end items-start gap-4">
          <div className="bg-slate-900 text-white p-6 rounded-[2rem] rounded-tr-none max-w-[80%] shadow-xl shadow-slate-900/10">
            <p className="text-sm font-bold leading-relaxed">Compare BIM model for Janakpuri West with current site photos for slab casting verification.</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 border-2 border-white shadow-sm">
            <User className="w-6 h-6 text-slate-500" />
          </div>
        </div>

        <div className="flex justify-start items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-xl shadow-indigo-600/20">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col gap-6 w-full max-w-3xl">
            <div className="bg-white p-8 rounded-[2rem] rounded-tl-none border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-lg">Site Monitoring Extraction</span>
              </div>
              <p className="mb-8 leading-relaxed font-bold text-slate-700">
                Comparison complete. The BIM model (Rev 4.2) for Janakpuri West Station aligns with site photography taken at 08:00 AM today. Rebar placement matches structural drawings with 98% precision.
              </p>
              <div className="grid grid-cols-2 gap-4 h-56">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img src="https://picsum.photos/seed/site1/400/400" className="w-full h-full object-cover" alt="Site Photo" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded-lg">Site Photo: Today 08:00</div>
                </div>
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center border border-slate-200 shadow-sm">
                  <img src="https://picsum.photos/seed/bim1/400/400" className="w-full h-full object-cover opacity-50" alt="BIM View" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-indigo-600/90 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded-lg">BIM Rev 4.2 Overlay</div>
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 absolute drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TURN 3: Action Refusal & Routing ================= */}
        <div className="flex justify-end items-start gap-4">
          <div className="bg-slate-900 text-white p-6 rounded-[2rem] rounded-tr-none max-w-[80%] shadow-xl shadow-slate-900/10">
            <p className="text-sm font-bold leading-relaxed">Approve RFI-EX-047 and authorize Option A for the Janakpuri West ground sinking issue.</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 border-2 border-white shadow-sm">
            <User className="w-6 h-6 text-slate-500" />
          </div>
        </div>

        <div className="flex justify-start items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-xl shadow-indigo-600/20">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col gap-6 w-full max-w-3xl">
            <div className="bg-white p-8 rounded-[2rem] rounded-tl-none border border-slate-200 shadow-sm">
              
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-6 flex items-start gap-4">
                <ShieldAlert className="w-6 h-6 text-orange-600 shrink-0" />
                <div>
                  <p className="text-sm font-black text-orange-900 tracking-tight">Execution Blocked: Read-Only Environment</p>
                  <p className="text-xs text-orange-800 mt-2 font-medium leading-relaxed">
                    As the Reporting Agent, I cannot execute project state changes, sign documents, or authorize mitigations. To maintain the Human-in-the-Loop security protocol, please use the designated operational dashboards to perform these actions.
                  </p>
                </div>
              </div>

              <p className="mb-6 text-sm font-bold text-slate-600 uppercase tracking-widest">Action Routing</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex flex-col items-start gap-3 p-5 rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:bg-indigo-50/50 transition-all group text-left h-full">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                    <ShieldCheck className="w-5 h-5 text-slate-600 group-hover:text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 group-hover:text-indigo-900 transition-colors">Go to RFI Tracker</h4>
                    <p className="text-xs font-medium text-slate-500 mt-1">Sign and approve RFI-EX-047 via the Compliance module.</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 mt-auto transition-colors" />
                </button>

                <button className="flex flex-col items-start gap-3 p-5 rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:bg-indigo-50/50 transition-all group text-left h-full">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                    <Network className="w-5 h-5 text-slate-600 group-hover:text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 group-hover:text-indigo-900 transition-colors">Go to Escalation Hub</h4>
                    <p className="text-xs font-medium text-slate-500 mt-1">Authorize Option A for the ground sinking conflict.</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 mt-auto transition-colors" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent z-40">
        <div className="max-w-4xl mx-auto space-y-4 pt-10">
          {/* Suggestions */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <SuggestionPill label="Generate Weekly Progress Report" />
            <SuggestionPill label="Summarize overdue RFIs for L&T" />
            <SuggestionPill label="Show critical path impact of rain delay" />
          </div>
          
          {/* Input Box */}
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 flex items-center gap-4 border border-slate-200">
            <button className="p-4 text-slate-400 hover:bg-slate-50 rounded-2xl transition-colors">
              <PlusCircle className="w-6 h-6" />
            </button>
            <input 
              type="text" 
              placeholder="Ask SynTrack to synthesize project data, documents, or reports..." 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-bold placeholder:text-slate-400/70 outline-none"
            />
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-indigo-600/20 active:scale-95 transition-all hover:bg-indigo-700">
              Send <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AttachmentItem({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <button className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50 hover:border-indigo-100 transition-all group text-left border border-slate-100">
      <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-indigo-100">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-black truncate text-slate-700 group-hover:text-indigo-900">{title}</p>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{subtitle}</p>
      </div>
      <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
    </button>
  );
}

function SuggestionPill({ label }: { label: string }) {
  return (
    <button className="whitespace-nowrap px-6 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-black text-slate-600 uppercase tracking-widest hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 transition-all shadow-sm">
      {label}
    </button>
  );
}
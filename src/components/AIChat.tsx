import React from 'react';
import { Send, PlusCircle, Brain, User, FileText, View, ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function AIChat() {
  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto px-6 pt-8">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-black tracking-tight text-primary">Ask SynTrack</h2>
        <p className="text-on-surface-variant mt-4 text-sm leading-relaxed max-w-xl">
          Your intelligent interface for real-time Delhi Metro project insights, risk analysis, and technical documentation.
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 space-y-10 pb-40">
        {/* User Message */}
        <div className="flex justify-end items-start gap-4">
          <div className="bg-primary text-white p-6 rounded-3xl rounded-tr-none max-w-[80%] shadow-lg shadow-primary/10">
            <p className="text-sm font-bold leading-relaxed">Analyze risk for RFI-992 regarding the tunnel boring progress at the Magenta Line extension.</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 border border-surface-container">
            <User className="w-5 h-5 text-on-surface-variant" />
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-start items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center flex-shrink-0 shadow-xl shadow-primary/20">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col gap-6 w-full max-w-3xl">
            <div className="bg-white p-8 rounded-3xl rounded-tl-none border border-surface-container shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg">AI Analysis</span>
                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest italic">Processed in 1.2s</span>
              </div>
              <p className="mb-8 leading-relaxed font-bold text-on-surface">
                Based on RFI-992, the Magenta Line tunnel boring progress at Block-C is currently encountering 15% higher soil resistance than predicted in the geotechnical report. This correlates with a potential 4-day delay in the segment placement schedule.
              </p>

              {/* Chart Mockup */}
              <div className="bg-surface-container-low rounded-2xl p-6 mb-8 border border-surface-container">
                <div className="flex justify-between items-end gap-3 h-32 mb-4">
                  <div className="w-full bg-primary/20 rounded-t-lg h-[80%] relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">MON</span>
                  </div>
                  <div className="w-full bg-primary/20 rounded-t-lg h-[75%]" />
                  <div className="w-full bg-secondary rounded-t-lg h-[95%] relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-secondary whitespace-nowrap">SPI: 0.82</div>
                  </div>
                  <div className="w-full bg-primary/20 rounded-t-lg h-[65%]" />
                  <div className="w-full bg-primary/20 rounded-t-lg h-[70%]" />
                  <div className="w-full bg-primary/20 rounded-t-lg h-[60%]" />
                </div>
                <div className="flex items-center justify-between border-t border-surface-container pt-4">
                  <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Weekly Soil Resistance Trend</span>
                  <span className="text-[10px] text-secondary font-black uppercase tracking-widest flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3" /> Critical Variance
                  </span>
                </div>
              </div>

              {/* Attachments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AttachmentItem icon={<FileText className="w-5 h-5" />} title="RFI-992-Geotech.pdf" subtitle="Technical Documentation" />
                <AttachmentItem icon={<View className="w-5 h-5" />} title="BIM Segment-C" subtitle="3D Structural Model" />
              </div>
            </div>
          </div>
        </div>

        {/* User Message 2 */}
        <div className="flex justify-end items-start gap-4">
          <div className="bg-primary text-white p-6 rounded-3xl rounded-tr-none max-w-[80%] shadow-lg shadow-primary/10">
            <p className="text-sm font-bold leading-relaxed">Compare BIM model for Janakpuri West with current site photos for slab casting verification.</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 border border-surface-container">
            <User className="w-5 h-5 text-on-surface-variant" />
          </div>
        </div>

        {/* AI Response 2 */}
        <div className="flex justify-start items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center flex-shrink-0 shadow-xl shadow-primary/20">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col gap-6 w-full max-w-3xl">
            <div className="bg-white p-8 rounded-3xl rounded-tl-none border border-surface-container shadow-xl">
              <p className="mb-8 leading-relaxed font-bold text-on-surface">
                Comparison complete. The BIM model (Rev 4.2) for Janakpuri West Station aligns with site photography taken at 08:00 AM today. Rebar placement matches structural drawings with 98% precision. Ready for inspection.
              </p>
              <div className="grid grid-cols-2 gap-4 h-56">
                <div className="relative rounded-2xl overflow-hidden border border-surface-container">
                  <img src="https://picsum.photos/seed/site1/400/400" className="w-full h-full object-cover" alt="Site Photo" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded-lg">Site Photo: 2023-10-24</div>
                </div>
                <div className="relative rounded-2xl overflow-hidden bg-on-surface flex items-center justify-center border border-surface-container">
                  <img src="https://picsum.photos/seed/bim1/400/400" className="w-full h-full object-cover opacity-40" alt="BIM View" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-primary/80 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded-lg">BIM Rev 4.2 overlay</div>
                  <CheckCircle2 className="w-12 h-12 text-white absolute drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-28 left-0 right-0 px-6 z-40">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Suggestions */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <SuggestionPill label="Analyze risk for RFI-992" />
            <SuggestionPill label="Compare BIM for Janakpuri West" />
            <SuggestionPill label="Generate Weekly Progress Report" />
          </div>
          
          {/* Input Box */}
          <div className="bg-white rounded-[2rem] shadow-2xl p-3 flex items-center gap-4 border border-surface-container">
            <button className="p-4 text-on-surface-variant hover:bg-surface-container rounded-2xl transition-colors">
              <PlusCircle className="w-6 h-6" />
            </button>
            <input 
              type="text" 
              placeholder="Ask SynTrack about project data, drawings, or risks..." 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-bold placeholder:text-on-surface-variant/50"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-primary/20 active:scale-95 transition-all">
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
    <button className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors group text-left border border-surface-container">
      <div className="text-primary">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-black truncate">{title}</p>
        <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{subtitle}</p>
      </div>
      <ExternalLink className="w-4 h-4 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}

function SuggestionPill({ label }: { label: string }) {
  return (
    <button className="whitespace-nowrap px-6 py-3 bg-white/90 backdrop-blur-md border border-surface-container rounded-full text-[10px] font-black text-primary uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">
      {label}
    </button>
  );
}

import React from 'react';
import { AlertTriangle, Info, CheckCircle, XCircle, Brain, Activity, View, Gavel, Clock } from 'lucide-react';
import { MOCK_ESCALATIONS } from '../constants';
import { cn } from '../lib/utils';

export default function EscalationHub() {
  return (
    <div className="px-6 pt-8 space-y-10">
      {/* Header */}
      <section>
        <span className="text-secondary font-bold tracking-[0.2em] text-[10px] uppercase block mb-2">Priority Oversight</span>
        <h2 className="text-4xl font-black tracking-tight leading-tight">PM Escalation Hub</h2>
        <p className="text-on-surface-variant mt-4 text-sm leading-relaxed max-w-2xl">
          High-stakes decision engine for Delhi Metro Phase IV. Real-time sensor fusion and cross-agentic reasoning trace.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Escalations */}
        <div className="lg:col-span-7 space-y-8">
          {MOCK_ESCALATIONS.map((esc) => (
            <EscalationCard key={esc.id} escalation={esc} />
          ))}
        </div>

        {/* Right: Reasoning Trace */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-surface-container sticky top-28">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-black tracking-tight">AI Reasoning Trace</h3>
              <Brain className="w-6 h-6 text-on-surface-variant opacity-30" />
            </div>
            
            <div className="relative space-y-12">
              {/* Connector Line */}
              <div className="absolute left-7 top-2 bottom-2 w-0.5 bg-surface-container" />
              
              <TraceStep 
                icon={<Activity className="w-6 h-6" />} 
                title="Sensors Checked" 
                description="Scanned 1,240 geotechnical data points. Found anomaly in pressure transducer T-044-B."
                tag="DATA_STREAM_ACTIVE"
                active
              />
              <TraceStep 
                icon={<View className="w-6 h-6" />} 
                title="BIM Model compared" 
                description="Alignment check against Digital Twin (Version 4.2). Soil strata deviation found at Chainage 14+500."
                active
              />
              <TraceStep 
                icon={<Gavel className="w-6 h-6" />} 
                title="Safety protocol triggered" 
                description="Cross-referencing DMRC Safety Manual 2023. Condition meets 'Mandatory Work Suspension' criteria."
                active
              />
              <TraceStep 
                icon={<Clock className="w-6 h-6" />} 
                title="Decision Pending" 
                description="Awaiting PM validation for Janakpuri West site execution."
              />
            </div>

            <div className="mt-12 bg-tertiary/5 p-6 rounded-2xl border border-tertiary/10">
              <div className="flex items-center gap-2 mb-3 text-tertiary">
                <Brain className="w-4 h-4 fill-tertiary/20" />
                <span className="font-black text-[10px] uppercase tracking-widest">Confidence Score: 98.4%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[98.4%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EscalationCard(props: any) {
  const { escalation } = props;
  return (
    <div className="bg-white rounded-[2rem] p-1 overflow-hidden shadow-lg border border-surface-container">
      <div className="p-8">
        <div className="flex justify-between items-start mb-8">
          <div className="flex gap-6">
            <div className={cn(
              "p-4 rounded-2xl",
              escalation.type === 'URGENT' ? "bg-secondary/10 text-secondary" : "bg-surface-container text-primary"
            )}>
              {escalation.type === 'URGENT' ? <AlertTriangle className="w-8 h-8" /> : <Info className="w-8 h-8" />}
            </div>
            <div>
              <h3 className="text-xl font-black leading-tight tracking-tight">{escalation.title}</h3>
              <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider mt-2">
                {escalation.reportedAt} • {escalation.location}
              </p>
            </div>
          </div>
          <span className={cn(
            "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
            escalation.type === 'URGENT' ? "bg-secondary text-white" : "bg-surface-container text-on-surface-variant"
          )}>
            {escalation.type}
          </span>
        </div>

        {/* AI Insight Box */}
        <div className="bg-surface-container-low rounded-3xl p-6 mb-8 relative overflow-hidden border border-surface-container">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <Brain className="w-24 h-24 text-primary" />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-4 h-4 text-primary fill-primary/20" />
            <span className="text-primary font-black text-[10px] uppercase tracking-widest">SynTrack AI Insight</span>
          </div>
          <p className="text-on-surface font-bold leading-relaxed">
            {escalation.insight}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20">
            <CheckCircle className="w-5 h-5" /> Approve Recommendation
          </button>
          <button className="border-2 border-surface-container text-on-surface px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-surface-container transition-all active:scale-95">
            <XCircle className="w-5 h-5 inline mr-2" /> Reject / Override
          </button>
        </div>
      </div>
    </div>
  );
}

function TraceStep({ icon, title, description, tag, active }: { icon: React.ReactNode; title: string; description: string; tag?: string; active?: boolean }) {
  return (
    <div className="relative flex gap-8 items-start">
      <div className={cn(
        "z-10 w-14 h-14 rounded-full flex items-center justify-center ring-8 ring-white transition-all",
        active ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-surface-container text-on-surface-variant opacity-50"
      )}>
        {icon}
      </div>
      <div className={cn("transition-opacity", !active && "opacity-50")}>
        <h4 className="font-black text-on-surface tracking-tight">{title}</h4>
        <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">{description}</p>
        {tag && (
          <div className="mt-3 bg-primary/5 px-3 py-1.5 rounded-lg text-[10px] font-black text-primary uppercase tracking-widest inline-block border border-primary/10">
            {tag}
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  AlertTriangle, Info, CheckCircle, XCircle, Brain, 
  Activity, View, Gavel, Clock, Network, 
  Calendar, ScanEye, ShieldCheck, Zap, ArrowRight,
  ChevronRight, HardHat, UserCheck, ShieldAlert
} from 'lucide-react';
import { cn } from '../lib/utils';

// Mock data showing clear conflict between different AI Agents
const MOCK_ESCALATIONS = [
  {
    id: "ESC-JV-992",
    title: "Ground Sinking Warning at Janakpuri West",
    reportedAt: "14:20 PM",
    location: "Zone 4, Pier 14",
    type: "URGENT",
    riskScore: 92,
    conflictSummary: "Conflict Detected: Safety rules require stopping work immediately, but stopping work will delay the critical project timeline by 4 days.",
    insight: "The Site Monitoring Agent noticed the ground sinking near Pier 14. The Compliance Agent checked the Safety Rulebook and states work must stop. However, the Scheduling Agent warns that stopping will delay the main track construction. As the Supervisor Agent, I have paused automated actions and prepared two options for your approval.",
    mitigations: [
      {
        id: "opt-a",
        label: "Option A: Stop Work & Fix Ground (AI Recommended)",
        impact: "Safety First",
        description: "Stop digging immediately to fix the ground. The Scheduling Agent will automatically move the 40 workers to Site B so they are not sitting idle.",
        tradeoff: "Costs 24 hours of delay, but ensures 100% safety."
      },
      {
        id: "opt-b",
        label: "Option B: Keep Working Slowly with Extra Sensors",
        impact: "Save Time",
        description: "Keep digging at 30% speed. The Compliance Agent requires a Safety Officer to stay on-site the entire time.",
        tradeoff: "No project delay, but carries a higher safety risk."
      }
    ]
  }
];

export default function EscalationHub() {
  const [selectedMitigation, setSelectedMitigation] = useState('opt-a');

  return (
    <div className="px-6 pt-8 space-y-10 pb-24 bg-slate-50 min-h-screen font-sans">
      {/* Header */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <Network className="w-5 h-5 text-indigo-600" />
          <span className="text-indigo-600 font-black tracking-[0.2em] text-[10px] uppercase">
            PM Supervisor Agent is Active
          </span>
        </div>
        <h2 className="text-4xl font-black tracking-tight leading-tight text-slate-900">Executive Decision Hub</h2>
        <p className="text-slate-500 mt-4 text-sm leading-relaxed max-w-2xl font-medium">
          The Supervisor AI has detected conflicting information from the site. Review the AI's findings and authorize a plan of action. No automated changes will happen without your approval.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Escalation & Mitigation Options */}
        <div className="lg:col-span-7 space-y-8">
          {MOCK_ESCALATIONS.map((esc) => (
            <EscalationCard 
              key={esc.id} 
              escalation={esc} 
              selectedMitigation={selectedMitigation}
              onSelectMitigation={setSelectedMitigation}
            />
          ))}
        </div>

        {/* Right: Multi-Agent Reasoning Trace */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-200 sticky top-28">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-xl font-black tracking-tight text-slate-900">AI Thinking Process</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">How the AI reached this conclusion</p>
              </div>
              <Brain className="w-6 h-6 text-indigo-300" />
            </div>
            
            <div className="relative space-y-12">
              <div className="absolute left-7 top-2 bottom-2 w-0.5 bg-slate-100" />
              
              <TraceStep 
                agent="Site Monitoring Agent"
                icon={<ScanEye className="w-5 h-5" />} 
                title="Problem Found" 
                description="Cameras and GPS sensors detected that the ground at Pier 14 is sinking."
                active
              />
              <TraceStep 
                agent="Compliance & Inspection Agent"
                icon={<ShieldCheck className="w-5 h-5" />} 
                title="Rule Checked" 
                description="Read Safety Manual Section 8.4. Found a strict rule that says digging must stop immediately."
                active
              />
              <TraceStep 
                agent="Scheduling Agent"
                icon={<Calendar className="w-5 h-5" />} 
                title="Schedule Warning" 
                description="Calculated that stopping work here will delay the whole track timeline by 4 days."
                active
              />
              <TraceStep 
                agent="PM Supervisor Agent"
                icon={<Network className="w-5 h-5" />} 
                title="Conflict Resolution" 
                description="Stopped all automatic actions. Created two solutions to fix the conflict. Waiting for Project Manager to decide."
                pending
              />
            </div>

            <div className="mt-12 bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-orange-500 fill-orange-500/20" />
                <span className="font-black text-[10px] uppercase tracking-widest text-slate-500">System Confidence: 98.4%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[98.4%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EscalationCard({ escalation, selectedMitigation, onSelectMitigation }: any) {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 flex flex-col h-full">
      <div className="p-10 flex-grow">
        <div className="flex justify-between items-start mb-8">
          <div className="flex gap-6">
            <div className={cn(
              "p-4 rounded-3xl shrink-0",
              escalation.type === 'URGENT' ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-900"
            )}>
              {escalation.type === 'URGENT' ? <AlertTriangle className="w-8 h-8" /> : <Info className="w-8 h-8" />}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-tighter uppercase">High Priority</span>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{escalation.id}</span>
              </div>
              <h3 className="text-2xl font-black leading-tight tracking-tight text-slate-900">{escalation.title}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-2">
                Reported at {escalation.reportedAt} • {escalation.location}
              </p>
            </div>
          </div>
        </div>

        {/* Conflict Banner */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-orange-600 shrink-0" />
          <div>
            <p className="text-sm font-bold text-orange-900">{escalation.conflictSummary}</p>
            <p className="text-xs text-orange-700 mt-2">{escalation.insight}</p>
          </div>
        </div>

        {/* Prescriptive Mitigation Options */}
        <div className="space-y-4 mb-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">AI Suggested Action Plans</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {escalation.mitigations.map((opt: any) => (
              <button
                key={opt.id}
                onClick={() => onSelectMitigation(opt.id)}
                className={cn(
                  "text-left p-6 rounded-3xl border-2 transition-all group relative h-full flex flex-col",
                  selectedMitigation === opt.id 
                    ? "border-indigo-600 bg-indigo-50/50 ring-4 ring-indigo-600/10" 
                    : "border-slate-200 hover:border-slate-300 bg-white"
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={cn(
                    "text-[10px] font-black uppercase px-3 py-1 rounded-full",
                    selectedMitigation === opt.id ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
                  )}>
                    {opt.impact}
                  </span>
                  {selectedMitigation === opt.id && <CheckCircle className="w-5 h-5 text-indigo-600" />}
                </div>
                <h4 className="font-black text-slate-900 mb-2">{opt.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4 flex-grow">{opt.description}</p>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Tradeoff</span>
                  <span className="text-[10px] font-black text-slate-900">{opt.tradeoff}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Human-In-The-Loop Execution Bar */}
      <div className="bg-slate-100 p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 rounded-full text-indigo-600">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Human Authorization Required</p>
            <p className="text-xs font-bold text-slate-900">Select a plan to resume project systems.</p>
          </div>
        </div>
        <div className="flex w-full sm:w-auto gap-3">
          <button className="flex-1 sm:flex-none border-2 border-slate-300 text-slate-600 px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95">
            Manual Override
          </button>
          <button className="flex-1 sm:flex-none bg-indigo-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all active:scale-95 shadow-xl shadow-indigo-600/20">
            Authorize {selectedMitigation === 'opt-a' ? 'Option A' : 'Option B'}
          </button>
        </div>
      </div>
    </div>
  );
}

function TraceStep({ icon, title, description, agent, active, pending }: any) {
  return (
    <div className="relative flex gap-8 items-start">
      <div className={cn(
        "z-10 w-14 h-14 rounded-2xl flex items-center justify-center ring-8 ring-white transition-all",
        active ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : 
        pending ? "bg-orange-100 text-orange-600 ring-orange-50" :
        "bg-slate-100 text-slate-400 opacity-50"
      )}>
        {icon}
      </div>
      <div className={cn("transition-opacity", !active && !pending && "opacity-50")}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[9px] font-black uppercase text-indigo-600 tracking-tighter">{agent}</span>
        </div>
        <h4 className="font-black text-slate-900 tracking-tight leading-none">{title}</h4>
        <p className="text-slate-500 text-xs mt-2 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
}
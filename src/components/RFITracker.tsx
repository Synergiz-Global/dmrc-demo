import React from 'react';
import { 
  ShieldCheck, FileWarning, AlertOctagon, Bot, 
  Sparkles, FileSignature, AlertCircle, FileText, CheckCircle2 
} from 'lucide-react';
import { cn } from '../lib/utils';

// Expanded, plain-language mock data with clear AI actions
const MOCK_RFIS = [
  {
    id: "RFI-EX-047",
    title: "Piling Quality Check - Janakpuri West",
    status: "LATE",
    description: "Checking the pile foundation. The 24-hour time limit for approval has passed.",
    riskScore: 88, 
    assignedTo: "Rajesh Kumar (SE)",
    imageUrl: "https://picsum.photos/seed/piling/200/200",
    isAiDrafted: false,
    complianceRule: "DMRC Safety Rule 8.4",
    missingDocs: ["Soil Report", "Signature Card"],
    aiNote: "The Compliance Agent blocked approval. Important safety reports are missing for this section."
  },
  {
    id: "RFI-VB-102",
    title: "Steel Bar Inspection - Pier 124",
    status: "PENDING",
    description: "Checking the steel bars for the main bridge structure.",
    riskScore: 18,
    assignedTo: "Amit Singh (JE)",
    imageUrl: "https://picsum.photos/seed/rebar/200/200",
    isAiDrafted: true,
    complianceRule: "Standard Structural Rules",
    missingDocs: [],
    aiNote: "The AI verified all documents against the rulebook. It is fully correct and ready for your signature."
  },
  {
    id: "RFI-UT-088",
    title: "Water Pipeline Shift - Gate 3",
    status: "NEEDS FIX",
    description: "Moving the underground water pipe. Waiting for official permission.",
    riskScore: 65,
    assignedTo: "Priya Sharma (AE)",
    imageUrl: "https://picsum.photos/seed/pipe/200/200",
    isAiDrafted: false,
    complianceRule: "City Utility Guidelines",
    missingDocs: ["Water Board NOC"],
    aiNote: "The AI paused this task. You must upload the No Objection Certificate (NOC) before work can continue."
  },
  {
    id: "RFI-EL-210",
    title: "Cable Laying - Substation B",
    status: "PENDING",
    description: "Checking the depth of the electrical cables in the trench.",
    riskScore: 12,
    assignedTo: "Vikram Mehta (SE)",
    imageUrl: "https://picsum.photos/seed/cable/200/200",
    isAiDrafted: true,
    complianceRule: "Electrical Safety Standard",
    missingDocs: [],
    aiNote: "The AI matched the site photos with the approved drawings. Everything is perfect. Ready to approve."
  },
  {
    id: "RFI-CC-305",
    title: "Concrete Pouring - Pier 42",
    status: "PENDING",
    description: "Final check of the concrete mix quality before pouring starts.",
    riskScore: 5,
    assignedTo: "Rajesh Kumar (SE)",
    imageUrl: "https://picsum.photos/seed/concrete/200/200",
    isAiDrafted: true,
    complianceRule: "Concrete Quality Standard",
    missingDocs: [],
    aiNote: "The AI read the lab test results. The mix passes all strength tests. Please sign to allow pouring."
  },
  {
    id: "RFI-SF-991",
    title: "Worker Safety Gear Check - Gate 2",
    status: "LATE",
    description: "Daily check of worker helmets and safety jackets.",
    riskScore: 92,
    assignedTo: "Suresh Patil (Safety Officer)",
    imageUrl: "https://picsum.photos/seed/safety/200/200",
    isAiDrafted: false,
    complianceRule: "Site Safety Rule 1.1",
    missingDocs: ["Morning Photo Log"],
    aiNote: "Warning: The AI did not receive the morning safety photos. This is a high risk for accidents."
  },
  {
    id: "RFI-ST-404",
    title: "Soil Testing - Depot Area",
    status: "NEEDS FIX",
    description: "Checking if the ground is strong enough for the new train depot.",
    riskScore: 55,
    assignedTo: "Amit Singh (JE)",
    imageUrl: "https://picsum.photos/seed/soil/200/200",
    isAiDrafted: false,
    complianceRule: "Ground Test Rules",
    missingDocs: ["Lab Sign-off Page"],
    aiNote: "The AI found a date error on the lab report. Please get the lab to fix it and upload the new copy."
  }
];

export default function RFITracker() {
  return (
    <div className="px-6 pt-8 space-y-10 bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <Bot className="w-5 h-5 text-violet-600" />
          <span className="text-violet-600 font-black tracking-widest text-[10px] uppercase">
            Compliance & Inspection Agent is Active
          </span>
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-900">Inspection Tracker</h2>
        <p className="text-slate-500 mt-2 text-sm max-w-xl font-medium">
          The AI is tracking inspections, checking for missing paperwork, and highlighting rule violations for you.
        </p>
      </section>

      {/* Filter Pills */}
      <section className="flex gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl w-fit shadow-sm overflow-x-auto">
        <button className="px-6 py-2 rounded-xl text-xs font-bold uppercase bg-violet-600 text-white shadow-md whitespace-nowrap">All Open (32)</button>
        <button className="px-6 py-2 rounded-xl text-xs font-bold uppercase text-slate-500 hover:bg-slate-50 flex items-center gap-2 whitespace-nowrap">
          High Risk <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-[10px]">04</span>
        </button>
        <button className="px-6 py-2 rounded-xl text-xs font-bold uppercase text-slate-500 hover:bg-slate-50 flex items-center gap-2 whitespace-nowrap">
          Ready to Sign <span className="bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full text-[10px]">12</span>
        </button>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
          <h4 className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Project Paperwork Health</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Total Open</p>
              <p className="text-3xl font-black text-slate-900">32</p>
            </div>
            <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 flex flex-col justify-center items-center text-center">
              <p className="text-[10px] font-bold text-orange-600 uppercase mb-1">Missing Docs</p>
              <p className="text-3xl font-black text-orange-600">08</p>
            </div>
            <div className="bg-red-50 p-5 rounded-2xl border border-red-100 flex flex-col justify-center items-center text-center">
              <p className="text-[10px] font-bold text-red-600 uppercase mb-1">Late</p>
              <p className="text-3xl font-black text-red-600">04</p>
            </div>
          </div>
        </div>

        {/* Priority Actions (Compliance Insight) */}
        <div className="bg-violet-900 p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
          <ShieldCheck className="absolute -right-4 -bottom-4 w-40 h-40 opacity-10" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <Sparkles className="w-5 h-5 text-violet-300" />
            <h4 className="font-bold uppercase tracking-widest text-xs text-violet-100">AI Agent Alerts</h4>
          </div>
          <ul className="space-y-4 relative z-10">
            <li className="text-sm font-medium flex gap-4 items-start">
              <AlertCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              L&T Contractor has not submitted the new insurance paper for Package 3. The AI has sent them a warning.
            </li>
            <li className="text-sm font-medium flex gap-4 items-start">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              12 inspection requests have been checked by the AI against the rulebook and are ready for the Project Manager to sign.
            </li>
          </ul>
        </div>
      </section>

      {/* RFI List */}
      <section className="space-y-6">
        {MOCK_RFIS.map((rfi) => (
          <RFICard key={rfi.id} rfi={rfi} />
        ))}
      </section>
    </div>
  );
}

function RFICard({ rfi }: { rfi: any }) {
  const isOverdue = rfi.status === 'LATE';
  const isNeedsFix = rfi.status === 'NEEDS FIX';
  const isDraft = rfi.isAiDrafted;
  const hasMissingDocs = rfi.missingDocs && rfi.missingDocs.length > 0;

  return (
    <div className={cn(
      "bg-white p-6 rounded-[2rem] border shadow-sm transition-all hover:shadow-md",
      isDraft ? "border-violet-200 ring-2 ring-violet-50" : "border-slate-200"
    )}>
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Image/Visual context */}
        <div className="w-full md:w-36 h-36 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-100 relative">
          <img src={rfi.imageUrl} alt={rfi.title} className="w-full h-full object-cover" />
          {isDraft && (
            <div className="absolute inset-0 bg-violet-600/20 flex items-center justify-center backdrop-blur-[1px]">
              <FileSignature className="text-white w-8 h-8 drop-shadow-md" />
            </div>
          )}
        </div>

        <div className="flex-grow space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{rfi.id}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[10px] text-slate-500 font-bold uppercase">Given to: {rfi.assignedTo}</span>
              </div>
              <h3 className="text-xl font-black text-slate-900">{rfi.title}</h3>
            </div>
            <span className={cn(
              "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border",
              isDraft ? "bg-violet-50 text-violet-700 border-violet-200" : 
              isOverdue ? "bg-red-50 text-red-600 border-red-200" : 
              isNeedsFix ? "bg-orange-50 text-orange-600 border-orange-200" : "bg-slate-100 text-slate-600 border-slate-200"
            )}>
              {isDraft ? "Ready to Sign" : rfi.status}
            </span>
          </div>

          <p className="text-slate-600 text-sm font-medium">{rfi.description}</p>

          {/* Missing Documentation Tags */}
          {hasMissingDocs && (
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest flex items-center">
                <FileWarning className="w-3 h-3 mr-1" /> Missing Papers:
              </span>
              {rfi.missingDocs.map((doc: string, idx: number) => (
                <span key={idx} className="bg-orange-50 text-orange-700 border border-orange-100 text-[10px] px-2 py-0.5 rounded-md font-bold">
                  {doc}
                </span>
              ))}
            </div>
          )}

          {/* Compliance Insight Box */}
          <div className={cn(
            "p-4 rounded-2xl border",
            (isOverdue || isNeedsFix) ? "bg-red-50 border-red-100" : "bg-violet-50/50 border-violet-100"
          )}>
            <div className="flex items-start gap-3">
              <div className={cn("p-2 rounded-xl mt-1", (isOverdue || isNeedsFix) ? "bg-red-100" : "bg-violet-100")}>
                {(isOverdue || isNeedsFix) ? <AlertOctagon className="w-4 h-4 text-red-600" /> : <Bot className="w-4 h-4 text-violet-600" />}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                  {(isOverdue || isNeedsFix) ? "Important Risk Alert" : "AI Agent Check"}
                </p>
                <p className="text-sm font-bold text-slate-800">
                  {rfi.aiNote}
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Checked Against: <span className="font-bold">{rfi.complianceRule}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Risk Score & Actions */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-slate-100 gap-4">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-12 h-12 rounded-xl flex flex-col items-center justify-center border",
                rfi.riskScore > 70 ? "bg-red-50 border-red-100 text-red-600" : 
                rfi.riskScore > 40 ? "bg-orange-50 border-orange-100 text-orange-600" : "bg-emerald-50 border-emerald-100 text-emerald-600"
              )}>
                <span className="text-lg font-black leading-none">{rfi.riskScore}</span>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Risk Level (0-100)</p>
                <p className="text-xs font-bold text-slate-700">
                  {rfi.riskScore > 70 ? 'High Risk' : rfi.riskScore > 40 ? 'Medium Risk' : 'Normal'}
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> View Files
              </button>
              <button 
                className={cn(
                  "flex-1 md:flex-none px-6 py-2.5 rounded-xl text-xs font-bold text-white shadow-md transition-all active:scale-95",
                  isDraft ? "bg-violet-600 hover:bg-violet-700" : 
                  (isOverdue || isNeedsFix) ? "bg-slate-800 hover:bg-slate-900" : "bg-indigo-600 hover:bg-indigo-700"
                )}
                disabled={hasMissingDocs}
              >
                {hasMissingDocs ? "Upload Papers" : isDraft ? "Sign & Approve" : "Take Action"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
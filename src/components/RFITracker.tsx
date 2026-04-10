import React from 'react';
import { ArrowRight, AlertCircle, Clock, CheckCircle2, TrendingUp } from 'lucide-react';
import { MOCK_RFIS } from '../constants';
import { RFI } from '../types';
import { cn } from '../lib/utils';

export default function RFITracker() {
  return (
    <div className="px-6 pt-8 space-y-10">
      {/* Editorial Header */}
      <section>
        <span className="text-secondary font-bold tracking-[0.2em] text-[10px] uppercase block mb-2">Site Operations</span>
        <h2 className="text-4xl font-black tracking-tight leading-tight">RFI Tracker - Phase IV</h2>
        <p className="text-on-surface-variant mt-4 text-sm leading-relaxed max-w-md">
          Monitoring Request for Inspection (RFI) lifecycle across the Delhi Metro corridor with real-time risk telemetry.
        </p>
      </section>

      {/* Filter Pills */}
      <section className="flex gap-2 p-1.5 bg-surface-container-low rounded-2xl w-fit">
        <button className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest bg-primary text-white shadow-lg">All RFIs</button>
        <button className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-on-surface-variant hover:bg-surface-container transition-colors">My Tasks</button>
        <button className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-on-surface-variant hover:bg-surface-container transition-colors">High Risk</button>
      </section>

      {/* RFI List */}
      <section className="space-y-6">
        {MOCK_RFIS.map((rfi) => (
          <RFICard key={rfi.id} rfi={rfi} />
        ))}
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-container-low p-8 rounded-3xl space-y-6">
          <h4 className="font-black text-on-surface uppercase tracking-widest text-xs">Phase IV Stats</h4>
          <div className="space-y-4">
            <div className="flex justify-between text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
              <span>Total RFIs</span>
              <span>1,248</span>
            </div>
            <div className="h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[75%] rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-surface-container">
              <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">Overdue</p>
              <p className="text-3xl font-black text-on-surface">14</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-surface-container">
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Open</p>
              <p className="text-3xl font-black text-on-surface">42</p>
            </div>
          </div>
        </div>

        {/* Priority Actions */}
        <div className="bg-secondary/5 p-8 rounded-3xl border border-secondary/10">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-secondary" />
            <h4 className="font-black text-secondary uppercase tracking-widest text-xs">Priority Actions</h4>
          </div>
          <ul className="space-y-4">
            <li className="text-sm font-bold flex gap-4 text-on-surface">
              <span className="w-2 h-2 bg-secondary rounded-full mt-1.5 shrink-0" />
              Urgent: Structural verification needed for Pier 124 Viaduct.
            </li>
            <li className="text-sm font-bold flex gap-4 text-on-surface">
              <span className="w-2 h-2 bg-secondary rounded-full mt-1.5 shrink-0" />
              Vendor certs for Steel shipment 42A expired.
            </li>
          </ul>
        </div>
      </section>

      {/* Night Shift Banner */}
      <section className="relative rounded-3xl overflow-hidden h-56 group">
        <img 
          src="https://picsum.photos/seed/night/800/400" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          alt="Night Shift" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8">
          <p className="text-white text-sm font-bold tracking-wide">Night Shift Operations: Maujpur - Majlis Park Corridor</p>
        </div>
      </section>
    </div>
  );
}

function RFICard(props: any) {
  const { rfi } = props;
  const statusColors = {
    OVERDUE: "bg-secondary/10 text-secondary border-secondary/20",
    PENDING: "bg-warning/10 text-warning border-warning/20",
    COMPLETED: "bg-compliance/10 text-compliance border-compliance/20",
  };

  const riskColors = {
    high: "text-secondary",
    medium: "text-warning",
    low: "text-compliance",
  };

  const riskLevel = rfi.riskScore > 7 ? 'high' : rfi.riskScore > 3 ? 'medium' : 'low';

  return (
    <div className={cn(
      "bg-white p-6 rounded-3xl border-l-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1",
      rfi.status === 'OVERDUE' ? "border-l-secondary" : rfi.status === 'PENDING' ? "border-l-warning" : "border-l-compliance"
    )}>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 border border-surface-container">
          <img src={rfi.imageUrl} alt={rfi.title} className={cn("w-full h-full object-cover", rfi.status === 'COMPLETED' && "grayscale opacity-50")} />
        </div>
        <div className="flex-grow space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-black text-on-surface tracking-tight">{rfi.title}</h3>
            <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border", statusColors[rfi.status])}>
              {rfi.status}
            </span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">{rfi.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-surface-container">
            <div>
              <p className="text-[8px] text-on-surface-variant font-black uppercase tracking-widest mb-1">Risk Score</p>
              <p className={cn("text-lg font-black", riskColors[riskLevel])}>{rfi.riskScore}/10</p>
            </div>
            <div>
              <p className="text-[8px] text-on-surface-variant font-black uppercase tracking-widest mb-1">Assigned To</p>
              <p className="text-sm font-bold text-on-surface">{rfi.assignedTo}</p>
            </div>
            <div>
              <p className="text-[8px] text-on-surface-variant font-black uppercase tracking-widest mb-1">ID</p>
              <p className="text-sm font-bold text-on-surface">{rfi.id}</p>
            </div>
            <div className="flex items-center justify-end">
              <button className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                View Audit <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

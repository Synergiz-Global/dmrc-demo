import React from 'react';
import { 
  Calendar, Clock, AlertTriangle, TrendingDown, 
  Activity, GitCommit, Network, BarChart3, 
  ThermometerSun, Users, ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';

// Mock Data for Scheduling Agent
const PROJECT_METRICS = {
  spi: 0.92, // Schedule Performance Index (< 1 means behind schedule)
  cpi: 1.04, // Cost Performance Index (> 1 means under budget)
  predictedDelay: "14 Days",
  activeWorkers: 1240
};

const WBS_DATA = [
  { id: "WBS-1.1", task: "Utility Diversion (Phase 1)", progress: 100, status: "completed", start: 0, width: 20 },
  { id: "WBS-1.2", task: "Piling & Foundation - Pier 40-80", progress: 65, status: "active", start: 15, width: 35, isCritical: true },
  { id: "WBS-1.3", task: "TBM Launch Shaft Excavation", progress: 20, status: "delayed", start: 40, width: 25, isCritical: true },
  { id: "WBS-2.1", task: "Viaduct Superstructure", progress: 0, status: "pending", start: 60, width: 40 },
];

const PREDICTIVE_INSIGHTS = [
  {
    id: "PRED-01",
    type: "WEATHER",
    icon: <ThermometerSun className="w-5 h-5 text-orange-500" />,
    title: "Extreme Heatwave Constraint",
    insight: "Temperatures forecast to exceed 42°C for the next 8 days. AI predicts a 22% drop in afternoon labor productivity.",
    impact: "+4 Days Delay on Critical Path (WBS-1.2)",
    confidence: 94
  },
  {
    id: "PRED-02",
    type: "LABOUR",
    icon: <Users className="w-5 h-5 text-blue-500" />,
    title: "Migration Absenteeism",
    insight: "Historical data patterns indicate a 15% reduction in rebar workforce during the upcoming harvest season.",
    impact: "High risk to Viaduct scheduling (WBS-2.1)",
    confidence: 88
  }
];

export default function ProjectDashboard() {
  return (
    <div className="px-8 pt-8 space-y-8 bg-slate-50 min-h-screen pb-24 font-sans">
      
      {/* Header & Agent Identity */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Network className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-600 font-black tracking-widest text-[10px] uppercase">
              Scheduling Agent Active
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900">Project Command Center</h2>
          <p className="text-slate-500 mt-2 text-sm max-w-xl font-medium">
            Delhi Metro Phase IV • Tughlakabad - Aerocity Corridor
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <div className="px-4 py-2 bg-slate-50 rounded-xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Schedule (SPI)</p>
            <p className={cn("text-xl font-black", PROJECT_METRICS.spi < 1 ? "text-red-600" : "text-emerald-600")}>
              {PROJECT_METRICS.spi}
            </p>
          </div>
          <div className="px-4 py-2 bg-slate-50 rounded-xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Cost (CPI)</p>
            <p className={cn("text-xl font-black", PROJECT_METRICS.cpi < 1 ? "text-red-600" : "text-emerald-600")}>
              {PROJECT_METRICS.cpi}
            </p>
          </div>
        </div>
      </section>

      {/* Top Level KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard title="Total Progress" value="42.5%" icon={<BarChart3 />} />
        <KPICard title="Predicted Delay" value={PROJECT_METRICS.predictedDelay} icon={<Clock />} alert />
        <KPICard title="Critical Path Tasks" value="08" icon={<Activity />} />
        <KPICard title="Active Field Labour" value="1,240" icon={<Users />} />
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: WBS & Gantt Visualization (Spans 8 cols) */}
        <div className="xl:col-span-8 space-y-6">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-black text-slate-900">Critical Path & WBS</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">30-Day Forward Look</p>
              </div>
              <button className="text-xs font-bold bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl hover:bg-indigo-100 transition-colors">
                View Full Schedule
              </button>
            </div>

            {/* Stylized Gantt Chart Area */}
            <div className="relative pt-8 pb-4">
              {/* Timeline markers */}
              <div className="absolute top-0 left-1/4 w-px h-full bg-slate-100" />
              <div className="absolute top-0 left-2/4 w-px h-full bg-slate-100" />
              <div className="absolute top-0 left-3/4 w-px h-full bg-slate-100" />
              
              <div className="space-y-6 relative z-10">
                {WBS_DATA.map((task) => (
                  <div key={task.id} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {task.isCritical && <AlertTriangle className="w-3 h-3 text-red-500" />}
                        <span className="text-sm font-bold text-slate-800">{task.task}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400">{task.progress}%</span>
                    </div>
                    {/* The Gantt Bar */}
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
                      <div className="w-full relative">
                        <div 
                          className={cn(
                            "absolute top-0 bottom-0 rounded-full",
                            task.status === 'completed' ? "bg-emerald-500" :
                            task.status === 'active' ? "bg-indigo-500" :
                            task.status === 'delayed' ? "bg-red-500" : "bg-slate-300"
                          )}
                          style={{ left: `${task.start}%`, width: `${task.width}%` }}
                        >
                          <div 
                            className="h-full bg-white/30 rounded-l-full" 
                            style={{ width: `${task.progress}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100 flex gap-6 text-xs font-bold text-slate-500">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500"/> Completed</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-500"/> On Track</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"/> Delayed</div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Predictive Insights (Spans 4 cols) */}
        <div className="xl:col-span-4 space-y-6">
          <div className="bg-slate-900 rounded-[2rem] p-8 shadow-xl text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Network className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <h3 className="text-sm font-black uppercase tracking-widest text-indigo-300">
                  AI Predictive Delays
                </h3>
              </div>

              <div className="space-y-6">
                {PREDICTIVE_INSIGHTS.map((pred) => (
                  <div key={pred.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white/10 rounded-xl">
                        {pred.icon}
                      </div>
                      <h4 className="font-bold text-sm">{pred.title}</h4>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                      {pred.insight}
                    </p>
                    <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3 mb-4">
                      <span className="text-xs font-bold text-red-300 uppercase tracking-wider block mb-1">Predicted Impact</span>
                      <span className="text-sm font-bold text-red-100">{pred.impact}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-white/10">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Confidence</span>
                      <span className="text-xs font-black text-indigo-300">{pred.confidence}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action routing */}
              <button className="w-full mt-6 bg-indigo-500 hover:bg-indigo-600 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20">
                Run Resequencing Model <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function KPICard({ title, value, icon, alert }: { title: string, value: string, icon: React.ReactNode, alert?: boolean }) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div className={cn(
          "p-3 rounded-2xl",
          alert ? "bg-red-50 text-red-600" : "bg-indigo-50 text-indigo-600"
        )}>
          {icon}
        </div>
        {alert && <TrendingDown className="w-5 h-5 text-red-500" />}
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
        <p className={cn("text-3xl font-black", alert ? "text-red-600" : "text-slate-900")}>{value}</p>
      </div>
    </div>
  );
}
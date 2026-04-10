import React from 'react';
import { 
  Menu, Bell, Home, FileText, AlertTriangle, 
  MessageSquare, ScanEye, Settings, LogOut, Network
} from 'lucide-react';
import { cn } from '../lib/utils';

// Assuming Screen type includes our 5 core modules
export type Screen = 'home' | 'monitoring' | 'rfi' | 'escalations' | 'chat';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Dashboard', icon: Home, agent: 'Scheduling' },
  { id: 'monitoring', label: 'Monitor', icon: ScanEye, agent: 'Site Vision' },
  { id: 'rfi', label: 'Workflow', icon: FileText, agent: 'Compliance' },
  { id: 'escalations', label: 'Escalations', icon: AlertTriangle, agent: 'Supervisor' },
  { id: 'chat', label: 'SynTrack AI', icon: MessageSquare, agent: 'Reporting' },
] as const;

export default function Layout({ children, activeScreen, onScreenChange }: LayoutProps) {
  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-200 z-50">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20 shrink-0">
            <Network className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-slate-900 uppercase leading-none">
              SynTrack
            </h1>
            <p className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase mt-1">Agentic PMS</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Command Modules</p>
          {NAV_ITEMS.map((item) => (
            <DesktopNavItem 
              key={item.id}
              icon={<item.icon />}
              label={item.label}
              agent={item.agent}
              active={activeScreen === item.id}
              onClick={() => onScreenChange(item.id as Screen)}
            />
          ))}
        </div>

        <div className="p-4 border-t border-slate-100 space-y-2">
          <button className="flex items-center gap-3 w-full p-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors font-bold text-sm">
            <Settings className="w-5 h-5" /> Settings
          </button>
          <button className="flex items-center gap-3 w-full p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-bold text-sm">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        
        {/* Header (Visible on both, but styling adapts) */}
        <header className="sticky top-0 z-40 flex items-center justify-between md:justify-end px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
          
          {/* Mobile Logo & Menu */}
          <div className="flex items-center gap-3 md:hidden">
            <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                <Network className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-black tracking-tight text-slate-900 uppercase">
                SynTrack
              </h1>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative text-slate-500 hover:text-slate-900">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
            </button>
            
            <div className="h-8 w-px bg-slate-200 hidden md:block mx-2" />
            
            <button className="flex items-center gap-3 text-left group">
              <div className="hidden md:block">
                <p className="text-sm font-black text-slate-900 leading-none">Rajesh Kumar</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Project Manager</p>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-indigo-600 transition-colors shadow-sm">
                <img 
                  src="https://picsum.photos/seed/user/100/100" 
                  alt="User Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto pb-28 md:pb-6 relative">
          {children}
        </main>

        {/* ================= MOBILE BOTTOM NAV ================= */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-2 pb-6 pt-3 bg-white/90 backdrop-blur-xl border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-t-[2rem]">
          <div className="flex items-center justify-around max-w-lg mx-auto">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem 
                key={item.id}
                icon={<item.icon />}
                label={item.label}
                active={activeScreen === item.id}
                onClick={() => onScreenChange(item.id as Screen)}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

// --- Subcomponents ---

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  agent?: string;
  active?: boolean;
  onClick: () => void;
}

function DesktopNavItem({ icon, label, agent, active, onClick }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-200 group text-left",
        active 
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
          : "text-slate-500 hover:bg-indigo-50 hover:text-indigo-900"
      )}
    >
      <div className={cn(
        "transition-transform duration-200",
        active ? "scale-110" : "group-hover:scale-110"
      )}>
        {icon}
      </div>
      <div>
        <p className="font-black text-sm">{label}</p>
        <p className={cn(
          "text-[10px] font-bold uppercase tracking-widest mt-0.5",
          active ? "text-indigo-200" : "text-slate-400 group-hover:text-indigo-400"
        )}>
          {agent}
        </p>
      </div>
    </button>
  );
}

function MobileNavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1.5 p-2 transition-all duration-300 relative w-16",
        active ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"
      )}
    >
      <div className={cn(
        "p-3 rounded-2xl transition-all duration-300 relative z-10",
        active ? "bg-indigo-100 scale-110 shadow-sm" : "bg-transparent"
      )}>
        {React.cloneElement(icon as React.ReactElement, { 
          className: cn("w-5 h-5 transition-colors", active && "fill-indigo-600/20 text-indigo-600") 
        })}
      </div>
      <span className={cn(
        "text-[9px] font-black uppercase tracking-wider transition-all",
        active ? "opacity-100 transform translate-y-0" : "opacity-70"
      )}>
        {label}
      </span>
    </button>
  );
}
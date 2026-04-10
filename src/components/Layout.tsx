import React from 'react';
import { Menu, Bell, User, Home, FileText, AlertTriangle, MessageSquare, MoreHorizontal } from 'lucide-react';
import { Screen } from '../types';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export default function Layout({ children, activeScreen, onScreenChange }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white border-b border-surface-container shadow-sm">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <h1 className="text-xl font-extrabold tracking-tight text-primary uppercase font-manrope">
            SynTrack-PMS
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors relative">
            <Bell className="w-6 h-6 text-primary" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border border-white" />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 cursor-pointer">
            <img 
              src="https://picsum.photos/seed/user/100/100" 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-24 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-8 pt-4 bg-white border-t border-surface-container shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-3xl">
        <div className="flex items-center justify-around max-w-lg mx-auto">
          <NavItem 
            icon={<Home />} 
            label="Home" 
            active={activeScreen === 'home'} 
            onClick={() => onScreenChange('home')} 
          />
          <NavItem 
            icon={<FileText />} 
            label="RFI" 
            active={activeScreen === 'rfi'} 
            onClick={() => onScreenChange('rfi')} 
          />
          <NavItem 
            icon={<AlertTriangle />} 
            label="Escalations" 
            active={activeScreen === 'escalations'} 
            onClick={() => onScreenChange('escalations')} 
          />
          <NavItem 
            icon={<MessageSquare />} 
            label="AI Chat" 
            active={activeScreen === 'chat'} 
            onClick={() => onScreenChange('chat')} 
          />
          <NavItem 
            icon={<MoreHorizontal />} 
            label="More" 
            active={activeScreen === 'more'} 
            onClick={() => onScreenChange('more')} 
          />
        </div>
      </nav>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 p-2 transition-all duration-200",
        active ? "text-primary scale-110" : "text-on-surface-variant hover:text-primary"
      )}
    >
      <div className={cn(
        "p-2 rounded-xl transition-colors",
        active && "bg-primary/10"
      )}>
        {React.cloneElement(icon as React.ReactElement, { 
          className: cn("w-6 h-6", active && "fill-primary/20") 
        })}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}

import React from 'react';
import { MapPin, Sun, Camera, QrCode, Check, MoreVertical } from 'lucide-react';
import { motion } from 'motion/react';

export default function FieldHome() {
  return (
    <div className="px-6 pt-6 space-y-8">
      {/* Welcome Section */}
      <section>
        <p className="text-on-surface-variant font-medium text-sm">नमस्ते / Good Morning,</p>
        <h2 className="text-3xl font-black text-primary tracking-tight">Rajesh Kumar</h2>
        <div className="flex gap-2 mt-2">
          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase">Site Engineer</span>
          <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase">Phase IV</span>
        </div>
      </section>

      {/* Site Info Card */}
      <section className="relative overflow-hidden rounded-3xl bg-white p-6 border border-surface-container shadow-sm">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="flex justify-between items-start relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">स्टेशन / Station</p>
                <p className="font-bold text-lg">Sangam Vihar</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning/10 rounded-2xl">
                <Sun className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">साइट की स्थिति / Site Conditions</p>
                <p className="font-bold text-lg">Clear, 34°C</p>
              </div>
            </div>
          </div>
          <div className="w-24 h-24 rounded-2xl overflow-hidden grayscale opacity-40 border border-surface-container">
            <img src="https://picsum.photos/seed/site/200/200" alt="Site" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-surface-container">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Corridor: Tughlakabad - Aerocity</p>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="grid grid-cols-2 gap-4">
        <button className="flex flex-col items-center justify-center gap-4 p-8 bg-primary text-white rounded-[2.5rem] shadow-xl shadow-primary/20 active:scale-95 transition-transform">
          <Camera className="w-10 h-10" />
          <div className="text-center">
            <p className="font-bold">Capture & Upload</p>
            <p className="text-[10px] opacity-70">फोटो और अपलोड</p>
          </div>
        </button>
        <button className="flex flex-col items-center justify-center gap-4 p-8 bg-surface-container-highest text-primary rounded-[2.5rem] border border-surface-container active:scale-95 transition-transform">
          <QrCode className="w-10 h-10" />
          <div className="text-center">
            <p className="font-bold">Check-In</p>
            <p className="text-[10px] text-on-surface-variant">चेक-इन</p>
          </div>
        </button>
      </section>

      {/* Site Logs */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="text-xl font-bold">Today's Site Logs <span className="block text-xs font-normal text-on-surface-variant mt-1">आज के साइट लॉग</span></h3>
          <button className="text-xs font-bold text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-3">
          <LogItem title="Excavation (खुदाई)" subtitle="Section 4A - Complete" completed />
          <LogItem title="Utility Diversion (उपयोगिता विचलन)" subtitle="Pending - Urgent" urgent />
          <LogItem title="Piling (पाइलिंग)" subtitle="Next at 14:00 hrs" />
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-3 gap-3">
        <StatBox label="Attendance" value="94%" color="text-primary" />
        <StatBox label="Incidents" value="02" color="text-secondary" />
        <StatBox label="Quality" value="98.2" color="text-compliance" />
      </section>
    </div>
  );
}

function LogItem({ title, subtitle, completed, urgent }: { title: string; subtitle: string; completed?: boolean; urgent?: boolean }) {
  return (
    <div className={cn(
      "flex items-center gap-4 p-4 bg-white rounded-2xl border border-surface-container transition-colors hover:bg-surface-container-low",
      urgent && "border-l-4 border-l-secondary"
    )}>
      <div className={cn(
        "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors",
        completed ? "bg-primary border-primary text-white" : "border-surface-container-highest"
      )}>
        {completed && <Check className="w-4 h-4" />}
      </div>
      <div className="flex-1">
        <p className="font-bold text-sm">{title}</p>
        <p className={cn("text-[11px] font-medium", urgent ? "text-secondary" : "text-on-surface-variant")}>{subtitle}</p>
      </div>
      <button className="p-1 hover:bg-surface-container rounded-full transition-colors">
        <MoreVertical className="w-4 h-4 text-on-surface-variant" />
      </button>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-surface-container-low p-4 rounded-2xl text-center border border-surface-container">
      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">{label}</p>
      <p className={cn("text-xl font-black font-manrope", color)}>{value}</p>
    </div>
  );
}

import { cn } from '../lib/utils';

export type Screen = 'home' | 'rfi' | 'escalations' | 'chat' | 'monitoring';

export interface RFI {
  id: string;
  title: string;
  status: 'OVERDUE' | 'PENDING' | 'COMPLETED';
  location: string;
  description: string;
  riskScore: number;
  assignedTo: string;
  imageUrl: string;
}

export interface Escalation {
  id: string;
  title: string;
  type: 'URGENT' | 'MINOR';
  reportedAt: string;
  location: string;
  insight: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  data?: any;
}

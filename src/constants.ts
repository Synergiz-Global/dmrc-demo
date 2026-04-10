import { RFI, Escalation } from './types';

export const MOCK_RFIS: RFI[] = [
  {
    id: 'RFI-DEL4-992',
    title: 'Piling Quality Check',
    status: 'OVERDUE',
    location: 'Janakpuri West - R.K. Ashram Marg Corridor (Line 8 Ext)',
    description: 'Verifying structural integrity of pile P-42.',
    riskScore: 8.5,
    assignedTo: 'A. Sharma',
    imageUrl: 'https://picsum.photos/seed/piling/400/300',
  },
  {
    id: 'RFI-DEL4-1045',
    title: 'Concrete Slump Test',
    status: 'PENDING',
    location: 'Majlis Park Viaduct Section',
    description: 'Batch B-102 consistency verification before casting segment S-14.',
    riskScore: 4.2,
    assignedTo: 'M. Varma',
    imageUrl: 'https://picsum.photos/seed/concrete/400/300',
  },
  {
    id: 'RFI-DEL4-870',
    title: 'Reinforcement Steel Audit',
    status: 'COMPLETED',
    location: 'Tughlakabad Underground Station',
    description: 'Rebar cage spacing and binding check for South Wall.',
    riskScore: 0.0,
    assignedTo: 'R. Singh',
    imageUrl: 'https://picsum.photos/seed/steel/400/300',
  },
];

export const MOCK_ESCALATIONS: Escalation[] = [
  {
    id: 'ESC-001',
    title: 'Critical Delay: TBM Breakthrough at Janakpuri West',
    type: 'URGENT',
    reportedAt: '4 mins ago',
    location: 'Tunnel Boring Machine Unit #04',
    insight: 'SynTrack AI detected a 15% increase in pressure sensor readings. Recommendation: Halt boring for 24h for stabilization.',
    status: 'pending',
  },
  {
    id: 'ESC-002',
    title: 'Structural Steel Supply Shortage',
    type: 'MINOR',
    reportedAt: '2 hours ago',
    location: 'R.K. Puram Station Site • Vendor A-09',
    insight: 'Inventory tracking shows a 48h depletion window. AI suggests re-routing logistics from Sarita Vihar depot.',
    status: 'pending',
  },
];

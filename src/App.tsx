/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Layout from './components/Layout';
import FieldHome from './components/FieldHome';
import SiteMonitoring from './components/SiteMonitoring';
import RFITracker from './components/RFITracker';
import EscalationHub from './components/EscalationHub';
import AIChat from './components/AIChat';
import { Screen } from './types';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <FieldHome />;
      case 'rfi':
        return <RFITracker />;
      case 'escalations':
        return <EscalationHub />;
      case 'chat':
        return <AIChat />;
      case 'monitoring':
        return <SiteMonitoring />;
      default:
        return <FieldHome />;
    }
  };

  return (
    <Layout activeScreen={activeScreen} onScreenChange={setActiveScreen}>
      {renderScreen()}
    </Layout>
  );
}

import React from 'react';
import { BirthdayLiveExperience } from './components/interactive/BirthdayLiveExperience';
import { AudioProvider } from './components/ui/AudioEffects';

export default function App() {
  return (
    <AudioProvider>
      <div style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'var(--color-burgundy-deepest)',
        color: 'var(--color-text-light)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden'
      }}>
        <BirthdayLiveExperience recipientName="Stacy" />
      </div>
    </AudioProvider>
  );
}

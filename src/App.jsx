import React from 'react';
import { BirthdayLiveExperience } from './components/interactive/BirthdayLiveExperience';
import { AudioProvider, useAudio } from './components/ui/AudioEffects';
import { Volume2, VolumeX } from 'lucide-react';

// Sound Control Bar / Floating Toggle
function SoundToggle() {
  const { soundEnabled, toggleSound, playPop } = useAudio();

  const handleToggle = () => {
    playPop();
    toggleSound();
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
      title={soundEnabled ? "Sound Enabled (Click to Mute)" : "Sound Muted (Click to Enable)"}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: 'rgba(43, 4, 4, 0.75)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 217, 194, 0.3)',
        color: 'var(--color-peach-primary)',
        padding: '8px 16px',
        borderRadius: 'var(--radius-pill)',
        fontSize: '0.85rem',
        fontWeight: 600,
        fontFamily: 'var(--font-display)',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.borderColor = 'var(--color-peach-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.borderColor = 'rgba(255, 217, 194, 0.3)';
      }}
    >
      {soundEnabled ? (
        <>
          <Volume2 size={16} />
          <span>Sound ON</span>
        </>
      ) : (
        <>
          <VolumeX size={16} />
          <span>Sound OFF</span>
        </>
      )}
    </button>
  );
}

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
        <SoundToggle />
        <BirthdayLiveExperience recipientName="Stacy" />
      </div>
    </AudioProvider>
  );
}

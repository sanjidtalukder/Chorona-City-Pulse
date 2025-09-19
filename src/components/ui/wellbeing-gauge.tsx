import React from 'react';
import { cn } from '@/lib/utils';

interface WellbeingGaugeProps {
  score: number; // 0-100
  className?: string;
}

const WellbeingGauge = ({ score, className }: WellbeingGaugeProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  const getGlowColor = (score: number) => {
    if (score >= 80) return 'glow-green';
    if (score >= 60) return 'glow-heat';
    return 'glow-waste';
  };

  const circumference = 2 * Math.PI * 90; // radius = 90
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      {/* Outer Glow Ring */}
      <div className={cn(
        'absolute inset-0 rounded-full animate-breathe',
        getGlowColor(score)
      )} />
      
      {/* SVG Gauge */}
      <svg
        className="transform -rotate-90 drop-shadow-lg"
        width="200"
        height="200"
        viewBox="0 0 200 200"
      >
        {/* Background Circle */}
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="hsl(var(--border))"
          strokeWidth="8"
          fill="none"
          className="opacity-20"
        />
        
        {/* Progress Circle */}
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className={cn(
            'transition-all duration-1000 ease-out',
            getScoreColor(score)
          )}
          style={{
            filter: 'drop-shadow(0 0 8px currentColor)',
          }}
        />
      </svg>
      
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className={cn(
          'text-4xl font-bold mb-1',
          getScoreColor(score)
        )}>
          {score}
        </div>
        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
          City Health
        </div>
      </div>
      
      {/* Scan Lines Effect */}
      <div className="absolute inset-4 rounded-full scan-lines pointer-events-none" />
    </div>
  );
};

export default WellbeingGauge;
import { FC } from 'react';

// Floating geometric shapes for background decoration
export const FloatingShapes: FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {/* Primary gradient circle */}
    <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-float"></div>
    
    {/* Secondary gradient circle */}
    <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
    
    {/* Accent geometric shape */}
    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 transform rotate-45 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
  </div>
);

// Wave SVG for section dividers
export const WaveDivider: FC<{ className?: string; flip?: boolean }> = ({ className = "", flip = false }) => (
  <div className={`w-full overflow-hidden ${className} ${flip ? 'rotate-180' : ''}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full">
      <path 
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
        className="fill-background"
      />
    </svg>
  </div>
);

// Animated gradient background
export const GradientBackground: FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute inset-0 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
    <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5 animate-pulse" style={{animationDuration: '4s'}}></div>
  </div>
);

// Hexagon pattern
export const HexagonPattern: FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute inset-0 opacity-5 ${className}`}>
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern id="hexagons" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
          <polygon points="28,2 48,14 48,34 28,46 8,34 8,14" fill="none" stroke="currentColor" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" className="text-primary"/>
    </svg>
  </div>
);

// Modern geometric decoration for cards
export const CardDecoration: FC<{ variant?: 'primary' | 'secondary' | 'accent' }> = ({ variant = 'primary' }) => {
  const colors = {
    primary: 'from-primary/20 to-primary-glow/20',
    secondary: 'from-secondary/20 to-secondary/10',
    accent: 'from-accent/20 to-accent/10'
  };

  return (
    <div className="absolute top-0 right-0 overflow-hidden">
      <div className={`w-24 h-24 bg-gradient-to-br ${colors[variant]} transform rotate-45 translate-x-12 -translate-y-12 rounded-lg`}></div>
    </div>
  );
};
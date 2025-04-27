"use client";

export function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/grid-pattern.svg)',
          backgroundSize: '20px 20px',
          opacity: 0.15,
        }}
      />
    </div>
  );
}

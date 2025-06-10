
// src/components/layout/header-transition-space.tsx
export default function HeaderTransitionSpace() {
  return (
    <div className="h-16 md:h-20 bg-gradient-to-b from-black/20 via-black/10 to-transparent">
      {/* This space is intentionally empty, serving as a visual transition 
          from the area under the sticky header to the main content.
          The gradient helps it blend smoothly. 
          Heights h-16 (64px) and md:h-20 (80px) match the Header component's heights.
      */}
    </div>
  );
}

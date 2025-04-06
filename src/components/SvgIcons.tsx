
import React from 'react';

export const ConcurrentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="6" height="6" rx="1" className="text-cyan-400" />
    <rect x="9" y="4" width="6" height="6" rx="1" className="text-purple-400" />
    <rect x="16" y="4" width="6" height="6" rx="1" className="text-green-400" />
    <rect x="2" y="14" width="6" height="6" rx="1" className="text-yellow-400" />
    <rect x="9" y="14" width="6" height="6" rx="1" className="text-red-400" />
    <rect x="16" y="14" width="6" height="6" rx="1" className="text-blue-400" />
    <path d="M5 10v1.5a1.5 1.5 0 0 0 1.5 1.5H12" className="text-white" />
    <path d="M12 13v-1.5a1.5 1.5 0 0 1 1.5-1.5H19" className="text-white" />
  </svg>
);

export const TaskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4v16" className="text-white" />
    <path d="M4 8h8" className="text-cyan-400" />
    <path d="M12 8h8" className="text-purple-400" />
    <path d="M4 16h8" className="text-yellow-400" />
    <path d="M12 16h8" className="text-green-400" />
  </svg>
);

export const TaskSwitchingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="8" height="4" rx="1" className="text-cyan-400" />
    <rect x="14" y="4" width="8" height="4" rx="1" className="text-purple-400" />
    <rect x="2" y="12" width="8" height="4" rx="1" className="text-green-400" />
    <rect x="14" y="12" width="8" height="4" rx="1" className="text-yellow-400" />
    <rect x="2" y="16" width="8" height="4" rx="1" className="text-pink-400" />
    <rect x="14" y="16" width="8" height="4" rx="1" className="text-blue-400" />
    <path d="M10 6h4M14 6l-2 2M10 6l2 2" className="text-white" />
    <path d="M10 14h4M14 14l-2 2M10 14l2 2" className="text-white" />
  </svg>
);

export const ContextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="12" r="6" className="text-cyan-400" />
    <circle cx="16" cy="12" r="6" className="text-purple-400" />
    <path d="M9.5 9.5L14 14" className="text-white" />
    <path d="M14 10L10 14" className="text-white" />
  </svg>
);

export const CpuRegistersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" className="text-cyan-400" />
    <line x1="4" y1="8" x2="20" y2="8" className="text-white" />
    <line x1="4" y1="12" x2="20" y2="12" className="text-white" />
    <line x1="4" y1="16" x2="20" y2="16" className="text-white" />
    <circle cx="8" cy="6" r="1" className="text-yellow-400" fill="currentColor" />
    <circle cx="12" cy="6" r="1" className="text-green-400" fill="currentColor" />
    <circle cx="16" cy="6" r="1" className="text-red-400" fill="currentColor" />
    <rect x="6" y="10" width="4" height="1.5" rx="0.5" className="text-purple-400" fill="currentColor" />
    <rect x="14" y="10" width="4" height="1.5" rx="0.5" className="text-purple-400" fill="currentColor" />
    <rect x="6" y="14" width="4" height="1.5" rx="0.5" className="text-purple-400" fill="currentColor" />
    <rect x="14" y="14" width="4" height="1.5" rx="0.5" className="text-purple-400" fill="currentColor" />
  </svg>
);

export const ContfizIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" className="text-gray-800" fill="#1a1a1a" />
    <text x="6" y="8" fontSize="3" className="text-cyan-400" fill="currentColor">struct CONTFIZ {'{'}</text>
    <text x="8" y="12" fontSize="2.5" className="text-yellow-300" fill="currentColor">uint32 r0-r12;</text>
    <text x="8" y="15" fontSize="2.5" className="text-green-300" fill="currentColor">uint32 sp, lr, pc;</text>
    <text x="8" y="18" fontSize="2.5" className="text-purple-300" fill="currentColor">uint32 xpsr;</text>
    <text x="6" y="21" fontSize="3" className="text-cyan-400" fill="currentColor">{'}'}</text>
  </svg>
);

export const SaveContextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="6" rx="1" className="text-cyan-400" />
    <rect x="4" y="14" width="16" height="6" rx="1" className="text-purple-400" />
    <path d="M12 10v4" className="text-white" />
    <path d="M9 12l3 2 3-2" className="text-white" />
    <circle cx="8" cy="7" r="1" className="text-yellow-400" fill="currentColor" />
    <circle cx="12" cy="7" r="1" className="text-green-400" fill="currentColor" />
    <circle cx="16" cy="7" r="1" className="text-red-400" fill="currentColor" />
  </svg>
);

export const RestoreContextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="6" rx="1" className="text-cyan-400" />
    <rect x="4" y="14" width="16" height="6" rx="1" className="text-purple-400" />
    <path d="M12 10v4" className="text-white" />
    <path d="M9 12l3-2 3 2" className="text-white" />
    <circle cx="8" cy="17" r="1" className="text-yellow-400" fill="currentColor" />
    <circle cx="12" cy="17" r="1" className="text-green-400" fill="currentColor" />
    <circle cx="16" cy="17" r="1" className="text-red-400" fill="currentColor" />
  </svg>
);

export const InterruptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="4" rx="1" className="text-cyan-400" />
    <rect x="4" y="10" width="16" height="4" rx="1" className="text-red-400" />
    <rect x="4" y="16" width="16" height="4" rx="1" className="text-purple-400" />
    <path d="M2 12h2" className="text-yellow-400" />
    <path d="M12 10V8" className="text-white" />
    <path d="M12 16v-2" className="text-white" />
    <path d="M20 12h2" className="text-yellow-400" />
    <circle cx="12" cy="12" r="1" className="text-white" fill="currentColor" />
  </svg>
);

export const TaskQueueIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="4" height="4" rx="1" className="text-cyan-400" />
    <rect x="3" y="10" width="4" height="4" rx="1" className="text-purple-400" />
    <rect x="3" y="16" width="4" height="4" rx="1" className="text-green-400" />
    <path d="M7 6h14" className="text-white" />
    <path d="M17 6l2 2-2 2" className="text-white" />
    <path d="M7 12h14" className="text-white" />
    <path d="M17 12l2 2-2 2" className="text-white" />
    <path d="M7 18h14" className="text-white" />
    <path d="M17 18l2 2-2 2" className="text-white" />
  </svg>
);

export const RealWorldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" className="text-cyan-400" />
    <line x1="3.6" y1="9" x2="20.4" y2="9" className="text-white" />
    <line x1="3.6" y1="15" x2="20.4" y2="15" className="text-white" />
    <path d="M12 3a15 15 0 0 1 0 18" className="text-white" />
    <path d="M12 3a15 15 0 0 0 0 18" className="text-white" />
    <rect x="9" y="7" width="6" height="3" rx="1" className="text-yellow-400" fill="rgba(255, 224, 0, 0.2)" />
    <rect x="4" y="13" width="6" height="3" rx="1" className="text-green-400" fill="rgba(0, 255, 128, 0.2)" />
    <rect x="14" y="13" width="6" height="3" rx="1" className="text-purple-400" fill="rgba(170, 0, 255, 0.2)" />
  </svg>
);

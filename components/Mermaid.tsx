// // components/Mermaid.tsx
// 'use client';

// import { useEffect, useRef } from 'react';
// import mermaid from 'mermaid';

// interface MermaidProps {
//   code: string;
// }

// export default function Mermaid({ code }: MermaidProps) {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     mermaid.initialize({ startOnLoad: true });
//     mermaid.contentLoaded();
//   }, [code]);

//   return <div className="mermaid" ref={ref}>{code}</div>;
// }

// components/MermaidWrapper.jsx (or similar)
"use client"; // Mark as a client component in Next.js App Router

import React, { useEffect } from 'react';
import mermaid from 'mermaid'; // Import mermaid

export function MermaidWrapper({ chart }) {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true }); // Initialize Mermaid
    mermaid.contentLoaded(); // Tell Mermaid to render diagrams on the page
  }, []);

  return (
    <div className="mermaid">
      {chart}
    </div>
  );
}

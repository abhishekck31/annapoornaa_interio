"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  emoji?: string;
  items: string[];
}

export function CollapsibleSection({ title, emoji, items }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="flex items-center text-left font-medium text-gray-900">
          {emoji && <span className="mr-2">{emoji}</span>}
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div className={`px-4 ${isOpen ? 'py-3' : 'py-0'} bg-gray-50 rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}`}>
        <ul className="grid grid-cols-1 gap-2 text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-gold-500 flex-shrink-0">•</span>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

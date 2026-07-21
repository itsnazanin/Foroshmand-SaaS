'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-14 h-8 rounded-full bg-purple-600" />;

  const isDark = theme === 'dark';

  const toggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggle}
      className={`
        relative w-17 h-9 rounded-full flex items-center px-4
        transition-all duration-500 ease-in-out overflow-hidden
        ${isDark 
          ? 'bg-purple-600' 
          : 'bg-amber-500'
        }
      `}
      aria-label="Toggle theme"
    >
      
      <div
        className={`
          w-5 h-5 bg-white rounded-full flex items-center justify-center 
          shadow-md transition-all duration-500 ease-in-out z-10
          ${isDark ? '-translate-x-6' : 'translate-x-2'}
        `}
      >
      
      </div>

      
      <Moon 
        size={20} 
        className={`
          absolute right-2 text-white transition-opacity duration-300
          ${isDark ? 'opacity-100' : 'opacity-0'}
        `} 
      />

    
      <Sun 
        size={20} 
        className={`
          absolute left-2 text-white transition-opacity duration-300
          ${isDark ? 'opacity-0' : 'opacity-100'}
        `} 
      />
    </button>
  );
}
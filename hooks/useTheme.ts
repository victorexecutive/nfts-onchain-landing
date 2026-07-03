'use client';

import { useContext } from 'react';
import { ThemeContext } from '../components/theme-provider';

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context as { theme: 'dark' | 'light'; setTheme: (theme: 'dark' | 'light') => void; toggleTheme: () => void };
}

// context/GlobalContext.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false); // Initialize with a boolean value

  return (
    <GlobalContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for accessing context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

import { createContext, useContext, useEffect, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const saveMode = localStorage.getItem('theme');
    return saveMode ? JSON.parse(saveMode) : 'dark';
  });
  useEffect(() => {
    document.body.className = mode; // body-ə `light` və ya `dark` class-ı əlavə edir
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <ModeContext.Provider value={[mode, toggleMode]}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
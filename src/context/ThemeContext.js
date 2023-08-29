"use client";
import React, { createContext, useState } from 'react'
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  console.log(mode);
  const toggle = () => {
    setMode(prev => prev === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
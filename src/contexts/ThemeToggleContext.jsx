import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeToggleContext({ children }) {
  const [dark, setDark] = useState(false);

  const themeData = { dark, setDark };

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
}

export default ThemeToggleContext;

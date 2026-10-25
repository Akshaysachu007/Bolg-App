import { createContext, useContext, useEffect, useState } from "react";
const UIContext = createContext(null);
export function UIProvider({ children }) {
  const [dark, setDark] = useState(
    () => localStorage.getItem("inkspire-theme") === "dark",
  );
  const [notice, setNotice] = useState("");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("inkspire-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 3500);
    return () => clearTimeout(timer);
  }, [notice]);
  return (
    <UIContext.Provider
      value={{
        dark,
        toggleTheme: () => setDark((v) => !v),
        notice,
        notify: setNotice,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
export const useUI = () => useContext(UIContext);

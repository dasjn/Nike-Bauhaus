import React, { createContext, useContext, useState, useEffect } from "react";

const IsMobileContext = createContext();

export function IsMobileProvider({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1200;
      setIsMobile(mobile);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <IsMobileContext.Provider value={isMobile}>{children}</IsMobileContext.Provider>
  );
}

export function useIsMobile() {
  return useContext(IsMobileContext);
}
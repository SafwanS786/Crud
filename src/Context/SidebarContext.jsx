import React, { createContext, useState, useContext } from "react";
const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isopen, setIsopen] = useState(false);

  const toggleSidebar = () => setIsopen((prev) => !prev);
  // console.log("this is Prev", prev);
  const closeSidebar = () => setIsopen(false);
  return (
    <div>
      <SidebarContext.Provider value={{ isopen, toggleSidebar, closeSidebar }}>
        {children}
        {/* {console.log("What is there", children)} */}
      </SidebarContext.Provider>
    </div>
  );
};
export const useSidebar = () => useContext(SidebarContext);

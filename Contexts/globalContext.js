import React, { useContext, useState } from 'react';

export const AppContext = React.createContext()

export const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

return <AppContext.Provider value={{isSidebarOpen,openSidebar,closeSidebar}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () =>{
  return useContext(AppContext)
}


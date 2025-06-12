// Context is like a "messenger" that allows you to share data between components without passing props down through every level. Think of it like a global storage box that any component can access.

import { createContext, useContext } from "react";

const ThemeProviderContext = createContext<{name: string} | undefined>(undefined)

// provider component
export function ThemeProvider ({children}: {children: React.ReactNode }) {
    return (
        <ThemeProviderContext.Provider value={{name: 'sushna'}}>
            {children}
        </ThemeProviderContext.Provider>
    )
}
// hook to use context
export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
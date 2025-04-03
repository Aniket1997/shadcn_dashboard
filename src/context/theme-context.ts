import { createContext } from 'react'
import { ThemeProviderState } from '../shared-interfaces/interface/theme'

export const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "light", // Default theme
  setTheme: () => null,
})

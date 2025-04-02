import { createContext } from 'react'
import { ThemeProviderState } from '../shared-interfaces/src/interface/theme'

export const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "light", // Default theme
  setTheme: () => null,
})

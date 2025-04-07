import { createContext } from 'react'
import { ThemeProviderState } from '@/shared-interfaces/interface/theme'
import { DEFAULT_THEME } from '@/shared-interfaces/constants/themeConstant'

export const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: DEFAULT_THEME, // Default theme
  setTheme: () => null,
})

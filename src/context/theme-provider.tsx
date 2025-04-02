import { useEffect, useState } from "react"
import { ThemeProviderContext } from './theme-context' // Import the context from the separate file
import { ThemeProviderProps } from '../shared-interfaces/src/interface/theme'

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<"dark" | "light">(
    () => (localStorage.getItem(storageKey) as "dark" | "light") || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: "dark" | "light") => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
export { ThemeProviderContext }


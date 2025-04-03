import { useEffect, useState, useRef } from "react"
import { ThemeProviderContext } from "./theme-context"
import { ThemeProviderProps } from "../shared-interfaces/interface/theme"
import { Theme } from "../shared-interfaces/interface/theme"
import localforage from "localforage"

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light")
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    rootRef.current = document.documentElement
  }, [])

  // Fetch the theme from localForage asynchronously when the component mounts
  useEffect(() => {
    const getStoredTheme = async () => {
      const storedTheme = await localforage.getItem(storageKey)
      if (storedTheme) {
        setTheme(storedTheme as Theme)
      } else {
        setTheme(defaultTheme)
      }
    }

    getStoredTheme()
  }, [defaultTheme, storageKey])

  // Effect to update the document's theme class
  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.classList.remove("light", "dark")
      rootRef.current.classList.add(theme)
    }
  }, [theme])

  // Update theme in both state and localForage when setTheme is called
  const updateTheme = async (newTheme: Theme) => {
    await localforage.setItem(storageKey, newTheme)
    setTheme(newTheme)
  }

  const value = {
    theme,
    setTheme: updateTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export { ThemeProviderContext }

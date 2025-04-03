import { useEffect, useState, useRef } from "react";
import { ThemeProviderContext } from "./theme-context";
import { Theme, ThemeProviderProps } from "../shared-interfaces/interface/theme";
import { ThemeEnum } from "@/shared-interfaces/constants/themeConstant";
import localforage from "localforage";
import { DEFAULT_THEME, STORAGE_KEY } from "@/shared-interfaces/constants/themeConstant";

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
  storageKey = STORAGE_KEY,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    rootRef.current = document.documentElement;
  }, []);

  useEffect(() => {
    const getStoredTheme = async () => {
      try {
        const storedTheme = await localforage.getItem(storageKey);
        if (storedTheme) {
          setTheme(storedTheme as ThemeEnum);
        } else {
          setTheme(defaultTheme);
        }
      } catch (error) {
        console.error("Failed to retrieve theme from storage:", error);
        setTheme(defaultTheme);
      }
    };
    getStoredTheme();
  }, [defaultTheme, storageKey]);

  // Effect to update the document's theme class
  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.classList.remove(ThemeEnum.LIGHT, ThemeEnum.DARK);
      rootRef.current.classList.add(theme);
    }
  }, [theme]);

  // Update theme in both state and localForage when setTheme is called
  const updateTheme = async (newTheme: ThemeEnum) => {
    await localforage.setItem(storageKey, newTheme);
    setTheme(newTheme);
  };

  const value = {
    theme,
    setTheme: updateTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export { ThemeProviderContext };

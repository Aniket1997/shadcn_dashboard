import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"
import { Toggle } from "@/components/ui/toggle"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  // Toggle handler to change themes between light and dark
  const handleToggleChange = (checked: boolean) => {
    if (checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Toggle
        aria-label="Toggle Theme"
        pressed={theme === "dark"}
        onPressedChange={handleToggleChange}
        >
        {theme === 'dark' ?<Moon className="h-4 w-4" />:<Sun className="h-4 w-4" />}
      </Toggle>
    </div>
  )
}

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Toggle } from "@/components/ui/toggle";
import { ThemeEnum } from "@/shared-interfaces/constants/themeConstant";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Toggle handler to change themes between light and dark
  const handleToggleChange = (checked: boolean) => {
    if (checked) {
      setTheme(ThemeEnum.DARK);
    } else {
      setTheme(ThemeEnum.LIGHT);
    }
  };

  // Function to determine the icon to display
  const renderIcon = () => {
    if (theme === ThemeEnum.DARK) {
      return <Moon className="h-4 w-4" />;
    }
    return <Sun className="h-4 w-4" />;
  };

  return (
    <div className="flex items-center gap-2">
      <Toggle
        aria-label="Toggle Theme"
        pressed={theme === ThemeEnum.DARK}
        onPressedChange={handleToggleChange}
      >
        {renderIcon()}
      </Toggle>
    </div>
  );
}

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  const storedTheme = window.localStorage.getItem("theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return null;
}

function getSystemTheme(): Theme {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function setDocumentTheme(theme: Theme | null) {
  if (theme === null) {
    document.documentElement.removeAttribute("data-theme");
    window.localStorage.removeItem("theme");
    return;
  }

  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function syncTheme() {
      setTheme(getStoredTheme() ?? getSystemTheme());
    }

    syncTheme();
    mediaQuery.addEventListener("change", syncTheme);

    return () => {
      mediaQuery.removeEventListener("change", syncTheme);
    };
  }, []);

  function handleClick() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setDocumentTheme(newTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={handleClick}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={theme === "dark"}
    >
      <span className="theme-toggle__option" data-active={theme === "light"} aria-hidden="true">
        <Sun size={16} strokeWidth={2.25} />
      </span>
      <span className="theme-toggle__option" data-active={theme === "dark"} aria-hidden="true">
        <Moon size={15} strokeWidth={2.25} />
      </span>
    </button>
  );
}

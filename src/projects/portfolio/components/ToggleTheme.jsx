import { RiSunLine, RiMoonLine } from "@remixicon/react";
import { useState, useEffect } from "react";

function ToggleTheme() {
  const [isDark, setIsDark] = useState(true);

  // Save in Locale Storage!

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsDark(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  function handle_click(params) {
    const newTheme = !isDark;
    setIsDark((id) => (id = newTheme));
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }
  return (
    <button
      className="size-7 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-80 dark:hover:text-zinc-800 transition-colors rounded-full p-1"
      onClick={handle_click}
    >
      {isDark ? <RiSunLine /> : <RiMoonLine />}
    </button>
  );
}

export default ToggleTheme;

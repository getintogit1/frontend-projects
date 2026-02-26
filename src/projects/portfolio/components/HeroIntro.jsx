import { useEffect, useState } from "react";

function HeroIntro() {
  const fullText = "Hello World!";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 60); // Geschwindigkeit

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg md:text-xl font-light text-emerald-600 dark:text-emerald-600">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}

export default HeroIntro;

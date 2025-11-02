import { useEffect, useState } from "react";

export function useTypingEffect(commands: string[], typingSpeed = 40, lineDelay = 800) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let typingInterval: ReturnType<typeof setInterval>;

    const typeNextChar = () => {
      const currentCommand = commands[lineIndex];
      if (charIndex < currentCommand.length) {
        setCurrentLine(currentCommand.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setLines(prev => [...prev, currentCommand]);
        setCurrentLine("");
        lineIndex++;
        charIndex = 0;

        if (lineIndex < commands.length) {
          setTimeout(() => {
            typingInterval = setInterval(typeNextChar, typingSpeed);
          }, lineDelay);
        }
      }
    };

    typingInterval = setInterval(typeNextChar, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [commands, typingSpeed, lineDelay]);

  return { lines, currentLine };
}

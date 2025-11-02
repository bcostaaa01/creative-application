import { useEffect, useState } from "react";

export function useTypingEffect(
  initialCommands: string[] = [], 
  typingSpeed = 40, 
  lineDelay = 800
) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [queue, setQueue] = useState<string[]>([...initialCommands]);

  const [inputEnabled, setInputEnabled] = useState(initialCommands.length === 0);

  useEffect(() => {
    if (queue.length === 0) {
      setInputEnabled(true);
      return;
    }

    let charIndex = 0;
    const command = queue[0];

    const interval = setInterval(() => {
      if (charIndex < command.length) {
        setCurrentLine(command.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setLines((prev) => [...prev, command]);
        setCurrentLine("");
        setTimeout(() => {
          setQueue((prev) => prev.slice(1));
        }, lineDelay);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [queue, typingSpeed, lineDelay]);

  const handleCommand = (command: string) => {
    setLines(() => [`$ ${command}`]);
    if (command.includes("yes")) {
        setQueue(() => [`Awesome!🚀🤩Please feel free to reach out to me directly - I will be very excited to hear from you!`]);
    } else {
        setQueue(() => [`Enter a valid command to procceed.`])
    }
  };

  return { lines, currentLine, handleCommand, inputEnabled };
}

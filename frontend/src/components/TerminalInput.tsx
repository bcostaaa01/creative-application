import { useState } from "react";

interface TerminalInputProps {
  onSubmit: (command: string) => void;
}

export function TerminalInput({ onSubmit }: TerminalInputProps) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(input);
      console.log(input);
      setInput("");
    }
  };

  return (
    <div className="flex items-center">
      <span className="text-[#00ff00] mr-2">$</span>
      <input
        type="text"
        className="bg-transparent outline-none text-[#00ff00] font-mono flex-1 caret-[#00ff00]"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
}

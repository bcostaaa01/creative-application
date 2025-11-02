import TypingLine from "./TypingLine";
import { TerminalInput } from "./TerminalInput";
import { useTypingEffect } from "../hooks/useTypingEffect";

type TerminalBodyProps = {
  initialCommands?: string[];
};

export default function TerminalBody({ initialCommands = [] }: TerminalBodyProps) {
  const { lines, currentLine, handleCommand, inputEnabled } = useTypingEffect(initialCommands);

  return (
    <div className="p-6 space-y-2 min-h-[250px] text-left">
      {lines.map((line, i) => (
        <div key={i} className="leading-relaxed">{line}</div>
      ))}

      {currentLine && <TypingLine text={currentLine} />}

      {inputEnabled && !currentLine && <TerminalInput onSubmit={handleCommand} />}
    </div>
  );
}

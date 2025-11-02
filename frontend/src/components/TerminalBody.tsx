import TypingLine from "./TypingLine";

type TerminalBodyProps = {
  lines: string[];
  currentLine: string;
};

export default function TerminalBody({ lines, currentLine }: TerminalBodyProps) {
  return (
    <div className="p-6 space-y-2 min-h-[250px] text-left">
      {lines.map((line, i) => (
        <div key={i} className="leading-relaxed">
          {line}
        </div>
      ))}
      <TypingLine text={currentLine} />
    </div>
  );
}

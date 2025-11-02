import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";

type TerminalProps = {
  lines: string[];
  currentLine: string;
};

export default function Terminal({ lines, currentLine }: TerminalProps) {
  return (
    <div className="bg-[#1e1e1e] text-[#00ff00] font-mono text-[15px] rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-[#2a2a2a] w-[90%] max-w-4xl mx-auto mt-10 overflow-hidden">
      <TerminalHeader />
      <TerminalBody lines={lines} currentLine={currentLine} />
    </div>
  );
}

export default function TerminalHeader() {
  return (
    <div className="flex justify-end items-center bg-[#2b2b2b] px-3 py-1 border-b border-[#3a3a3a]">
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-[#ff5f57] rounded-full cursor-pointer"></div>
        <div className="w-3 h-3 bg-[#ffbd2e] rounded-full cursor-pointer"></div>
        <div className="w-3 h-3 bg-[#28c940] rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
}

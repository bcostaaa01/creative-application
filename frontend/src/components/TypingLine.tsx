type TypingLineProps = {
  text: string;
};

export default function TypingLine({ text }: TypingLineProps) {
  return (
    <div>
      <span>{text}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
}

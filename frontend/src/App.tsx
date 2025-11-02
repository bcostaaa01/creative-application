import { commands } from "./data/commands";
import { useTypingEffect } from "./hooks/useTypingEffect";
import Terminal from "./components/Terminal";
import "./App.css";

export default function App() {
  const { lines, currentLine } = useTypingEffect(commands, 40, 800);

  return <Terminal lines={lines} currentLine={currentLine} />;
}

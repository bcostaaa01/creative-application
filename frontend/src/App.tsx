import { commands } from "./data/commands";
import Terminal from "./components/Terminal";
import "./App.css";

export default function App() {

  return <Terminal initialCommands={commands} />;
}

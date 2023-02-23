import "./App.css";
import Keyboard from "../../../feature/Components/keyboard/keyboard";
import Actions from "../../../feature/Components/callHang/callHang";

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: "Inicio", path: "/home" },
  { label: "Tareas", path: "/tasks" },
  { label: "Acerca de", path: "/about" },
];

export function App() {
  return (
    <div className="App">
      <Keyboard />
      <Actions />
    </div>
  );
}

import { useMemo } from "react";

type KeyProp = { keyText: string };
export function Tasks() {
  const repo = useMemo(() => new KeyApiRepo(), []);
  const { key } = usekeys(repo);

function Key({ keyText }: KeyProp) {
  return (
    <li>
      <button className="key">{keyText}</button>
    </li>
  );
}
export default Key;

export function Keyboard() {
  const keys: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "x",
  ];

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keys.map((item) => (
          <Key key={item} keyText={item}></Key>
        ))}
      </ol>
    </div>
  );
}

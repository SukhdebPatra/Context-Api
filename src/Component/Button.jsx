export function Button({ text, onClick, style,className }) {
  return (
    <button className={className} onClick={onClick} style={style}>
      {text}
    </button>
  );
}

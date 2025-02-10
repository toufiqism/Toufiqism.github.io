export function Card({ children }) {
  return <div className="bg-white shadow-md rounded-lg p-4">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

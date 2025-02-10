export function Dialog({ open, children }) {
    if (!open) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>
      </div>
    );
  }
  
  export function DialogTitle({ children }) {
    return <h2 className="text-xl font-bold mb-4">{children}</h2>;
  }
  
  export function DialogContent({ children }) {
    return <div>{children}</div>;
  }
  
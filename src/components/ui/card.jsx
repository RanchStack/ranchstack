export default function Card({ icon, children }) {
  return (
    <div
      className={`flex flex-col items-center p-3 shadow-md rounded-md transition-transform bg-white/10 hover:scale-102 hover:shadow-xl`}
      // style={{ backgroundColor: "rgba(var(--color-secondary-rgb), 0.5)" }}
    >
      {icon && <div className="text-4xl mb-3 text-center" style={{ color: "var(--color-secondary)" }}>{icon}</div>}
      <div className="px-3 pb-2 text-lg">{children}</div>
    </div>
  );
}

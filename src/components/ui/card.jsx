export default function Card({ icon, children }) {
  return (
    <div
      className="flex flex-col items-center p-5 shadow-[0_0_15px_rgba(0,0,0,0.6)] rounded-md transition-transform bg-white/10 hover:scale-102 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]"
      // style={{ backgroundColor: "rgba(var(--color-secondary-rgb), 0.5)" }}
    >
      {icon && <div className="text-5xl mb-5 text-center text-[var(--color-secondary)]">{icon}</div>}
      <div className="px-5 pb-2 text-xl">{children}</div>
    </div>
  );
}

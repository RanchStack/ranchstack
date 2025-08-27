export default function FlippableCardBack({ icon, children }) {
  return (
    <div
      className="flex flex-col items-center p-5"
    >
      {icon && <div className="text-5xl mb-5 text-center text-[var(--color-secondary)]">{icon}</div>}
      <div className="px-5 pb-2 text-xl">{children}</div>
    </div>
  );
}

export default function FlippableCardFront({ icon }) {
  return (
    <div
      className="flex flex-col justify-center items-center p-5 h-full"
    >
      {icon && <div className="text-9xl text-center text-[var(--color-secondary)]">{icon}</div>}
    </div>
  );
}

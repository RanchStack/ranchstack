export default function CircularButton({ icon, tooltip }) {
  return (
    <div className="relative inline-flex group">
      <button className="p-4 rounded-full bg-[var(--color-secondary)] shadow-[0_0_15px_rgba(0,0,0,0.6)] transition-transform hover:scale-105 hover:shadow-2xl focus:outline-none cursor-pointer">
        {icon && (
          <div className="text-3xl text-[var(--color-background)]/90">
            {icon}
          </div>
        )}
      </button>

      {tooltip && (
        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-2 py-1 bg-[var(--color-violet)] text-[var(--color-foreground)] text-sm rounded shadow-[0_0_25px_rgba(0,0,0,0.6)] whitespace-nowrap z-50  opacity-0 group-hover:opacity-100 transition-opacity duration-200 ">
          {tooltip}
        </span>
      )}
    </div>
  );
}

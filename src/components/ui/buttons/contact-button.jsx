import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function ContactButton() {
  return (
    <Link
      href="/contact"
      className="self-center w-auto inline-flex rounded-md justify-center items-center mb-3 pl-6 gap-6 bg-[var(--color-violet)] text-[var(--color-background)] text-3xl font-bold uppercase shadow-[0_0_15px_rgba(0,0,0,0.6)] transition-transform hover:scale-103 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:bg-[var(--color-violet)]/90 focus:outline-none cursor-pointer"
    >
      Contact Me
      <div className="p-3 rounded-md bg-[var(--color-background)]/30">
        <FaEnvelope />
      </div>
    </Link>
  );
}

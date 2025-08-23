import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-2 w-full border-y bg-white/10">
      <div className="flex flex-row justify-between items-center px-10 py-2">
        <div className="font-bold text-xl">Logo Placeholder</div>
        <nav>
          <ul className="flex flex-row gap-6 text-lg">
            <li>
              <Link href="/about" className="hover:underline uppercase">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline uppercase">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline uppercase">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline uppercase">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t">
      <div className="flex flex-row justify-between px-10 py-8 bg-white/10 ">
        {/* Site Map */}
        <div>
          <h3 className="text-sm font-semibold mb-1">Site Map</h3>
          <ul className="space-y-1 text-xs">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold mb-1">Contact</h3>
          <ul className="space-y-1 text-xs">
            <li>Email: info@ranchstack.ca</li>
            <li>Location: Alberta, Canada</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-semibold mb-1">Follow Me</h3>
          <ul className="text-xs">
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-3 text-xs border-t">
        © {new Date().getFullYear()} Ranchstack · Built by Danielle Surette
      </div>
    </footer>
  );
}

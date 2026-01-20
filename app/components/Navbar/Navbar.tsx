"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "@/public/imma-logo.png";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/UI-Components/Pages/Gallery" },
  { label: "Partner", href: "/UI-Components/Pages/Partners" },
  { label: "Team", href: "/UI-Components/Pages/Teams"},
  { label: "Academy", href: "/UI-Components/Pages/Academy"}
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); 

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => (prev[label] ? {} : { [label]: true }));
  };

  useEffect(() => {
    setMounted(true); 

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`transition-all duration-300 fixed inset-x-0 top-0 z-50 border-b border-(--white)/10
        ${isScrolled ? "bg-(--black) shadow-md" : "bg-(--black)"}`}
    >
      <div className="max-w-7xl mx-auto min-w-0 flex items-center justify-between px-4 md:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-4">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="p-0"
          />
          <Link
            href="/"
            className="text-(--prim) text-xl md:text-2xl lg:text-3xl font-bold Audiowide leading-none"
          >
            Imma<span className="text-(--white)">gination</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4 md:space-x-6 relative ml-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base text-(--white) md:text-lg hover:text-(--G1) transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="#footer-section">
            <button
              className="hidden lg:block items-center justify-center bg-(--G1) text-white font-medium px-4 py-2 md:px-3 md:py-2 rounded-full 
              hover:text-white border border-transparent hover:border-gray-300 cursor-pointer transition-all duration-200 text-sm"
            >
              <i className="bi bi-telephone-inbound text-white text-lg px-1"></i>
              Contact us
            </button>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white lg:hidden text-2xl p-1"
            aria-label="Toggle menu"
          >
            <i
              className={`ri-${
                mobileMenuOpen ? "close-line" : "menu-3-line"
              } transition-all duration-200`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black text-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "max-h-screen opacity-100 py-3"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-4 sm:px-6 space-y-3">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="bg-text border border-gray-200 rounded-lg overflow-hidden"
            >
              <Link
                href={link.href}
                className="block px-4 py-3 text-sm hover:text-(--G1) transition font-medium"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

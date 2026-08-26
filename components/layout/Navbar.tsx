"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="container-shell flex h-24 items-center justify-between">
        <Link
          href="/"
          className="display text-3xl font-semibold tracking-tight"
        >
          staywell<span className="text-coral">.</span>
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-semibold md:flex">
          <Link className="transition-colors hover:text-coral" href="/">
            Home
          </Link>
          <Link className="transition-colors hover:text-coral" href="/hotels">
            Hotels
          </Link>
          <a className="transition-colors hover:text-coral" href="#about">
            About
          </a>
          <Link
            href="/hotels"
            className="rounded-full bg-ink px-6 py-3 text-xs text-white transition-transform hover:-translate-y-0.5"
          >
            Explore stays
          </Link>
        </nav>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="rounded-full border border-ink/20 p-2 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="mx-4 rounded-2xl bg-white p-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/hotels">
              Hotels
            </Link>
            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>
            <Link
              onClick={() => setOpen(false)}
              href="/hotels"
              className="rounded-full bg-ink px-5 py-3 text-center text-white"
            >
              Explore stays
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

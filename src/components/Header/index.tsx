import Link from "next/link";
import React from "react";


export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-semibold text-gray-900">
          MyApp
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            About
          </Link>
          <Link
           href="/projects"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/register"
            className="rounded border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:border-gray-500 hover:text-black transition"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="rounded bg-black px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from '../../../public/assets/doclogo.png'

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Apointments", href: "/apoinments" },
  { name: "dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* LEFT: Logo and Website Name */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              href="/"
              className="font-bold text-xl text-gray-800 tracking-tight"
            >
              <Image
              src={logo}
              alt="logo"
              width='40'
              ></Image>
            </Link>
            <span className="text-2xl">DocApoint</span>
          </div>

          {/* MIDDLE: Desktop Navigation Items */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? "p-2 bg-cyan-300 rounded-md" : "p-2"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* RIGHT: Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium text-black bg-cyan-300 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-all shadow-sm"
            >
              Register
            </Link>
          </div>

          {/* MOBILE: Burger Button Icon */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // X (Close) Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Burger (Open) Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-gray-50 px-4 pt-2 pb-4 space-y-3 shadow-inner">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <hr className="border-gray-200" />

          <div className="flex flex-col space-y-2 px-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-base font-medium text-gray-600 hover:text-blue-600 py-2"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-base font-medium text-white bg-cyan-400 hover:bg-cyan-700 py-2 rounded-lg transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

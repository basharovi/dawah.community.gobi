'use client'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { href: '#intro', label: 'পরিচিতি' },
  { href: '#mission', label: 'লক্ষ্য ও উদ্দেশ্য' },
  { href: '#projects', label: 'কার্যক্রম' },
  { href: '#team', label: 'কমিটি' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = () => setMenuOpen((prev) => !prev)
  const handleNavLinkClick = () => setMenuOpen(false)

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo and Title */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="ml-2 text-lg font-semibold text-gray-800 hidden sm:inline">
            দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ
          </span>
        </a>
        {/* Hamburger Button */}
        <button
          className="sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // Close icon
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {/* Desktop Nav */}
        <ul className="hidden sm:flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 rounded text-gray-700 hover:bg-gray-100 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="sm:hidden bg-white shadow">
          <ul className="flex flex-col px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100 transition"
                  onClick={handleNavLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
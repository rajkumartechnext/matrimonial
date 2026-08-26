"use client";

import Link from "next/link";

import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

function Header() {
  return (
    <header className="matrimony-header">
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-brand">
          <Link href="/" className="brand-link">
            <span className="brand-text">Logo Here</span>
          </Link>
        </div>

        {/* Main Menu */}
        <div className="menu-container">
          <ul className="menu-list">
            <li className="menu-item">
              <Link href="/register" className="menu-link">
                Help?
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

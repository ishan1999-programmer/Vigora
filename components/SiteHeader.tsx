'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const links = [
  ['Home', '/'], ['About Us', '/about'], ['Products', '/products'],
  ['Automation Solutions', '/automation'], ['Contact Us', '/contact']
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    closeRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      toggleRef.current?.focus();
    };
  }, [menuOpen]);

  return <header className="site-header">
    <div className="header-inner">
      <Link className="brand" href="/" aria-label="Vigora Machine Works home">
        <Image src="/images/vigora-logo.jpg" alt="Vigora Machine Works logo" width={72} height={72} priority />
        <span><strong>VIGORA</strong><small>Machine Works</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <button
        ref={toggleRef}
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>
    </div>
    {menuOpen && <div className="mobile-menu-layer">
      <button className="mobile-menu-backdrop" type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} />
      <aside className="mobile-drawer" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="mobile-drawer-header">
          <span>Menu</span>
          <button ref={closeRef} className="mobile-menu-close" type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)}>×</button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<span aria-hidden="true">→</span></Link>)}
        </nav>
      </aside>
    </div>}
  </header>;
}

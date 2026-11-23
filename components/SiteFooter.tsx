import Image from "next/image";
import Link from "next/link";
import { contacts } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main wrap">
        <div>
          <Link className="footer-brand" href="/">
            VIGORA Machine Works
          </Link>
          <p>Textile processing machinery and automation</p>
        </div>
        <div className="footer-links">
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/automation">Automation Solutions</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="footer-contact">
          <strong>Contact</strong>
          <a href={`tel:${contacts.phones[0]}`}>{contacts.phones[0]}</a>
          <a href={`mailto:${contacts.emails[0]}`}>{contacts.emails[0]}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap footer-bottom-inner flex-col">
          <Link
            className="footer-bottom-brand"
            href="/"
            aria-label="Vigora Machine Works home"
          >
            <Image
              src="/images/vigora-logo.jpg"
              alt=""
              width={38}
              height={38}
            />
            <span>Vigora Machine Works</span>
          </Link>
          <p>
            © 2026 Vigora Machine Works. Your trusted partner in textile
            machinery and automation.
          </p>
        </div>
      </div>
    </footer>
  );
}

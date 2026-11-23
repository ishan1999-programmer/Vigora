import Image from "next/image";
import Link from "next/link";
import { products, automationSolutions, contacts } from "@/lib/content";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner wrap">
          <div className="hero-copy">
            <p className="eyebrow">Vigora Machine Works · Nanotek Agencies</p>
            <h1>Textile processing machinery &amp; automation</h1>
            <p>
              Vigora Machine Works manufactures and supplies textile processing
              machinery. Nanotek Agencies provides automation solutions, along
              with spares, instruments and sensors.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/products">
                Explore machinery
              </Link>
              <Link className="text-link light-link" href="/contact">
                Contact details <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/images/soft-flow.jpg"
              alt="Soft Flow Dyeing Machine from the Vigora brochure"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="hero-rule" />
      </section>
      <section className="home-intro section wrap">
        <div className="section-heading">
          <p className="eyebrow">About the companies</p>
          <h2>Machinery and automation</h2>
        </div>
        <div className="section-copy">
          <p>
            Based in Surat, Gujarat, Vigora Machine Works and Nanotek Agencies
            introduce themselves as reliable partners for industrial
            requirements. Vigora Machine Works is engaged in textile processing
            machinery; Nanotek Agencies specializes in automation solutions,
            spares, instruments and sensors.
          </p>
          <Link className="text-link" href="/about">
            Read the introduction <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">Machinery</p>
              <h2>Products</h2>
              <p className="muted">
                Explore the machines shown in the brochure.
              </p>
            </div>
            <Link className="text-link" href="/products">
              All machinery <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="product-grid home-products">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} compact />
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap home-automation">
        <div className="automation-photo">
          <Image
            src="/images/automation-controller.jpg"
            alt="Dyeing controller shown in the brochure"
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
          />
        </div>
        <div>
          <p className="eyebrow">Nanotek Agencies</p>
          <h2>Automation solutions</h2>
          <p className="muted">
            The brochure lists these solutions for the textile industry.
          </p>
          <ul className="solution-pills">
            {automationSolutions.map((solution) => (
              <li key={solution}>{solution}</li>
            ))}
          </ul>
          <Link className="text-link" href="/automation">
            View automation solutions <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <section className="contact-band">
        <div className="wrap contact-band-inner">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Contact information</h2>
            <p>
              Works and office addresses, phone numbers, emails and websites.
            </p>
          </div>
          <div className="contact-band-links">
            <a href={`tel:${contacts.phones[0]}`}>{contacts.phones[0]}</a>
            <a href={`mailto:${contacts.emails[0]}`}>{contacts.emails[0]}</a>
            <Link href="/contact">
              All contact details <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

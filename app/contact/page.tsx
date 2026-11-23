import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { contacts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Works, office and branch addresses and contact details listed in the company brochure.",
};

export default function ContactPage() {
  return (
    <div className="wrap page-shell">
      <PageIntro eyebrow="Get in touch" title="Contact us">
        <p>Vigora Machine Works · Nanotek Agencies</p>
      </PageIntro>
      <div className="contact-layout">
        <section className="address-list" aria-label="Addresses">
          {contacts.addresses.map((address) => (
            <article className="address-card" key={address.label}>
              <span className="eyebrow">{address.label}</span>
              <address>
                {address.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </article>
          ))}
        </section>
        <aside className="contact-details">
          <div>
            <h2>Phone</h2>
            {contacts.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`}>
                {phone}
              </a>
            ))}
          </div>
          <div>
            <h2>Email</h2>
            {contacts.emails.map((email) => (
              <a key={email} href={`mailto:${email}`}>
                {email}
              </a>
            ))}
          </div>
          <div>
            <h2>Websites</h2>
            {contacts.websites.map((website) => (
              <a
                key={website}
                href={`https://${website}`}
                target="_blank"
                rel="noreferrer"
              >
                {website}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

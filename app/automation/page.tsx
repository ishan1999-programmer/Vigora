import Image from "next/image";
import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { automationBenefits, automationSolutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Automation Solutions",
  description:
    "Automation solutions listed in the Vigora Machine Works and Nanotek Agencies brochure.",
};
const images = [
  {
    src: "/images/automation-controller.jpg",
    alt: "Dyeing controller",
    label: "Dyeing Controllers",
  },
  { src: "/images/automation-hmi.jpg", alt: "HMI panel", label: "HMI Panels" },
  { src: "/images/automation-vfd.jpg", alt: "VFD drives", label: "VFD Drives" },
];

export default function AutomationPage() {
  return (
    <div className="wrap page-shell">
      <PageIntro
        eyebrow="Nanotek Agencies"
        title="Automation of textile industry"
      >
        <p>
          Smart solutions for smarter textile future. Advanced automation
          solutions to enhance productivity, improve quality and ensure energy
          efficiency in textile processing units.
        </p>
      </PageIntro>
      <section className="automation-layout">
        <div>
          <p className="eyebrow">Automation solutions</p>
          <ul className="automation-list">
            {automationSolutions.map((item, index) => (
              <li key={item}>
                <span className="solution-number">0{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="benefits">
            <h2>Key benefits</h2>
            <ul>
              {automationBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="automation-image-grid">
          {images.map((image) => (
            <figure key={image.label}>
              <div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 40vw"
                />
              </div>
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

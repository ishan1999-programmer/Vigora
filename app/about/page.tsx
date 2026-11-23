import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { companyIntro } from '@/lib/content';

export const metadata: Metadata = { title: 'About Us', description: 'Introduction to Vigora Machine Works and Nanotek Agencies from their brochure.' };

export default function AboutPage() {
  return <div className="wrap page-shell"><PageIntro eyebrow="About the companies" title="Vigora Machine Works & Nanotek Agencies"><p>Introduction</p></PageIntro><div className="about-copy">{companyIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="about-columns"><article><p className="eyebrow">Textile processing machinery</p><h2>Vigora Machine Works</h2><p>Manufacturing and supply of high-quality textile processing machinery.</p></article><article><p className="eyebrow">Automation solutions</p><h2>Nanotek Agencies</h2><p>Automation solutions along with a wide range of spares, instruments, and sensors.</p></article></div></div>;
}

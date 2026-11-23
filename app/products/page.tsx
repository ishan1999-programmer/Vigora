import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products / Machinery",
  description:
    "Textile processing machines and technical information shown in the Vigora Machine Works brochure.",
};

export default function ProductsPage() {
  return (
    <div className="wrap page-shell">
      <PageIntro eyebrow="Vigora Machine Works" title="Products & machinery">
        <p>Machine descriptions, specifications, features and model data.</p>
      </PageIntro>
      <nav className="product-index" aria-label="Products">
        {products.map((product) => (
          <a key={product.slug} href={`#${product.slug}`}>
            {product.name}
            <span aria-hidden="true">↘</span>
          </a>
        ))}
      </nav>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}

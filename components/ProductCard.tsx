import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/content";

export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const cardContent = (
    <>
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>
      <div className="product-content">
        <h2>{product.name}</h2>
        {product.intro && <p className="product-intro">{product.intro}</p>}
        <div className="product-detail-grid">
          <div>
            <h3>Technical specification</h3>
            <ul>
              {product.specifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Features</h3>
            <ul>
              {product.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        {product.table && (
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  {product.table.headers.map((item) => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.table.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((value, i) =>
                      i === 0 ? (
                        <th scope="row" key={i}>
                          {value}
                        </th>
                      ) : (
                        <td key={i}>{value}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );

  return (
    <article
      className={`product-card${compact ? " product-card-compact" : ""}`}
      id={compact ? undefined : product.slug}
    >
      {compact ? (
        <Link
          className="product-card-link"
          href={`/products#${product.slug}`}
          aria-label={`View ${product.name} specifications`}
        >
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </article>
  );
}

import Link from "next/link";

export type Crumb = {
  name: string;
  /** Omitted on the current page, which is rendered as plain text. */
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.name}>
            {item.href ? (
              <Link href={item.href}>{item.name}</Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
            {index < items.length - 1 ? (
              <span className="breadcrumb-sep" aria-hidden="true">
                ›
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

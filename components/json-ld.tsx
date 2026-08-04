/**
 * Renders a JSON-LD document. `</` is escaped so a stray sequence inside the
 * content can never close the script element early.
 */
export function JsonLd({ data, id }: { data: unknown; id: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/**
 * Renders JSON-LD into the initial server-rendered HTML.
 *
 * A plain <script> tag is used rather than next/script so the markup is present
 * in the raw HTML response, which is what schema validators and non-rendering
 * crawlers read.
 */
interface JsonLdProps {
  id: string
  data: Record<string, unknown> | Record<string, unknown>[]
}

const JsonLd = ({ id, data }: JsonLdProps) => (
  <script
    id={id}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)

export default JsonLd

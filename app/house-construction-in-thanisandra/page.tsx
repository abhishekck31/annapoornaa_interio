import { notFound } from "next/navigation"

import NewLandingPageTemplate from "@/components/seo/new-landing-page"
import { getNewPage, newPageMetadata } from "@/lib/seo/new-pages"

const slug = "house-construction-in-thanisandra"

export const generateMetadata = () => newPageMetadata(slug)

export default function Page() {
  const page = getNewPage(slug)
  if (!page) notFound()
  return <NewLandingPageTemplate page={page} />
}

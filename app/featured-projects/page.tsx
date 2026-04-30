import { Metadata } from 'next'
import FeaturedProjectsClient from './FeaturedProjectsClient'

export const metadata: Metadata = {
  title: 'Featured Projects | Interior Design Portfolio - ACIPL',
  description: 'Explore our featured interior design projects in Bangalore. Residential, commercial, construction work with client testimonials.',
}

export default function FeaturedProjectsPage() {
  return <FeaturedProjectsClient />
}

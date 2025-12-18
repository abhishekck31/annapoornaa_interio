import { Metadata } from 'next';

const LOCALITY = 'Hebbal';
const CITY = 'Bangalore';
const COMPANY = 'Annapoorna Interio';

export const metadata: Metadata = {
  title: `${COMPANY} | Interior Designers in ${LOCALITY}, ${CITY}`,
  description: `Looking for the best interior designers in ${LOCALITY}, ${CITY}? ${COMPANY} offers bespoke residential and commercial interior design and construction services across all of Bangalore.`,
  alternates: {
    canonical: `https://www.annapoornaainterio.com/bangalore/hebbal`,
  },
}

export default function HebbalPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Interior Designers in {LOCALITY}, {CITY}</h1>
      <p className="mb-4">
        {COMPANY} is a leading interior design and construction company serving {LOCALITY} and all of Bangalore. We specialize in residential, commercial, and turnkey projects, delivering beautiful and functional spaces tailored to your needs.
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Modular kitchens, wardrobes, and storage solutions</li>
        <li>Office and retail interiors</li>
        <li>Renovation and remodeling</li>
        <li>End-to-end project management</li>
      </ul>
      <p>
        Contact us for a free consultation and let us transform your space in {LOCALITY} or anywhere in Bangalore!
      </p>
    </main>
  );
}

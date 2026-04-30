import SEO from '@/components/SEO';

const LOCALITY = 'Hebbal';
const CITY = 'Bangalore';
const COMPANY = 'Annapoorneshwari Constructions Interiors Private Limited';

export default function HebbalPage() {
  return (
    <>
      <SEO
        title={`${COMPANY} | Interior Designers in ${LOCALITY}, ${CITY}`}
        description={`Looking for the best interior designers in ${LOCALITY}, ${CITY}? ${COMPANY} offers bespoke residential and commercial interior design and construction services across all of Bangalore.`}
        url={`https://www.ac-ipl.in/bangalore/hebbal`}
        image="/og-image.jpg"
      />
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
    </>
  );
}

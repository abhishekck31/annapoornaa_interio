import SEO from '@/components/SEO';

export default function InterioPage() {
  return (
    <>
      <SEO
        title="Annapoorna Interio | Interior Design Services in Bangalore"
        description="Discover Annapoorna Interio's bespoke interior design and construction services in Bangalore. Residential, commercial, and turnkey solutions for every space. Contact us for a free consultation!"
        url="https://www.ac-ipl.in/interio"
        image="/og-image.jpg"
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Annapoorna Interio</h1>
        <p className="mb-4">
          Welcome to Annapoorna Interio! We offer top-notch interior design and construction services across Bangalore, specializing in residential, commercial, and turnkey projects. Our expert team transforms your vision into reality with innovative designs and quality execution.
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Home and office interiors</li>
          <li>Modular kitchens and wardrobes</li>
          <li>Renovation and remodeling</li>
          <li>End-to-end project management</li>
        </ul>
        <p>
          Contact us today for a free consultation and let us create your dream space in Bangalore!
        </p>
      </main>
    </>
  );
}

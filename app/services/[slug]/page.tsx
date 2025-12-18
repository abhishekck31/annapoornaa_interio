import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { services } from "@/data/services-data";
import { Card, CardContent } from "@/components/ui/card";
import { CollapsibleSection } from "@/components/collapsible-section";
import Image from "next/image";
import {
    Home,
    Briefcase,
    Building,
    Paintbrush,
    ClipboardList,
    PencilRuler,
    Hammer,
    PaintBucket,
    ChevronRight,
    Sparkles
} from "lucide-react";
import Link from 'next/link';

// Icon mapping component
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
    const icons: Record<string, React.ReactNode> = {
        home: <Home className={className} />,
        briefcase: <Briefcase className={className} />,
        building: <Building className={className} />,
        brush: <Paintbrush className={className} />, // fallback brush
        paint: <PaintBucket className={className} />,
        "clipboard-list": <ClipboardList className={className} />,
        "pencil-ruler": <PencilRuler className={className} />,
        hammer: <Hammer className={className} />,
    };
    return icons[name] || <Sparkles className={className} />;
};

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.seoTitle,
        description: service.seoDescription,
        keywords: service.keywords,
        alternates: {
            canonical: `https://annapoornaainterio.com/services/${service.slug}`,
        },
        openGraph: {
            title: service.seoTitle,
            description: service.seoDescription,
            url: `https://annapoornaainterio.com/services/${service.slug}`,
            images: [
                {
                    url: service.image,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-navy-900 border-b border-navy-800">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-navy-900/80"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/20 backdrop-blur-sm">
                            <IconComponent name={service.iconName} className="h-16 w-16 text-gold-500" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-gold-500 font-medium mb-4">
                                <Link href="/services" className="hover:text-gold-400">Services</Link>
                                <ChevronRight className="h-4 w-4" />
                                <span>{service.title}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column: Image and Features */}
                        <div className="space-y-12">
                            <Card className="overflow-hidden shadow-2xl rounded-2xl border-none">
                                <CardContent className="p-0 relative aspect-[4/3]">
                                    <Image
                                        src={service.image}
                                        alt={`${service.title} - Annapoornaa Interio`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </CardContent>
                            </Card>

                            <div>
                                <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
                                    <Sparkles className="h-6 w-6 text-gold-500" />
                                    Key Features
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gold-300 transition-colors">
                                            <div className="h-6 w-6 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <div className="h-2 w-2 rounded-full bg-gold-500"></div>
                                            </div>
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Detailed Sections */}
                        <div className="space-y-10">
                            {service.pmcSections ? (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-navy-900 mb-2">Process & Management</h3>
                                    <div className="space-y-4">
                                        {service.pmcSections.map((section, idx) => (
                                            <CollapsibleSection
                                                key={idx}
                                                title={section.title}
                                                emoji={section.emoji}
                                                items={section.items}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {service.designSections?.map((section, idx) => (
                                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                            <div className="flex items-center gap-4 mb-8">
                                                <span className="text-4xl">{section.emoji}</span>
                                                <h3 className="text-2xl font-bold text-navy-900">{section.title}</h3>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                                {section.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex items-center gap-3">
                                                        <span className="text-gold-500 flex-shrink-0">•</span>
                                                        <span className="text-navy-900">{item}</span>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* CTA Section */}
                            <Card className="bg-navy-900 text-white overflow-hidden rounded-2xl border-none">
                                <CardContent className="p-8 relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500 opacity-10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                    <h3 className="text-2xl font-bold mb-4">Interested in {service.title}?</h3>
                                    <p className="text-gray-400 mb-8">
                                        Let's discuss how we can bring your vision to life. Our experts are ready to assist you.
                                    </p>
                                    <Link href="/contact">
                                        <button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-gold-500/20 active:scale-[0.98]">
                                            Get a Free Quote
                                        </button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

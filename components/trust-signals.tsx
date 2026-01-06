import { ShieldCheck, Award, Briefcase, Users, CheckCircle2, Globe } from "lucide-react";
import ScrollAnimation from "./scroll-animation";

const TrustSignals = () => {
    const stats = [
        {
            icon: <Award className="h-8 w-8 text-gold-500" />,
            label: "15+ Years Legacy",
            description: "Established excellence in Bangalore since 2009."
        },
        {
            icon: <Briefcase className="h-8 w-8 text-gold-500" />,
            label: "500+ Projects",
            description: "Successfully delivered residential & commercial spaces."
        },
        {
            icon: <Globe className="h-8 w-8 text-gold-500" />,
            label: "Singapore Standards",
            description: "Working with global giants like SMEC India."
        },
        {
            icon: <ShieldCheck className="h-8 w-8 text-gold-500" />,
            label: "Fully Compliant",
            description: "RERA Registered, IIA & BIS Standard adherence."
        }
    ];

    return (
        <section className="py-16 bg-navy-950 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollAnimation>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            A Legacy of <span className="text-gold-500">Trust & Technical Excellence</span>
                        </h2>
                        <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <ScrollAnimation key={index}>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gold-400">{stat.label}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-gold-500" />
                        <span className="font-bold tracking-widest text-xs uppercase text-gray-300">RERA Registered</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-gold-500" />
                        <span className="font-bold tracking-widest text-xs uppercase text-gray-300">IIA Member</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-gold-500" />
                        <span className="font-bold tracking-widest text-xs uppercase text-gray-300">BIS Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-gold-500" />
                        <span className="font-bold tracking-widest text-xs uppercase text-gray-300">A-Class Contractor</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;

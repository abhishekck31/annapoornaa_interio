import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { blogPosts } from "@/data/blog-data";
import { Calendar, User, Clock, ArrowLeft, ChevronRight, Share2 } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.seoTitle,
        description: post.seoDescription,
        keywords: post.keywords,
        alternates: {
            canonical: `https://annapoornaainterio.com/blog/${post.slug}`,
        },
        openGraph: {
            title: post.seoTitle,
            description: post.seoDescription,
            url: `https://annapoornaainterio.com/blog/${post.slug}`,
            type: 'article',
            publishedTime: new Date(post.date).toISOString(),
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": `https://annapoornaainterio.com${post.image}`,
        "author": {
            "@type": "Organization",
            "name": "Annapoornaa Interio"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Annapoornaa Interio",
            "logo": {
                "@type": "ImageObject",
                "url": "https://annapoornaainterio.com/favicon-for-app/logo-with-name.png"
            }
        },
        "datePublished": new Date(post.date).toISOString().split('T')[0],
        "dateModified": new Date(post.date).toISOString().split('T')[0],
        "description": post.excerpt
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Navbar />

            {/* Spacer for fixed navbar */}
            <div className="h-24"></div>

            <article className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-gold-600">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/blog" className="hover:text-gold-600">Blog</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-navy-900 font-medium truncate">{post.title}</span>
                    </nav>

                    <Link href="/blog" className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-6 font-medium group">
                        <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to Blog
                    </Link>

                    <header className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-gray-600 border-y border-gray-200 py-4">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Calendar className="h-4 w-4 text-gold-600" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <User className="h-4 w-4 text-gold-600" />
                                By Annapoornaa Interio
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Clock className="h-4 w-4 text-gold-600" />
                                5 min read
                            </div>
                        </div>
                    </header>



                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                        <div
                            className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-navy-900">Share this post:</span>
                                <div className="flex gap-2">
                                    <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                                        <Share2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <Link href="/contact">
                                <button className="bg-navy-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gold-500 transition-all shadow-lg hover:shadow-gold-500/20 active:scale-95">
                                    Book a Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

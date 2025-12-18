export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  content: string; // HTML or Markdown content
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'top-10-interior-design-trends-bangalore-2025',
    title: 'Top 10 Interior Design Trends in Bangalore for 2025',
    excerpt: 'Discover the latest interior design trends taking Bangalore by storm. From sustainable materials to smart home integration.',
    date: 'January 15, 2025',
    category: 'Trends',
    image: '/BlogImages/top10trends.png',
    seoTitle: 'Top 10 Interior Design Trends in Bangalore 2025 | Annapoornaa Interio',
    seoDescription: 'Discover the top interior design trends transforming Bangalore homes in 2025. From sustainable materials to smart home technology, stay ahead with expert insights.',
    keywords: 'interior design trends Bangalore, home decor 2025, sustainable interiors, smart home design, Bangalore interior trends',
    content: `
      <p class="text-xl text-gray-700 mb-6">
        Bangalore's interior design landscape is evolving rapidly. As we move into 2025, homeowners are embracing innovative design concepts that blend aesthetics with functionality. Here are the top 10 trends shaping interior design in Bangalore.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">1. Sustainable and Eco-Friendly Materials</h2>
      <p class="text-gray-700 mb-4">
        Bangaloreans are increasingly conscious about environmental impact. Sustainable materials like bamboo, reclaimed wood, and recycled metals are becoming popular choices for both residential and commercial projects.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Smart Home Integration</h2>
      <p class="text-gray-700 mb-4">
        With Bangalore being India's tech capital, smart home technology is no longer a luxury but an expectation. From automated lighting to smart climate control, technology integration is a key trend.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Biophilic Design</h2>
      <p class="text-gray-700 mb-4">
        Bringing nature indoors through indoor plants, natural light, and organic materials is trending. This design philosophy improves air quality and creates a calming atmosphere.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">4. Multifunctional Spaces</h2>
      <p class="text-gray-700 mb-4">
        With many Bangaloreans working from home, spaces that serve multiple purposes are in high demand. Home offices that convert to guest rooms or dining areas that double as workspaces are increasingly common.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">5. Bold Color Palettes</h2>
      <p class="text-gray-700 mb-4">
        While neutral tones remain popular, there's a growing trend toward bold, vibrant colors. Deep blues, emerald greens, and terracotta are making statements in Bangalore homes.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">6. Minimalist Aesthetics</h2>
      <p class="text-gray-700 mb-4">
        The "less is more" philosophy continues to influence Bangalore's interior design scene. Clean lines, clutter-free spaces, and functional furniture define this trend.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">7. Local Artisan Crafts</h2>
      <p class="text-gray-700 mb-4">
        Supporting local artisans and incorporating handcrafted elements adds unique character to interiors while promoting traditional crafts.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">8. Modular Furniture</h2>
      <p class="text-gray-700 mb-4">
        Flexible, space-saving modular furniture is perfect for Bangalore's urban apartments. These pieces adapt to changing needs and lifestyles.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">9. Statement Lighting</h2>
      <p class="text-gray-700 mb-4">
        Lighting is no longer just functional—it's a design statement. Unique chandeliers, pendant lights, and LED installations create ambiance and focal points.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">10. Wellness-Focused Design</h2>
      <p class="text-gray-700 mb-4">
        Post-pandemic, there's increased focus on creating spaces that promote physical and mental well-being. This includes dedicated meditation corners, home gyms, and air-purifying elements.
      </p>
    `
  },
  {
    slug: 'modular-kitchen-design-guide-bangalore',
    title: 'Complete Guide to Modular Kitchen Design in Bangalore',
    excerpt: 'Everything you need to know about designing the perfect modular kitchen for your Bangalore home.',
    date: 'February 1, 2025',
    category: 'Kitchen Design',
    image: '/BlogImages/modularkitchen.png',
    seoTitle: 'Complete Modular Kitchen Design Guide Bangalore | Annapoornaa Interio',
    seoDescription: 'Discover the ultimate guide to modular kitchen design in Bangalore. Learn about layouts, materials, and latest trends to create your dream kitchen.',
    keywords: 'modular kitchen Bangalore, kitchen design guide, modular kitchen layout, kitchen renovation Bangalore',
    content: `
      <p class="text-xl text-gray-700 mb-6">
        The kitchen is the heart of any home, and in Bangalore's modern apartments, a modular kitchen is a must-have. Here's our comprehensive guide to designing a kitchen that's both beautiful and efficient.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">1. Understanding Your Layout</h2>
      <p class="text-gray-700 mb-4">
        Whether it's an L-shaped, U-shaped, parallel, or straight kitchen, the layout should flow perfectly with your cooking habits. We analyze your space to recommend the best fit.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Material Selection</h2>
      <p class="text-gray-700 mb-4">
        From BWP (Boiling Water Proof) plywood to high-quality laminates and acrylic finishes, the choice of material determines the longevity of your kitchen.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Clever Storage Solutions</h2>
      <p class="text-gray-700 mb-4">
        Maximize every inch with pull-out drawers, corner units, and tall units. Modern hardware ensures smooth operation and maximum accessibility.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">4. Countertop Choices</h2>
      <p class="text-gray-700 mb-4">
        Granite remains a classic choice for Bangalore homes, while quartz and solid surfaces offer a more modern, seamless look.
      </p>
    `
  },
  {
    slug: 'office-interior-design-productivity',
    title: 'How Office Interior Design Impacts Productivity',
    excerpt: 'Learn how thoughtful office interior design can boost employee productivity and create a positive work environment.',
    date: 'February 15, 2025',
    category: 'Commercial',
    image: '/BlogImages/officeinteriors.png',
    seoTitle: 'Office Design & Productivity Guide | Annapoornaa Interio Bangalore',
    seoDescription: 'Learn how professional office interior design can increase employee productivity and brand value in Bangalore. Expert tips for workspace optimization.',
    keywords: 'office interior design Bangalore, productive workspace, commercial interior design, office renovation',
    content: `
      <p class="text-xl text-gray-700 mb-6">
        In today's competitive landscape, the design of your office space plays a crucial role in employee satisfaction and overall business performance.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">1. The Power of Ergonomics</h2>
      <p class="text-gray-700 mb-4">
        Investing in ergonomic furniture reduces physical strain and keeps your team focused. Comfortable employees are productive employees.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Balancing Open and Private Spaces</h2>
      <p class="text-gray-700 mb-4">
        While open layouts foster collaboration, employees also need quiet zones for deep work. A hybrid design often yields the best results.
      </p>

      <h2 class="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Lighting and Ventilation</h2>
      <p class="text-gray-700 mb-4">
        Natural light and good air quality are essential for mental clarity and energy levels. We optimize layouts to make the most of your building's natural features.
      </p>
    `
  }
];

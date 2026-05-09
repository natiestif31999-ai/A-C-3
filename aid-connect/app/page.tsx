// This is the home page component for AID-CONNECT website
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

// Mock data for the home page
const stats = [
  { number: "10,000+", description: "People Helped" },
  { number: "50+", description: "Active Volunteers" },
  { number: "25+", description: "Communities Served" },
  { number: "5", description: "Years of Service" },
];

const featuredPrograms = [
  {
    title: "Disability Support",
    description: "Providing assistive devices, rehabilitation services, and inclusive education for people with disabilities.",
    imageUrl: "Disability Support Image",
    learnMoreLink: "/programs",
  },
  {
    title: "Child Education",
    description: "Ensuring access to quality education for children in vulnerable communities through schools and scholarships.",
    imageUrl: "Child Education Image",
    learnMoreLink: "/programs",
  },
  {
    title: "Healthcare Outreach",
    description: "Delivering medical care, vaccinations, and health education to remote areas in Ethiopia.",
    imageUrl: "Healthcare Outreach Image",
    learnMoreLink: "/programs",
  },
];

const testimonials = [
  {
    quote: "AID-CONNECT has transformed our community. Their disability support program gave my son the tools he needed to succeed.",
    author: "Sarah Johnson",
    role: "Parent, Addis Ababa",
  },
  {
    quote: "The education program helped me complete my studies and now I'm giving back as a volunteer teacher.",
    author: "Ahmed Hassan",
    role: "Graduate Student",
  },
  {
    quote: "During the emergency relief, AID-CONNECT was there when we needed them most. Their support saved lives.",
    author: "Community Leader",
    role: "Rural Ethiopia",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="AID-CONNECT"
        subtitle="Supporting vulnerable communities in Ethiopia through disability support, education, healthcare, and emergency aid."
        ctaText="Get Involved"
        ctaLink="/volunteer"
      />

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Mission"
            subtitle="To create sustainable positive change in Ethiopian communities by addressing the most pressing humanitarian needs."
          />
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              AID-CONNECT is dedicated to supporting vulnerable communities in Ethiopia. We focus on disability support,
              child education, healthcare outreach, food assistance, and emergency relief. Through collaboration with
              local partners and international donors, we strive to build resilient communities that can thrive independently.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Impact" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} description={stat.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Programs"
            subtitle="Explore our key initiatives making a difference in Ethiopian communities."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                imageUrl={program.imageUrl}
                learnMoreLink={program.learnMoreLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What People Say"
            subtitle="Hear from the communities and individuals we've helped."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="Join Our Mission"
        description="Your support can make a real difference. Whether through donations, volunteering, or spreading awareness, every action counts."
        buttonText="Make a Donation"
        buttonLink="/donate"
      />
    </div>
  );
}

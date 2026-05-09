// This is the about page component for AID-CONNECT website
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";

// Mock data for the about page
const teamMembers = [
  {
    name: "Dr. Amina Hassan",
    role: "Executive Director",
    bio: "With over 15 years in humanitarian work, Dr. Hassan leads our disability support initiatives.",
  },
  {
    name: "Michael Thompson",
    role: "Program Manager",
    bio: "Michael oversees our education and healthcare outreach programs across Ethiopia.",
  },
  {
    name: "Fatima Ali",
    role: "Community Outreach Coordinator",
    bio: "Fatima works directly with local communities to ensure our programs meet real needs.",
  },
];

const testimonials = [
  {
    quote: "AID-CONNECT's commitment to inclusive development has inspired similar initiatives across the region.",
    author: "UNICEF Representative",
    role: "International Partner",
  },
  {
    quote: "Their emergency response during the recent crisis was exemplary. Lives were saved because of their quick action.",
    author: "Red Cross Coordinator",
    role: "Partner Organization",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About AID-CONNECT"
        subtitle="Learn about our organization, mission, and the dedicated team working to support Ethiopian communities."
        ctaText="Join Our Team"
        ctaLink="/volunteer"
      />

      {/* Organization Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Story"
            subtitle="How AID-CONNECT began and grew to serve communities across Ethiopia."
          />
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 2019, AID-CONNECT emerged from a simple observation: vulnerable communities in Ethiopia
              needed more than short-term aid—they needed sustainable support systems. Our founders, a group of
              Ethiopian professionals and international humanitarian workers, recognized that disability support,
              education, and healthcare were interconnected challenges requiring comprehensive solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Starting with a small team of volunteers in Addis Ababa, we've grown to serve over 25 communities
              across Ethiopia. Our approach combines local knowledge with international best practices, ensuring
              that every program is culturally appropriate and sustainable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, AID-CONNECT coordinates with local governments, international NGOs, and community leaders
              to deliver comprehensive humanitarian services. Our work focuses on building resilient communities
              that can continue to thrive long after our direct involvement ends.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Vision & Mission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A Ethiopia where every vulnerable community has access to essential services, education,
                healthcare, and opportunities for sustainable development. We envision inclusive communities
                where people with disabilities are fully integrated, children receive quality education,
                and families have access to healthcare and food security.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive humanitarian support to vulnerable communities in Ethiopia through
                disability assistance, educational programs, healthcare outreach, food distribution, and
                emergency relief. We work collaboratively with local partners to create sustainable solutions
                that empower communities to build their own future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Core Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working together with communities, partners, and stakeholders to achieve sustainable change.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-gray-600">
                Every person deserves dignity and respect. We approach our work with empathy and understanding.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We focus on long-term solutions that empower communities to become self-sufficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Team"
            subtitle="Meet the dedicated professionals leading our humanitarian efforts."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Partnerships & Recognition"
            subtitle="We're proud to work with leading organizations in humanitarian aid."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </div>
  );
}
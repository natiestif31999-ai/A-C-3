// This is the programs page component for AID-CONNECT website
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ProgramCard from "@/components/ProgramCard";

// Mock data for programs
const programs = [
  {
    title: "Disability Support",
    description: "We provide comprehensive support for people with disabilities, including assistive devices, rehabilitation services, inclusive education, and vocational training. Our program focuses on removing barriers and creating opportunities for full participation in community life.",
    imageUrl: "Disability Support Program",
    learnMoreLink: "#",
  },
  {
    title: "Child Education",
    description: "Ensuring every child has access to quality education through school construction, teacher training, scholarship programs, and learning materials. We work with local communities to establish sustainable education systems that prepare children for the future.",
    imageUrl: "Child Education Program",
    learnMoreLink: "#",
  },
  {
    title: "Food Assistance",
    description: "Addressing food insecurity through emergency food distribution, nutritional support programs, and sustainable agriculture initiatives. We partner with local farmers to create long-term food security solutions.",
    imageUrl: "Food Assistance Program",
    learnMoreLink: "#",
  },
  {
    title: "Healthcare Outreach",
    description: "Delivering medical care to remote communities through mobile clinics, vaccination campaigns, maternal health programs, and health education. Our healthcare initiatives focus on prevention and early intervention.",
    imageUrl: "Healthcare Outreach Program",
    learnMoreLink: "#",
  },
  {
    title: "Emergency Relief",
    description: "Rapid response to natural disasters, conflicts, and humanitarian crises. Our emergency relief program provides immediate aid including shelter, water, sanitation, and medical supplies to affected communities.",
    imageUrl: "Emergency Relief Program",
    learnMoreLink: "#",
  },
];

export default function Programs() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Programs"
        subtitle="Discover the comprehensive humanitarian programs we offer to support vulnerable communities in Ethiopia."
        ctaText="Get Involved"
        ctaLink="/volunteer"
      />

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Comprehensive Support Programs"
            subtitle="Each program is designed to address specific needs while contributing to overall community development."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
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

      {/* Program Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Program Impact"
            subtitle="See how our programs create lasting change in communities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Disability Inclusion Initiative</h3>
              <p className="text-gray-700 mb-4">
                Our disability support program has provided assistive devices to over 2,000 individuals,
                enabling them to participate fully in education and employment opportunities.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Wheelchair distribution and maintenance</li>
                <li>Hearing aid programs</li>
                <li>Inclusive education workshops</li>
                <li>Vocational training centers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education for All</h3>
              <p className="text-gray-700 mb-4">
                We've established 15 new schools and provided scholarships to 500 children,
                improving literacy rates in target communities by 40%.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>School construction and renovation</li>
                <li>Teacher training programs</li>
                <li>Learning materials distribution</li>
                <li>Scholarship fund for vulnerable students</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Our Programs
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your donation directly supports these life-changing programs. Every contribution makes a difference.
          </p>
          <a
            href="/donate"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Make a Donation
          </a>
        </div>
      </section>
    </div>
  );
}
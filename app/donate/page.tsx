// This is the donate page component for AID-CONNECT website
"use client";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { useState } from 'react';

// Mock donation amounts
const donationAmounts = [25, 50, 100, 250, 500, 1000];

export default function Donate() {
  // State for form inputs (using React state for demo purposes)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a payment processor
    alert('Thank you for your donation! This is a demo - no real transaction occurred.');
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Make a Donation"
        subtitle="Your generosity helps us support vulnerable communities in Ethiopia. Every contribution makes a real difference."
        ctaText="Donate Now"
        ctaLink="#donation-form"
      />

      {/* Donation Form */}
      <section id="donation-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Support Our Mission"
            subtitle="Choose your donation amount and help us continue our humanitarian work."
          />

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Donation Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Donation Amount (USD)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-4 border rounded-md text-center font-medium transition-colors ${
                        selectedAmount === amount
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div>
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter custom amount
                  </label>
                  <input
                    type="number"
                    id="custom-amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                  />
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Share why you're donating or any specific program you'd like to support..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedAmount && !customAmount}
                >
                  Complete Donation
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  This is a demo form. No real payment will be processed.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Impact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Your Impact"
            subtitle="See how your donation helps communities in Ethiopia."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">$25</div>
              <h3 className="text-xl font-semibold mb-3">Provides School Supplies</h3>
              <p className="text-gray-600">
                One month&apos;s worth of educational materials for a child in need.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">$100</div>
              <h3 className="text-xl font-semibold mb-3">Medical Consultation</h3>
              <p className="text-gray-600">
                Covers healthcare outreach visits for an entire family.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">$500</div>
              <h3 className="text-xl font-semibold mb-3">Emergency Relief Kit</h3>
              <p className="text-gray-600">
                Supplies food, water, and medical aid for a family during crisis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Message */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Thank You for Your Support
          </h2>
          <p className="text-xl leading-relaxed">
            Your donation helps us maintain our commitment to transparency, accountability, and impact.
            100% of donations go directly to our programs in Ethiopia. We regularly publish impact reports
            and financial statements to ensure your trust is well-placed.
          </p>
        </div>
      </section>
    </div>
  );
}
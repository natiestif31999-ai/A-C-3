// This is the contact page component for AID-CONNECT website
"use client";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { useState } from 'react';

export default function Contact() {
  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email or submit to backend
    alert('Thank you for your message! This is a demo - your message was not actually sent.');
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with AID-CONNECT. We're here to answer your questions and hear your feedback."
        ctaText="Send Message"
        ctaLink="#contact-form"
      />

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Get In Touch"
            subtitle="Multiple ways to reach our team and support communities in Ethiopia."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us an email and we&apos;ll respond within 24 hours.
              </p>
              <p className="font-medium text-blue-600">info@aid-connect.org</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team for urgent matters.
              </p>
              <p className="font-medium text-blue-600">+251 911 123 456</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Our main office is located in Addis Ababa, Ethiopia.
              </p>
              <p className="font-medium text-blue-600">123 Bole Road, Addis Ababa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Send Us a Message"
            subtitle="Have a question or want to learn more about our work? We'd love to hear from you."
          />

          <div className="bg-gray-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="donation">Donation Questions</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  This is a demo form. Your message will not be actually sent.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Find Us"
            subtitle="Our office location in Addis Ababa, Ethiopia."
          />
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold mb-2">Interactive Map Placeholder</h3>
                <p className="text-gray-600">
                  123 Bole Road, Addis Ababa, Ethiopia<br />
                  In a real application, this would be an embedded Google Maps or similar service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about AID-CONNECT."
          />
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">How can I donate to your programs?</h3>
              <p className="text-gray-600">
                You can make a donation through our secure online form on the Donate page. We accept various payment methods and ensure 100% of donations go directly to our programs.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">How do I become a volunteer?</h3>
              <p className="text-gray-600">
                Visit our Volunteer page to fill out an application form. We&apos;ll review your application and contact you about available opportunities that match your skills and availability.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">Where does my donation money go?</h3>
              <p className="text-gray-600">
                Your donations directly support our programs in Ethiopia. We maintain full transparency with regular financial reports and impact updates available on our website.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I visit your projects in Ethiopia?</h3>
              <p className="text-gray-600">
                We welcome visitors interested in learning about our work. Please contact us in advance to arrange a visit and ensure we can accommodate your schedule safely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
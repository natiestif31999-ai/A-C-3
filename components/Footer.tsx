// This component renders the footer with contact information and links
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">AID-CONNECT</h3>
            <p className="text-gray-300 mb-4">
              Supporting vulnerable communities in Ethiopia through disability support,
              education, healthcare, and emergency aid.
            </p>
            <div className="space-y-2">
              <p className="text-sm">📧 info@aid-connect.org</p>
              <p className="text-sm">📞 +251 911 123 456</p>
              <p className="text-sm">📍 Addis Ababa, Ethiopia</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Programs</Link></li>
              <li><Link href="/donate" className="text-gray-300 hover:text-white">Donate</Link></li>
              <li><Link href="/volunteer" className="text-gray-300 hover:text-white">Volunteer</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Disability Support</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Child Education</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Food Assistance</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Healthcare Outreach</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Emergency Relief</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 AID-CONNECT. All rights reserved. | Made with ❤️ for humanitarian causes.
          </p>
        </div>
      </div>
    </footer>
  );
}
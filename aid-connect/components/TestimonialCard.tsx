// This component displays a testimonial card with quote, author, and role
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-gray-600 mb-4 text-lg italic">
        "{quote}"
      </div>
      <div className="font-semibold text-gray-900">
        {author}
      </div>
      <div className="text-gray-500 text-sm">
        {role}
      </div>
    </div>
  );
}
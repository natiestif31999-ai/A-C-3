// This component displays a program card with image, title, description, and learn more button
interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  learnMoreLink: string;
}

export default function ProgramCard({ title, description, imageUrl, learnMoreLink }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {/* Placeholder for image */}
        <div className="text-gray-400 text-center">
          <div className="text-4xl mb-2">📷</div>
          <p>{imageUrl}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <a
          href={learnMoreLink}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
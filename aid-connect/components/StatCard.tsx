// This component displays a statistics card with number and description
interface StatCardProps {
  number: string;
  description: string;
}

export default function StatCard({ number, description }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
        {number}
      </div>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
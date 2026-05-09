// This is the admin dashboard demo page component for AID-CONNECT website
import SectionTitle from "@/components/SectionTitle";

// Mock data for the admin dashboard
const dashboardStats = [
  { label: "Total Donations", value: "$125,430", change: "+12%", icon: "💰" },
  { label: "Active Volunteers", value: "47", change: "+5", icon: "👥" },
  { label: "Programs Running", value: "8", change: "+2", icon: "📋" },
  { label: "Communities Served", value: "23", change: "+3", icon: "🏘️" },
];

const recentActivities = [
  { action: "New donation received", amount: "$250", donor: "Anonymous", time: "2 hours ago" },
  { action: "Volunteer joined", program: "Education Outreach", name: "Sarah M.", time: "4 hours ago" },
  { action: "Program completed", program: "Medical Clinic", location: "Gondar", time: "1 day ago" },
  { action: "Emergency relief distributed", items: "Food packages", beneficiaries: "150 families", time: "2 days ago" },
  { action: "New partnership formed", partner: "Local NGO", focus: "Disability Support", time: "3 days ago" },
];

const activePrograms = [
  { name: "Disability Support Addis Ababa", status: "Active", progress: 75, volunteers: 12 },
  { name: "Child Education Program", status: "Active", progress: 60, volunteers: 8 },
  { name: "Healthcare Outreach North", status: "Planning", progress: 20, volunteers: 5 },
  { name: "Emergency Relief Response", status: "Active", progress: 90, volunteers: 15 },
];

export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">AID-CONNECT Admin Dashboard</h1>
            <div className="text-sm text-gray-500">Demo Version - Not Connected to Real Data</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <section className="mb-8">
          <SectionTitle title="Dashboard Overview" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change} from last month</p>
                  </div>
                  <div className="text-3xl">{stat.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activities */}
        <section className="mb-8">
          <SectionTitle title="Recent Activities" />
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Latest Updates</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {recentActivities.map((activity, index) => (
                <div key={index} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">
                        {activity.amount && `Amount: ${activity.amount}`}
                        {activity.donor && ` from ${activity.donor}`}
                        {activity.program && ` - ${activity.program}`}
                        {activity.location && ` in ${activity.location}`}
                        {activity.items && ` - ${activity.items}`}
                        {activity.beneficiaries && ` to ${activity.beneficiaries}`}
                        {activity.partner && ` with ${activity.partner}`}
                        {activity.focus && ` (${activity.focus})`}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Programs */}
        <section className="mb-8">
          <SectionTitle title="Active Programs" />
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Program Status Overview</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {activePrograms.map((program, index) => (
                <div key={index} className="px-6 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{program.name}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      program.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Progress: {program.progress}%</span>
                    <span>Volunteers: {program.volunteers}</span>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${program.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <SectionTitle title="Quick Actions" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-blue-600 text-white p-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors text-left">
              <h3 className="text-lg font-semibold mb-2">Add New Program</h3>
              <p className="text-sm opacity-90">Create and launch a new humanitarian program</p>
            </button>
            <button className="bg-green-600 text-white p-6 rounded-lg shadow-md hover:bg-green-700 transition-colors text-left">
              <h3 className="text-lg font-semibold mb-2">Manage Volunteers</h3>
              <p className="text-sm opacity-90">Review applications and assign volunteers</p>
            </button>
            <button className="bg-purple-600 text-white p-6 rounded-lg shadow-md hover:bg-purple-700 transition-colors text-left">
              <h3 className="text-lg font-semibold mb-2">Generate Report</h3>
              <p className="text-sm opacity-90">Create impact and financial reports</p>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
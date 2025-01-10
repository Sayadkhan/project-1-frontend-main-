export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="bg-blue-100 p-3 rounded-full">
          <Icon className="text-blue-600 text-xl" />
        </div>
      </div>
    </div>
  );
}

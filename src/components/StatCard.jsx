export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <div className="mb-4 sm:mb-0">
        <p className="text-gray-500 text-xs sm:text-sm">{title}</p>
        <h3 className="text-lg sm:text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className="bg-blue-100 p-2 sm:p-3 rounded-full flex items-center justify-center">
        <Icon className="text-blue-600 text-lg sm:text-xl" />
      </div>
    </div>
  );
}

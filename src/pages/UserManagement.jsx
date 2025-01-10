import { useEffect, useState, useMemo } from "react";
import axiosInstance from "../api/axios";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/admin/users");
      setUsers(response.data.users);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("Failed to fetch users. Please try again.");
      console.error(
        "Error fetching users:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Remove user
  const handleRemove = async (id) => {
    try {
      await axiosInstance.delete(`/admin/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError("Failed to remove user. Please try again.");
      console.error(
        "Error removing user:",
        error.response?.data || error.message
      );
    }
  };

  // Memoized filtered users
  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.role === "user");
  }, [users]);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      {isLoading ? (
        <div className="text-center text-gray-500">Loading users...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Serial Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company Domain
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.companyName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.registrantEmail}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.companyDomain}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleRemove(user.id)}
                        className="text-red-600 hover:text-red-900 font-medium"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../api/axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the auth token from Redux
  const { authToken } = useSelector((state) => state.auth);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/admin/users", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setUsers(response.data.users);
      setError(null);
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

  const handleRemove = async (userId) => {
    try {
      console.log("Removing user with ID:", userId);
      await axiosInstance.delete(`/admin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error(
        "Error removing user:",
        error.response?.data || error.message
      );
      setError("Failed to remove user. Please try again.");
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.role === "user");
  }, [users]);

  useEffect(() => {
    if (authToken) {
      fetchUsers();
    }
  }, [authToken]);

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        User Management
      </h2>

      {isLoading ? (
        <div className="text-center text-gray-500">Loading users...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Table for large screens */}
          <table className="hidden sm:table w-full min-w-[800px] divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Serial Number
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company Name
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company Email
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company Domain
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Vendor Status
                </th>
                <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={user._id}>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      {user.companyName}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      {user.registrantEmail}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      {user.companyDomain}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      {user.vendorApplication?.status || "N/A"}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleRemove(user._id)}
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
                    colSpan="6"
                    className="px-4 sm:px-6 py-4 text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Cards for mobile screens */}
          <div className="sm:hidden space-y-4">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <div
                  key={user._id}
                  className="p-4 bg-gray-50 rounded-lg shadow-md"
                >
                  <p className="text-sm font-medium text-gray-700">
                    <span className="font-bold">Serial Number:</span>{" "}
                    {index + 1}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    <span className="font-bold">Company Name:</span>{" "}
                    {user.companyName}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    <span className="font-bold">Company Email:</span>{" "}
                    {user.registrantEmail}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    <span className="font-bold">Company Domain:</span>{" "}
                    {user.companyDomain}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    <span className="font-bold">Vendor Status:</span>{" "}
                    {user.vendorApplication?.status || "N/A"}
                  </p>
                  <button
                    onClick={() => handleRemove(user._id)}
                    className="mt-2 text-red-600 hover:text-red-900 font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No users found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../api/axios";

const AllVendor = () => {
  const [vendors, setVendors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch authToken from Redux
  const { authToken } = useSelector((state) => state.auth);

  // Fetch all vendors
  const fetchAllVendors = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/admin/vendors", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setVendors(response.data.vendors || []);
      setError(null);
    } catch (error) {
      setError("Failed to fetch vendors. Please try again.");
      console.error(
        "Error fetching vendors:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (authToken) {
      fetchAllVendors();
    }
  }, [authToken]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Vendors</h2>
      {isLoading ? (
        <div className="text-center text-gray-500">Loading vendors...</div>
      ) : error ? (
        <div className="text-center text-red-500">
          {error}
          <button
            onClick={fetchAllVendors}
            className="ml-4 text-blue-600 underline"
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company Domain
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vendors.length > 0 ? (
                vendors.map((vendor) => (
                  <tr key={vendor._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {vendor.companyName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {vendor.companyDomain}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {vendor.registrantEmail}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {vendor.isVendor ? "Approved" : "Pending"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No vendors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllVendor;

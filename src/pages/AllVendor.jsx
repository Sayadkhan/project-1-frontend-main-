import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const AllVendor = () => {
  const [vendors, setVendors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all vendors
  const fetchAllVendors = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/admin/vendors");
      setVendors(response.data.vendors);
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
    fetchAllVendors();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Vendors</h2>
      {isLoading ? (
        <div className="text-center text-gray-500">Loading vendors...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Vendor Name
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
                  <tr key={vendor.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {vendor.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {vendor.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {vendor.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
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

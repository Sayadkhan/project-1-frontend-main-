import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../api/axios";

const AllVendor = () => {
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Fetch vendor details by ID
  const fetchVendorDetails = async (vendorId) => {
    try {
      setIsModalOpen(true);
      const response = await axiosInstance.get(`/admin/vendors/${vendorId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setSelectedVendor(response.data.vendor); // Store vendor details in state
    } catch (error) {
      console.error("Error fetching vendor details:", error.message);
      setSelectedVendor(null);
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
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Actions
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
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => fetchVendorDetails(vendor._id)} // Fetch vendor details
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Details
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
                    No vendors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Vendor Details Modal */}
      {isModalOpen && selectedVendor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 className="text-xl font-bold mb-4">Vendor Details</h3>
            <p>
              <strong>Name:</strong> {selectedVendor.companyName}
            </p>
            <p>
              <strong>Email:</strong> {selectedVendor.registrantEmail}
            </p>
            <p>
              <strong>Domain:</strong> {selectedVendor.companyDomain}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {selectedVendor.isVendor ? "Approved" : "Pending"}
            </p>
            <p>
              <strong>Uploaded Documents:</strong>
            </p>
            {selectedVendor.documents && selectedVendor.documents.length > 0 ? (
              <ul className="list-disc ml-6">
                {selectedVendor.documents.map((doc, index) => (
                  <li key={index}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {doc.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No documents uploaded.</p>
            )}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllVendor;

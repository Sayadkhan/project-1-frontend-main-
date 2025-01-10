import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import { IoEyeOutline } from "react-icons/io5";

const PendingVendor = () => {
  const [vendors, setVendors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(selectedVendor);
  console.log(vendors);

  // Fetch pending vendors
  const fetchPendingVendors = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/admin/vendor/applications");
      setVendors(response.data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch pending vendors. Please try again.");
      console.error(
        "Error fetching pending vendors:",
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
      const response = await axiosInstance.get(`/admin/vendors/${vendorId}`);
      setSelectedVendor(response.data.vendor);
    } catch (error) {
      console.error("Error fetching vendor details:", error.message);
      setSelectedVendor(null);
    }
  };

  // Handle approve or reject
  const handleVendorAction = async (vendorId, action) => {
    try {
      const response = await axiosInstance.put(
        `/admin/vendor/applications/${vendorId}`,
        {
          status: action,
          adminComment:
            action === "approved" ? "Vendor approved" : "Vendor rejected",
        }
      );
      alert(`Vendor has been ${action} successfully.`);
      setIsModalOpen(false);
      fetchPendingVendors(); // Refresh the vendor list
    } catch (error) {
      console.error(`Error ${action} vendor:`, error.message);
      alert(`Failed to ${action} vendor. Please try again.`);
    }
  };

  useEffect(() => {
    fetchPendingVendors();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Pending Vendors</h2>
      {isLoading ? (
        <div className="text-center text-gray-500">
          Loading pending vendors...
        </div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company Email
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
                    {" "}
                    {/* Updated to use _id */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {vendor.companyName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {vendor.registrantEmail}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {" "}
                      {vendor.vendorApplication.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => fetchVendorDetails(vendor._id)} // Updated to use _id
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <IoEyeOutline className="text-xl" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No pending vendors found.
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
              <strong>Status:</strong>{" "}
              {selectedVendor.vendorApplication?.status}
            </p>
            <p>
              <strong>Documents:</strong>
            </p>
            <ul>
              {selectedVendor.vendorApplication?.documents?.map(
                (doc, index) => (
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
                )
              )}
            </ul>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() =>
                  handleVendorAction(selectedVendor._id, "approved")
                }
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() =>
                  handleVendorAction(selectedVendor._id, "declined")
                }
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Reject
              </button>
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

export default PendingVendor;

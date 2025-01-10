import { useState } from "react";

export default function VendorManagement() {
  const [pendingVendors, setPendingVendors] = useState([
    { id: 1, name: "Store A", email: "store.a@example.com", status: "pending" },
    { id: 2, name: "Store B", email: "store.b@example.com", status: "pending" },
  ]);

  const [approvedVendors, setApprovedVendors] = useState([
    {
      id: 3,
      name: "Store C",
      email: "store.c@example.com",
      status: "approved",
    },
    {
      id: 4,
      name: "Store D",
      email: "store.d@example.com",
      status: "approved",
    },
  ]);

  const handleApprove = (vendor) => {
    setPendingVendors(pendingVendors.filter((v) => v.id !== vendor.id));
    setApprovedVendors([...approvedVendors, { ...vendor, status: "approved" }]);
  };

  const handleRemove = (id, isApproved) => {
    if (isApproved) {
      setApprovedVendors(approvedVendors.filter((v) => v.id !== id));
    } else {
      setPendingVendors(pendingVendors.filter((v) => v.id !== id));
    }
  };

  const VendorTable = ({ vendors, showApprove, isApproved }) => (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Email
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {vendors.map((vendor) => (
          <tr key={vendor.id}>
            <td className="px-6 py-4 whitespace-nowrap">{vendor.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{vendor.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
              {showApprove && (
                <button
                  onClick={() => handleApprove(vendor)}
                  className="text-green-600 hover:text-green-900 font-medium"
                >
                  Approve
                </button>
              )}
              <button
                onClick={() => handleRemove(vendor.id, isApproved)}
                className="text-red-600 hover:text-red-900 font-medium"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Vendor Management</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Pending Requests</h3>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <VendorTable
            vendors={pendingVendors}
            showApprove={true}
            isApproved={false}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Approved Vendors</h3>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <VendorTable
            vendors={approvedVendors}
            showApprove={false}
            isApproved={true}
          />
        </div>
      </div>
    </div>
  );
}

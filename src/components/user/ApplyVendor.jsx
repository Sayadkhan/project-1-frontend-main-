import { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../api/axios";

const ApplyVendor = () => {
  const { user, authToken } = useSelector((state) => state.auth);

  console.log("Auth Token:", authToken); // Debug token

  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setDocuments(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!authToken) {
      setError("Authentication token is missing.");
      return;
    }

    if (documents.length === 0) {
      setError("Please upload at least one document.");
      return;
    }

    const formData = new FormData();
    documents.forEach((file) => {
      formData.append("documents", file);
    });

    try {
      setIsLoading(true);
      setError(null);
      setMessage(null);

      const response = await axiosInstance.post("/vendor/apply", formData, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Pass token
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage(
        response.data.message || "Application submitted successfully!"
      );
      setDocuments([]); // Reset form
    } catch (error) {
      console.error(
        "Error applying for vendor:",
        error.response?.data || error.message
      );
      setError(
        error.response?.data?.message || "Failed to apply for vendor status."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Apply for Vendor</h2>

      {message && (
        <div className="mb-4 text-green-600 bg-green-100 p-2 rounded">
          {message}
        </div>
      )}

      {error && (
        <div className="mb-4 text-red-600 bg-red-100 p-2 rounded">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="documents"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Documents (PDF or Images)
          </label>
          <input
            type="file"
            id="documents"
            multiple
            onChange={handleFileChange}
            className="mt-2 p-2 w-full border rounded-md"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`px-4 py-2 rounded-lg ${
            isLoading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplyVendor;

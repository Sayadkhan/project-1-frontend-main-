import { useState } from "react";
import axiosInstance from "../../api/axios";

const AddLogo = ({ authToken }) => {
  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!logo) {
      setMessage("Please select a logo to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("logo", logo);

    setIsLoading(true);
    setMessage("");

    try {
      const response = await axiosInstance.put("/admin/updateLogo", formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Logo uploaded successfully!");
      console.log("Logo URL:", response.data.logo);
    } catch (error) {
      console.error(
        "Error uploading logo:",
        error.response?.data || error.message
      );
      setMessage(error.response?.data?.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Website Logo</h1>

      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Select Logo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full px-4 py-2 text-white font-bold rounded-md ${
            isLoading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Uploading..." : "Upload Logo"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default AddLogo;

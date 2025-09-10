import React from "react";

const ProductForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - Form Inputs */}
          <div className="md:col-span-2 space-y-4">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter product name"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                placeholder="Enter price"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                placeholder="Enter product description"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                rows="3"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select className="mt-1 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none">
                <option>Select a category</option>
                <option>Pants</option>
                <option>Shirts</option>
                <option>Accessories</option>
                <option>Shoes</option>
              </select>
            </div>
          </div>

          {/* Right Side - Image Upload */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-md p-4">
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center justify-center text-gray-500"
            >
              <div className="w-24 h-32 bg-gray-100 rounded-md flex items-center justify-center mb-2">
                <span className="text-sm text-gray-400">Image</span>
              </div>
              <span className="text-sm text-blue-600 hover:underline">
                Upload Image
              </span>
              <input id="file-upload" type="file" className="hidden" />
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;

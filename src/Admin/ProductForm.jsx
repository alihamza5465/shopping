import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const ProductForm = ({ onClose, setformproducts }) => {
  const [base64, setBase64] = useState("");
  const productSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    price: Yup.number().typeError("Price must be a number"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    imageUrl: Yup.string().required("Image is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      category: "",
      imageUrl: "",
    },
    validationSchema: productSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("Submitted values:", values);
      try {
        const res = await axios.post("http://localhost:4000/products", values);
        if (res.status === 201) {
          toast.success("Product created successfully!");
          setformproducts((prev) => [...prev, res.data.product]);
          resetForm();
          onClose();
        }
      } catch (error) {
        toast.error("Failed to create product. Please try again.");
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setBase64(reader.result);
        formik.setFieldValue("imageUrl", reader.result); // update Formik value
      };
      reader.onerror = (error) => {
        console.error("Error: ", error);
      };
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 relative">
        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          onSubmit={formik.handleSubmit}
        >
          {/* Left Side - Form Inputs */}
          <div className="md:col-span-2 space-y-4" type="submit">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
              <select
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                name="category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              >
                <option value="">Select a category</option>
                <option value="New Arrivals">New Arrivals</option>
                <option value="Jeans-Shirts">Jeans-Shirts</option>
                <option value="Track-Suit">Track-Suit</option>
                <option value="Trousers">Trousers</option>
                <option value="Hoodies & Sweatshirts">Hoodies</option>
              </select>
            </div>
          </div>
          {/* Prodcut img */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Image
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border w-50"
              />
            </label>

            {/* Show preview */}
            {base64 && (
              <div>
                <img src={base64} alt="preview" width="200" />
                {/* <textarea value={base64} rows={5} cols={40} readOnly /> */}
              </div>
            )}
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
              // onClick={onClose}
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductForm;

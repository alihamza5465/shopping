import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import ProductForm from "./ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // arrow icon
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AddproductPage = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [eidtProduct, setEditProduct] = useState(null);
  console.log(products);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleAction = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const showProductForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/products");
        // setProducts(res.data); // now set the state
        // console.log(res.data);
        const filterProduct = res.data.filter(
          (item) => item.category === title
        );
        setProducts(filterProduct);
      } catch (error) {
        toast.error("Failed to fetch products. Please try again.");
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async () => {
    console.log("delete");
    try {
      await axios.delete(`http://localhost:4000/api/products/${activeMenu}`);
      setProducts(products.filter((item) => item._id !== activeMenu));
      toast.success("Product deleted successfully");
      setActiveMenu(null);
    } catch (error) {
      toast.error("Failed to delete product. Please try again.");
    }
  };

  const handleEdit = (id) => {
    setShowForm(true);
    console.log(id);
    const productToEdit = products.find((item) => item._id === id);
    setEditProduct(productToEdit);
  };

  return (
    <>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b">
          <button
            onClick={() => navigate(-1)} // go back
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 shadow-md"
          >
            <IoArrowBack className="text-xl text-gray-700" />
          </button>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
            Products of {title}
          </h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={showProductForm}
              className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-green-700"
            >
              Create Product
            </button>
          </div>
        </header>

        {showForm && (
          <ProductForm
            setformproducts={setProducts}
            onClose={() => setShowForm(false)}
            editProduct={eidtProduct}
          />
        )}
        <div className="bg-white rounded-lg shadow-lg mt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="p-4" scope="col"></th>
                  <th className="px-6 py-3" scope="col">
                    Name
                  </th>
                  <th className="px-6 py-3" scope="col">
                    Price
                  </th>
                  <th className="px-6 py-3 text-right" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="w-4 p-4"></td>
                    <td className="px-6 py-4 flex items-center">
                      <img
                        alt={item.name}
                        className="w-10 h-10 rounded-md mr-4 object-cover"
                        src={item.imageUrl}
                      />
                      <span className="font-medium text-gray-900">
                        {item.name}
                      </span>
                    </td>
                    <td className="px-6 py-4">${item.price}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleAction(item._id)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
                      >
                        <BsThreeDots className="text-gray-600" />
                        {activeMenu === item._id && (
                          <div className="absolute bg-white border rounded shadow-md mt-2 right-10">
                            <button
                              onClick={() => handleEdit(item._id)}
                              className="block px-4 py-2 text-sm text-gray-700 bg-orange-400 w-full text-left border-b-1"
                            >
                              Edit
                            </button>
                            <button
                              onClick={handleDelete}
                              className="block px-4 py-2 text-sm text-gray-700 bg-red-500 w-full text-left"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddproductPage;

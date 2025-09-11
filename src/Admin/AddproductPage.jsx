import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import ProductForm from "./ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // arrow icon

const AddproductPage = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const [actionbtn, setActionbtn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  // Dummy product list
  const products = [
    {
      id: 1,
      name: "RAVENOL CVT Fluid 1 LT",
      price: 8000,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDnCHg3jvXiM84oyfxbTeWSL4T0RAhP3fs6-Q_jsSmX2idM73VQIwUvQo1pobcH9c4_mpizvSbfdDzlLPU9HJmK4QNaxMT3BFxOUXDUtUmfyl2OJQ2CyIM6lT5YRoke_Z6-MOET7jSokvEaAbp3h3RV3ThoudTpGSd4Crp-b7MK8ydj3oxcnlO_OmqmEAgj15_SvnTLafOy30mepmGV0K97V3FQFFqEO31pLI3tQTHhPL8bsYuCq-0-cwWW-cVvemIn8qyGmw7LGOk",
    },
    {
      id: 2,
      name: "Castrol Edge Engine Oil 5L",
      price: 12000,
      image: "https://m.media-amazon.com/images/I/71OqMY3IplL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      name: "Mobil Super 1000 4L",
      price: 9500,
      image: "https://m.media-amazon.com/images/I/71n1XYA0KIL._AC_SL1500_.jpg",
    },
  ];

  const handleAction = () => {
    setActionbtn(!actionbtn);
  };

  const showProductForm = () => {
    setShowForm(!showForm);
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

        {showForm && <ProductForm onClose={() => setShowForm(false)} />}
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
                        src={item.image}
                      />
                      <span className="font-medium text-gray-900">
                        {item.name}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      ${item.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={handleAction}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
                      >
                        <BsThreeDots className="text-gray-600" />
                        {actionbtn && (
                          <div className="absolute bg-white border rounded shadow-md mt-2 right-10">
                            <button className="block px-4 py-2 text-sm text-gray-700 bg-orange-400 w-full text-left border-b-1">
                              Edit
                            </button>
                            <button className="block px-4 py-2 text-sm text-gray-700 bg-red-500 w-full text-left">
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
      </div>
    </>
  );
};

export default AddproductPage;

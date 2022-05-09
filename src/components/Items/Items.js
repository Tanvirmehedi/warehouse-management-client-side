import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://peaceful-sierra-96965.herokuapp.com/items`
      );
      if (!data?.success) return toast.error(data.error);
      setItems(data.data);
    })();
  }, []);
  return (
    <div className="container mx-auto my-5">
      <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50 ">
              <th className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap ">
                Name
              </th>
              <th className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                Quantity
              </th>
              <th className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                Price
              </th>
              <th className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                Image
              </th>
              <th className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                Supplier
              </th>
              <th className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                Description
              </th>
              <th className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-center">
            {items.map((item) => {
              return (
                <tr key={item._id}>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                    {item?.name}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {item?.quantity}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {item?.price}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {item?.imageUrl}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {item?.supplier}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {item?.description}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    <button
                      type="button"
                      className="mx-1 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Delete
                    </button>
                    <Link to={`/item/${item._id}`}>
                      <button
                        type="button"
                        className="mx-1 inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;

// description: "Magna enim qui tenet"
// imageUrl: "Et aliquip voluptati"
// name: "Serena Puckett"
// price: "519"
// quantity: "216"
// supplier: "Consectetur et ab re"
// _id: "627802944b226e7aa80eb11e"

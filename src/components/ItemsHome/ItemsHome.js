import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ItemsHome = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://peaceful-sierra-96965.herokuapp.com/item`
      );
      if (!data?.success) return toast.error(data.error);
      setItems(data.data);
    })();
  }, []);
  return (
    <div className="container mx-auto grid md:grid-cols-4 md:gap-10 my-10">
      {items.map((item) => {
        return (
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <Link to="#!">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  alt={item.imageUrl}
                />
              </Link>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {item?.name}
                </h5>
                <h6 className="text-gray-800 text-lg font-medium mb-2">
                  <span>Quantity: {item?.quantity}</span>
                  <span className="pl-3">Price: ${item?.price}</span>
                </h6>
                <p className="text-gray-600 text-base mb-4">
                  Supplier : {item?.supplier}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {item.description}
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Menage
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsHome;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://peaceful-sierra-96965.herokuapp.com/item/${id}`
      );
      if (!data?.success) return toast.error(data.error);
      setItem(data.data);
    })();
  }, [id]);
  const { quantity } = item;

  const handelUpdateQuantity = (e) => {
    e.preventDefault();
    const value = e.target.update.value;
    if (value !== "") {
      const newQuantity = parseInt(quantity) + parseInt(value);
      const updateProduct = { ...item, quantity: newQuantity };
      setItem(updateProduct);
      (async () => {
        const { data } = await axios.put(
          `https://peaceful-sierra-96965.herokuapp.com/item/${id}`,
          { quantity: newQuantity }
        );
        if (!data?.success) return toast.error(data.error);
        toast.success(`Update!! ${item?.name}`);
      })();
    } else {
      toast.error("Input A valid Number!!");
    }
    e.target.reset();
  };

  const handelDelivered = () => {
    const newQuantity = parseInt(quantity) - 1;
    const updateProduct = { ...item, quantity: newQuantity };
    setItem(updateProduct);

    const proceed = window.confirm("Are you sure want to deliver");

    if (proceed) {
      (async () => {
        const { data } = await axios.put(
          `https://peaceful-sierra-96965.herokuapp.com/item/${id}`,
          { quantity: newQuantity }
        );
        if (!data?.success) return toast.error(data.error);
        toast.success(`Delivered!! ${item?.name}`);
      })();
    }
  };
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {item?.name}
            </h5>
            <p className="text-gray-700  text-base mb-4">
              About: {item?.description}
            </p>
            <p className="text-gray-600 text-xl font-semibold">
              Price: ${item?.price}
            </p>
            <p className="text-gray-600 text-xl font-semibold mt-5">
              Quantity: {item?.quantity} pcs
            </p>
            <div>
              <form onSubmit={handelUpdateQuantity}>
                <input
                  type="number"
                  name="update"
                  placeholder="Update Quantity"
                  className="rounded-full my-3 border-2 h-9 "
                />
                <button
                  type="submit"
                  className="w-full inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Update Quantity
                </button>
              </form>
            </div>
            <button
              onClick={handelDelivered}
              type="button"
              className="mt-10 inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;

// description: "Blanditiis ut itaque"
// imageUrl: "Deserunt magni excep"
// name: "Margaret Kent"
// price: "463"
// quantity: "697"
// supplier: "Obcaecati a reiciend"
// _id: "627815874b226e7aa80eb11f"

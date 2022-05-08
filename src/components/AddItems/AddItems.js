import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
const AddItems = () => {
  const handelItemsForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const imageUrl = e.target.image.value;
    const supplier = e.target.supplier.value;
    const description = e.target.description.value;
    const product = {
      name,
      price,
      quantity,
      imageUrl,
      supplier,
      description,
    };
    try {
      const { data } = await axios.post(
        "https://peaceful-sierra-96965.herokuapp.com/items",
        product
      );
      if (!data.success) {
        return toast.error(data.error);
      }
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="container mx-auto py-5 ">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
        <form onSubmit={handelItemsForm}>
          <div className="form-group mb-6">
            <input
              name="name"
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="name"
              placeholder="Item Name"
            />
          </div>

          <div className="form-group mb-6 grid grid-cols-2 gap-3">
            <input
              name="price"
              type="number"
              className="form-control inline-block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="price"
              placeholder="Price"
            />
            <input
              name="quantity"
              type="number"
              className="form-control inline-block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="quantity"
              placeholder="Quantity"
            />
          </div>
          <div className="form-group mb-6">
            <input
              name="Image"
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="image"
              placeholder="Image Url"
            />
          </div>
          <div className="form-group mb-6">
            <input
              name="supplier"
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="supplier"
              placeholder="Supplier Name"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              name="description"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;

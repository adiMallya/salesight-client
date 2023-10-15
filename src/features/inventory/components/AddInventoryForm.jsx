import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToInventory } from "src/features/inventory";
import { CATEGORIES } from "src/utils/constants";

const AddInventoryForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const [newItem, setNewItem] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: name === ("price" || "quantity") ? Number(value) : value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (newItem) {
      dispatch(addItemToInventory(newItem));
      setNewItem(null);
    }
  };

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <form className="flex gap-4 items-center" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="itemName"
        placeholder="Name"
        value={newItem?.itemName}
        onChange={handleInputChange}
        className="px-2 py-2 rounded-md border-2 border-grey-500 outline-none"
      />
      <input
        type="number"
        name="price"
        placeholder="Cost Price"
        value={newItem?.price}
        onChange={handleInputChange}
        className="px-2 py-2 rounded-md border-2 border-grey-500 outline-none"
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={newItem?.quantity}
        onChange={handleInputChange}
        className="px-2 py-2 rounded-md border-2 border-grey-500 outline-none"
      />
      <select
        name="category"
        onChange={handleInputChange}
        className="px-2 py-2 rounded-md border-2 border-grey-500 outline-none"
      >
        {CATEGORIES.slice(1).map(({ key, value }) => (
          <option value={value} key={key}>
            {value}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-400 font-semibold border-none outline-none rounded-md cursor-pointer opacity-90 hover:opacity-100"
      >
        Add Item
      </button>
    </form>
  );
};

export { AddInventoryForm };

import { useState } from "react";

export const SaleModal = ({ isOpen, onClose, item, onSubmit }) => {
  const [saleForm, setSaleForm] = useState({
    salePrice: null,
    quantity: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSaleForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      item: item._id,
      ...saleForm,
    });
    onClose();
  };

  if (!isOpen) {
    return false;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen">
        <div className="fixed inset-0" onClick={onClose}></div>
        <div className="relative px-4 pb-8 sm:max-w-lg">
          <div className="rounded-lg px-4 pt-5 pb-4 bg-white shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">
              {item.itemName}
            </h3>
            <form
              onSubmit={handleFormSubmit}
              className="mt-2 flex flex-col gap-4"
            >
              <input
                type="number"
                placeholder="Sale Price"
                className="border rounded p-2 w-full"
                name="salePrice"
                value={saleForm?.salePrice}
                onChange={handleInputChange}
              />
              <input
                type="number"
                placeholder="Quantity"
                className="border rounded p-2 w-full mt-2"
                name="quantity"
                value={saleForm?.quantity}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer opacity-90 hover:opacity-100"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

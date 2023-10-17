import { Edit, DeleteOutline, SellOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromInventory,
  editItemInInventory,
} from "src/features/inventory";
import { SaleModal, recordASale } from "src/features/sales";

export const TableBody = ({ data, isLoading }) => {
  const records = isLoading ? Array(5).fill({}) : data;

  const dispatch = useDispatch();

  //Edit an inventory record
  const [editRecord, setEditRecord] = useState(null);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditRecord((prev) => ({
      ...prev,
      [name]: name === ("price" || "quantity") ? Number(value) : value,
    }));
  };

  const handleEditAction = (item) => {
    if (editRecord && editRecord._id === item._id) {
      dispatch(editItemInInventory(item._id, editRecord));

      setEditRecord(null);
    } else {
      setEditRecord({ ...item });
    }
  };

  //Delete an inventory record
  const handleDeleteAction = (itemId) =>
    dispatch(removeItemFromInventory(itemId));

  //Sell an item in inventory
  const [sellingItem, setSellingItem] = useState(null);

  const handleSellAction = (sellingItem) => {
    dispatch(recordASale(sellingItem));

    setSellingItem(null);
  };

  return (
    <>
      <tbody>
        {records.map((item, idx) => (
          <tr key={item._id}>
            <td
              className={`py-2 px-4 border ${
                isLoading ? "bg-grey-200 animate-pulse" : ""
              }`}
            >
              {Number(idx + 1)}
            </td>
            <td
              className={`py-2 px-4 border ${
                isLoading ? "bg-grey-200 animate-pulse" : ""
              }`}
            >
              {editRecord && editRecord._id === item._id ? (
                <input
                  key={item._id}
                  type="text"
                  name="itemName"
                  value={editRecord?.itemName}
                  onChange={handleFieldChange}
                />
              ) : (
                item?.itemName || "-"
              )}
            </td>
            <td
              className={`py-2 px-4 border ${
                isLoading ? "bg-grey-200 animate-pulse" : ""
              }`}
            >
              {editRecord && editRecord._id === item._id ? (
                <input
                  key={item._id}
                  type="number"
                  name="price"
                  value={editRecord?.price}
                  onChange={handleFieldChange}
                />
              ) : (
                item?.price || "-"
              )}
            </td>
            <td
              className={`py-2 px-4 border ${
                isLoading ? "bg-grey-200 animate-pulse" : ""
              }`}
            >
              {editRecord && editRecord._id === item._id ? (
                <input
                  key={item._id}
                  type="number"
                  name="quantity"
                  value={editRecord?.quantity}
                  onChange={handleFieldChange}
                />
              ) : (
                item?.quantity || "-"
              )}
            </td>
            <td
              className={`py-2 px-4 border ${
                isLoading ? "bg-grey-200 animate-pulse" : ""
              }`}
            >
              {item?.category || "-"}
            </td>
            <td
              className={`py-2 px-4 border ${
                isLoading ? "bg-grey-200 animate-pulse" : ""
              }`}
            >
              <button
                className="bg-blue-500 text-white py-1 px-4 rounded mr-2 outline-none cursor-pointer font-sm"
                disabled={isLoading}
                onClick={() => handleEditAction(item)}
                title="Edit"
              >
                {editRecord && editRecord._id === item._id ? (
                  "Update"
                ) : (
                  <Edit />
                )}
              </button>
              <button
                className="bg-green-500 text-white py-1 px-4 rounded mr-2 outline-none cursor-pointer font-sm"
                disabled={isLoading}
                onClick={() => setSellingItem(item)}
                title="Sell"
              >
                <SellOutlined />
              </button>
              <button
                className="bg-red-500 text-white py-1 px-4 rounded mr-2 outline-none cursor-pointer"
                disabled={isLoading}
                onClick={() => handleDeleteAction(item._id)}
                title="Delete"
              >
                <DeleteOutline />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      {sellingItem && (
        <SaleModal
          isOpen={!!sellingItem}
          onClose={() => setSellingItem(null)}
          item={sellingItem}
          onSubmit={handleSellAction}
        />
      )}
    </>
  );
};

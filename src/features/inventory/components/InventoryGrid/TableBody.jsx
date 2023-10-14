import { Edit, DeleteOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeItemFromInventory } from "src/features/inventory";

export const TableBody = ({ data, isLoading }) => {
  const records = isLoading ? Array(5).fill({}) : data;

  const dispatch = useDispatch();
  const handleDeleteAction = (itemId) =>
    dispatch(removeItemFromInventory(itemId));

  return (
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
            {item?.itemName || "-"}
          </td>
          <td
            className={`py-2 px-4 border ${
              isLoading ? "bg-grey-200 animate-pulse" : ""
            }`}
          >
            {item?.price || "-"}
          </td>
          <td
            className={`py-2 px-4 border ${
              isLoading ? "bg-grey-200 animate-pulse" : ""
            }`}
          >
            {item.quantity}
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
              className="bg-blue-500 text-white py-1 px-4 rounded mr-2 outline-none cursor-pointer"
              disabled={isLoading}
            >
              <Edit />
            </button>
            <button
              className="bg-red-500 text-white py-1 px-4 rounded mr-2 outline-none cursor-pointer"
              disabled={isLoading}
              onClick={() => handleDeleteAction(item._id)}
            >
              <DeleteOutline />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

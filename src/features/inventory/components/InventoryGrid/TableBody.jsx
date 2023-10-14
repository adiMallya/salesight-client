import { Edit, DeleteOutline } from "@mui/icons-material";

export const TableBody = ({ data, isLoading }) => {
  const records = isLoading ? Array(5).fill({}) : data;

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
            >
              <DeleteOutline />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

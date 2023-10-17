import { useState } from "react";
import { SalesColumns } from "src/utils/constants";

const SalesGrid = ({ data, isLoading }) => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const filteredSales = data.filter((sale) => {
    let transactionDate = new Date(sale.createdAt);
    const { startDate, endDate } = dateRange;

    const start = startDate ? new Date(startDate) : new Date(-8640000000000000);
    const end = endDate ? new Date(endDate) : new Date(8640000000000000);

    return transactionDate >= start && transactionDate <= end;
  });

  const records = isLoading ? Array(5).fill({}) : filteredSales;

  return (
    <div className="overflow-x-auto">
      <div className="flex mb-4 space-x-4">
        <label htmlFor="startDate">
          Start:
          <input
            type="date"
            className="border rounded p-2 outline-none"
            name="startDate"
            onChange={handleDateChange}
          />
        </label>
        <label htmlFor="endDate">
          End:
          <input
            type="date"
            className="border rounded p-2 outline-none"
            name="endDate"
            onChange={handleDateChange}
          />
        </label>
      </div>
      <table className="min-w-full">
        <thead>
          <tr>
            {SalesColumns.map(({ label, key }) => (
              <th key={key} className="py-2 px-4 border">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((sale, idx) => (
            <tr key={sale._id}>
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
                {sale?.item?.itemName || "-"}
              </td>
              <td
                className={`py-2 px-4 border ${
                  isLoading ? "bg-grey-200 animate-pulse" : ""
                }`}
              >
                {sale?.salePrice || "-"}
              </td>
              <td
                className={`py-2 px-4 border ${
                  isLoading ? "bg-grey-200 animate-pulse" : ""
                }`}
              >
                {sale?.quantity || "-"}
              </td>
              <td
                className={`py-2 px-4 border ${
                  isLoading ? "bg-grey-200 animate-pulse" : ""
                }`}
              >
                {sale?.revenue || "-"}
              </td>
              <td
                className={`py-2 px-4 border ${
                  isLoading ? "bg-grey-200 animate-pulse" : ""
                }`}
              >
                {`${new Date(sale?.createdAt).toLocaleDateString()}` || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { SalesGrid };

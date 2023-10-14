import { CATEGORIES, InventoryColumns } from "src/utils/constants";

export const TableHeader = ({ handleCategory }) => {
  return (
    <thead>
      <tr>
        {InventoryColumns.filter((col) => col.label !== "Category").map(
          ({ label, key }) => (
            <th key={key} className="py-2 px-4 border">
              {label}
            </th>
          )
        )}
        <th key="category_type" className="py-2 px-4 border">
          Category
          <select
            name="category_type"
            className="ml-2 border-2 cursor-pointer"
            onChange={handleCategory}
          >
            {CATEGORIES.map(({ key, value }) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
        </th>
        <th key="action" className="py-2 px-4 border">
          Actions
        </th>
      </tr>
    </thead>
  );
};

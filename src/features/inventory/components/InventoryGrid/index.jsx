import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { fetchAllItemsFromInventory } from "src/features/inventory";

const InventoryGrid = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const inventory = useSelector((state) => state.inventory);

  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleCategory = (event) => setFilteredCategory(event.target.value);

  useEffect(() => {
    if (loading) {
      dispatch(fetchAllItemsFromInventory());
    }
  }, [loading, dispatch]);

  const filteredData =
    filteredCategory !== "All"
      ? inventory.filter((item) => item.category === filteredCategory)
      : inventory;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <TableHeader handleCategory={handleCategory} />
        <TableBody data={filteredData} isLoading={loading} />
      </table>
    </div>
  );
};

export { InventoryGrid };

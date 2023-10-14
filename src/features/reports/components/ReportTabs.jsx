import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInventoryStats, getSaleStats } from "src/features/reports";
import { Loader } from "src/components";
import InventoryChart from "./InventoryChart";
import SalesChart from "./SalesChart";

export const ReportTabs = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const inventoryReport = useSelector((state) => state.inventoryReport);
  const salesReport = useSelector((state) => state.salesReport);

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    dispatch(getInventoryStats());
    dispatch(getSaleStats());
  }, [dispatch]);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-4">
        <button
          className={`py-2 px-4 ${
            activeTab === 0 ? "bg-gray-300" : "bg-gray-200"
          } hover:bg-gray-300 outline-none border-none rounded-md cursor-pointer font-bold`}
          onClick={() => setActiveTab(0)}
        >
          Inventory Report
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 1 ? "bg-gray-300" : "bg-gray-200"
          } hover:bg-gray-300 outline-none border-none rounded-md cursor-pointer font-bold`}
          onClick={() => setActiveTab(1)}
        >
          Sales Report
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : activeTab === 1 ? (
        salesReport && <SalesChart data={salesReport} />
      ) : (
        inventoryReport && <InventoryChart data={inventoryReport} />
      )}
    </section>
  );
};

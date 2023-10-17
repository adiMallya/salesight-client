import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "src/components";
import { SalesGrid } from "src/features/sales";
import { fetchAllSales } from "src/features/sales";

export default function Sales() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const sales = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(fetchAllSales());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-8 min-h-screen">
        <section className="mt-4"></section>
        <section>
          <SalesGrid data={sales} isLoading={loading} />
        </section>
      </main>
    </>
  );
}

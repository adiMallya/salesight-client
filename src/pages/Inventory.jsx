import { Navbar } from "src/components";
import { InventoryGrid, AddInventoryForm } from "src/features/inventory";

export default function Inventory() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-8 min-h-screen">
        <section className="mt-4">
          <AddInventoryForm />
        </section>
        <section>
          <InventoryGrid />
        </section>
      </main>
    </>
  );
}

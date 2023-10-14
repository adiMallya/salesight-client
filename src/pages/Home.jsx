import { Navbar } from "src/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen">
        <section className="flex flex-wrap mt-8">
          <h1 className="font-bold text-4xl">Welcome to SaleSight</h1>
        </section>
      </main>
    </>
  );
}

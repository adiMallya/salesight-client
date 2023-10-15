import { Routes, Route } from "react-router-dom";
import { Home, Inventory, Sales } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </>
  );
}

export default App;

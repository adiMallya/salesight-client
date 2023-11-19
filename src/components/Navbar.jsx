import { Link } from "react-router-dom";
import {
  InventoryOutlined,
  SellOutlined,
  AssessmentOutlined,
  GitHub,
} from "@mui/icons-material";

export const Navbar = () => {
  return (
    <nav className="w-full static top-0 p-4 flex items-center justify-center">
      <ul className="w-full flex justify-around">
        <li>
          <Link to="/inventory" className="flex flex-col items-center">
            <InventoryOutlined />
            <span aria-label="Inventory">Inventory</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex flex-col items-center">
            <AssessmentOutlined />
            <span aria-label="Reports">Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/sales" className="flex flex-col items-center">
            <SellOutlined />
            <span aria-label="Sales">Sales</span>
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/adiMallya/salesight-client"
            className="flex flex-col items-center"
          >
            <GitHub />
            <span aria-label="Sales">Source Code</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

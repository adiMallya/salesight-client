import axios from "axios";
import { API_URL } from "src/utils/constants";

const getInventoryReport = async () => {
    try {
        const response = await axios.get(`${API_URL}/report/inventory`);
        return response.data;
    } catch (error) {
        if (error && error.response) {
            throw error.response.data;
        }
        throw error;
    }
}

const getSalesReport = async () => {
    try {
        const response = await axios.get(`${API_URL}/report/sales`);
        return response.data;
    } catch (error) {
        if (error && error.response) {
            throw error.response.data;
        }
        throw error;
    }
}

export { getInventoryReport, getSalesReport };
import axios from "axios";
import { API_URL } from "src/utils/constants";

const getAllSales = async () => {
    try {
        const response = await axios.get(`${API_URL}/sales`);
        return response.data;
    } catch (error) {
        if (error && error.response) {
            throw error.response.data;
        }
        throw error;
    }
}

const postSaleData = async (saleData) => {
    try {
        const response = await axios.post(`${API_URL}/sales`, { ...saleData });
        return response.data;
    } catch (error) {
        if (error && error.response) {
            throw error.response.data;
        }
        throw error;
    }
}

export { getAllSales, postSaleData };
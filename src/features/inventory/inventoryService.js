import axios from "axios";
import { API_URL } from "src/utils/constants";

const getAllItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/items`);
        return response.data;
    } catch (error) {
        if (error && error.response) {
            throw error.response.data;
        }
        throw error;
    }
}

const postItemToInventory = async (itemBody) => {
    try {
        const response = await axios.post(`${API_URL}/items`, { ...itemBody });
        return response.data;
    } catch (error) {
        if (error && error.response) {
            throw error.response.data;
        }
        throw error;
    }
}

const postEditedItem = async (itemId, fieldsToEdit) => {
    try {
        const response = await axios.post(`${API_URL}/items/${itemId}`, { ...fieldsToEdit });
        return response.data;
    } catch (error) {
        if (error && error.response) {
            throw error.response.data;
        }
        throw error;
    }
}

const deleteItemFromInventory = async (itemId) => {
    try {
        const response = await axios.delete(`${API_URL}/items/${itemId}`, {})
        return response;
    } catch (error) {
        if (error && error.response) {
            throw error.response.data;
        }
        throw error;
    }
}

export { getAllItems, postItemToInventory, postEditedItem, deleteItemFromInventory };
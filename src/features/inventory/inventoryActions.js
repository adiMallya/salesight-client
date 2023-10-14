import * as inventoryService from "./inventoryService";

const fetchAllItemsFromInventory = () => async (dispatch) => {
    dispatch({ type: "FETCH_DATA_PENDING" });
    try {
        const data = await inventoryService.getAllItems();
        if (data.success) {
            dispatch({ type: "INVENTORY_DATA_SUCCESS", payload: data.data })
        }
    } catch (err) {
        console.error(err);
        dispatch({ type: "INVENTORY_DATA_FAILURE" });
    }
}

const addItemToInventory = (itemDetails) => async (dispatch) => {
    dispatch({ type: "FETCH_DATA_PENDING" });
    try {
        const data = await inventoryService.postItemToInventory(itemDetails);
        if (data.success) {
            dispatch({ type: "INVENTORY_DATA_SUCCESS", payload: data.data })
        }
    } catch (err) {
        if (err && err.success === false) {
            dispatch({ type: "INVENTORY_DATA_FAILURE", payload: err.error });
        } else {
            dispatch({ type: "INVENTORY_DATA_FAILURE" });
        }
    }
}

const editItemInInventory = (itemId, fieldsToUpdate) => async (dispatch) => {
    dispatch({ type: "FETCH_DATA_PENDING" });
    try {
        const data = await inventoryService.postEditedItem(itemId, fieldsToUpdate);
        if (data.success) {
            dispatch({ type: "INVENTORY_DATA_SUCCESS", payload: data.data })
        }
    } catch (err) {
        if (err && err.success === false) {
            dispatch({ type: "INVENTORY_DATA_FAILURE", payload: err.error });
        } else {
            dispatch({ type: "INVENTORY_DATA_FAILURE" });
        }
    }
}

const removeItemFromInventory = (itemId) => async (dispatch) => {
    dispatch({ type: "FETCH_DATA_PENDING" });
    try {
        const res = await inventoryService.deleteItemFromInventory(itemId);
        if (res.status === 204) {
            dispatch({ type: "REMOVE_FROM_INVENTORY", payload: itemId });
        }
    } catch (err) {
        if (err && err.success === false) {
            dispatch({ type: "INVENTORY_DATA_FAILURE", payload: err.error });
        } else {
            dispatch({ type: "INVENTORY_DATA_FAILURE" });
        }
    }
}

export { fetchAllItemsFromInventory, addItemToInventory, editItemInInventory, removeItemFromInventory };
import * as reportService from "./reportService";

const getInventoryStats = () => async (dispatch) => {
    dispatch({ type: "FETCH_DATA_PENDING" });
    try {
        const data = await reportService.getInventoryReport();
        if (data.success) {
            dispatch({ type: "INVENTORY_REPORT_SUCCESS", payload: data.data });
        }
    } catch (err) {
        console.error(err);
        dispatch({ type: "REPORT_FAILURE" });
    }
};

const getSaleStats = () => async (dispatch) => {
    dispatch({ type: "FETCH_DATA_PENDING" });
    try {
        const data = await reportService.getSalesReport();
        if (data.success) {
            dispatch({ type: "SALES_REPORT_SUCCESS", payload: data.data[0] });
        }
    } catch (err) {
        console.error(err);
        dispatch({ type: "REPORT_FAILURE" });
    }
};

export { getInventoryStats, getSaleStats };
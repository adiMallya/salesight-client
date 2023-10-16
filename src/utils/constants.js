export const API_URL = 'https://salesight.slaypoint.repl.co/api/v1';

export const CATEGORIES = [
    { key: 0, value: "All" },
    { key: 1, value: "Electronics" },
    { key: 2, value: "Clothing" },
    { key: 3, value: "Furniture" },
    { key: 4, value: "Toys" },
    { key: 5, value: "Books" },
    { key: 6, value: "Groceries" }
];

export const InventoryColumns = [
    { label: "ID", key: "_id" },
    { label: "Item Name", key: "itemName" },
    { label: "Cost Price (INR)", key: "price" },
    { label: "Quantity", key: "quantity" },
    { label: "Category", key: "category" },
];

export const SalesColumns = [
    { label: "ID", key: "_id" },
    { label: "Item Name", key: "itemName" },
    { label: "Sold At (INR)", key: "salePrice" },
    { label: "Count", key: "quantity" },
    { label: "Revenue (INR)", key: "revenue" },
    { label: "Created On", key: "createdAt" },
]
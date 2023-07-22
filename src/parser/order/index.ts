import { getOrders, addOrder, deleteOrder, updateOrder } from "../../data-management/cloud/firebase/firestore/order"

// get products from inventory
export const getProductsFromOrder = async () => {
    const products = await getOrders();
    return products.map(product => product.data());
}

// add product in inventory
export const addProductIntoOrder = async (order: any) => {
    const productAdded = await addOrder(order);
    return productAdded;
}
//delete product api
export const deleteProductFromOrder = async (id: string) => {
    const productDeleted = await deleteOrder(id);
    return productDeleted;
}
//edit product api
export const editProductFromOrder = async (id:string, product: any) => {
    const productEdited = await updateOrder(id,product);
    return productEdited;
}
import { getInventories, addInventory, deleteInventory, updateInventory } from "../../data-management/cloud/firebase/firestore/inventory"

// get products from inventory
export const getProductsFromInventory = async () => {
    const products = await getInventories();
    return products.map(product => product.data());
}

// add product in inventory
export const addProductIntoInventory = async (product: any) => {
    const productAdded = await addInventory(product);
    return productAdded;
}
//delete product api
export const deleteProductFromInventory = async (id: string) => {
    const productDeleted = await deleteInventory(id);
    return productDeleted;
}
//edit product api
export const editProductFromInventory = async (id:string, product: any) => {
    const productEdited = await updateInventory(id,product);
    return productEdited;
}
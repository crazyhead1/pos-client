import { addSupplier, deleteSupplier, getSuppliers, updateSupplier } from "../../data-management/cloud/firebase/firestore/supplier";

// get Suppliers from inventory
export const getAllSuppliers = async () => {
    const Suppliers = await getSuppliers();
    return Suppliers.map(Supplier => Supplier.data()) as any[];
}

// add Supplier in inventory
export const addOneSupplier = async (Supplier: any) => {
    const SupplierAdded = await addSupplier(Supplier);
    return SupplierAdded;
}
//delete Supplier api
export const deleteOneSupplier = async (id: string) => {
    const SupplierDeleted = await deleteSupplier(id);
    return SupplierDeleted;
}
//edit Supplier api
export const editSupplier = async (id: string, Supplier: any) => {
    const SupplierEdited = await updateSupplier(id,Supplier);
    return SupplierEdited;
}
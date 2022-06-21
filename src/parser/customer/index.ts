import { addCustomer, deleteCustomer, getCustomers, updateCustomer } from "../../data-management/cloud/firebase/firestore/customer";

// get Customers from inventory
export const getAllCustomers = async () => {
    const Customers = await getCustomers();
    return Customers.map(Customer => Customer.data());
}

// add Customer in inventory
export const addOneCustomer = async (Customer: any) => {
    const CustomerAdded = await addCustomer(Customer);
    return CustomerAdded;
}
//delete Customer api
export const deleteOneCustomer = async (id: string) => {
    const CustomerDeleted = await deleteCustomer(id);
    return CustomerDeleted;
}
//edit Customer api
export const editCustomer = async (id: string, Customer: any) => {
    const CustomerEdited = await updateCustomer(id,Customer);
    return CustomerEdited;
}
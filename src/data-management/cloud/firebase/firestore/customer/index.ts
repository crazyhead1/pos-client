import {getDocument,getDocuments,addDocument,updateDocument,deleteDocument} from '../';
import { CUSTOMERS_COLLECTION } from '../../../../../ui/common/constants/collections';

export const getCustomer = async (id: string) => {
    return await getDocument(CUSTOMERS_COLLECTION, id);
}

export const getCustomers = async () => {
    return await getDocuments(CUSTOMERS_COLLECTION);
}

export const addCustomer = async (data: any) => {
    return await addDocument(CUSTOMERS_COLLECTION, data);
}

export const updateCustomer = async (id: string, data: any) => {
    return await updateDocument(CUSTOMERS_COLLECTION, id, data);
}

export const deleteCustomer = async (id: string) => {
    return await deleteDocument(CUSTOMERS_COLLECTION, id);
}
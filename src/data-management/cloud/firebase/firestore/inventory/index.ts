import {getDocument,getDocuments,addDocument,updateDocument,deleteDocument} from '../';
import { PRODUCTS_COLLECTION } from '../../../../../ui/common/constants/collections';

export const getInventory = async (id: string) => {
    return await getDocument(PRODUCTS_COLLECTION, id);
}

export const getInventories = async () => {
    return await getDocuments(PRODUCTS_COLLECTION);
}

export const addInventory = async (data: any) => {
    return await addDocument(PRODUCTS_COLLECTION, data);
}

export const updateInventory = async (id: string, data: any) => {
    return await updateDocument(PRODUCTS_COLLECTION, id, data);
}

export const deleteInventory = async (id: string) => {
    return await deleteDocument(PRODUCTS_COLLECTION, id);
}
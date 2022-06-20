import {getDocument,getDocuments,addDocument,updateDocument,deleteDocument} from '../';
import { ORDERS_COLLECTION } from '../../../../../ui/common/constants/collections';

export const getOrder = async (id: string) => {
    return await getDocument(ORDERS_COLLECTION, id);
}

export const getOrders = async () => {
    return await getDocuments(ORDERS_COLLECTION);
}

export const addOrder = async (data: any) => {
    return await addDocument(ORDERS_COLLECTION, data);
}

export const updateOrder = async (id: string, data: any) => {
    return await updateDocument(ORDERS_COLLECTION, id, data);
}

export const deleteOrder = async (id: string) => {
    return await deleteDocument(ORDERS_COLLECTION, id);
}
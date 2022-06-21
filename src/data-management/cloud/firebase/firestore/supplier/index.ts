import {getDocument,getDocuments,addDocument,updateDocument,deleteDocument} from '../';
import { SUPPLIERS_COLLECTION } from '../../../../../ui/common/constants/collections';

export const getSupplier = async (id: string) => {
    return await getDocument(SUPPLIERS_COLLECTION, id);
}

export const getSuppliers = async () => {
    return await getDocuments(SUPPLIERS_COLLECTION);
}

export const addSupplier = async (data: any) => {
    return await addDocument(SUPPLIERS_COLLECTION, data);
}

export const updateSupplier = async (id: string, data: any) => {
    return await updateDocument(SUPPLIERS_COLLECTION, id, data);
}

export const deleteSupplier = async (id: string) => {
    return await deleteDocument(SUPPLIERS_COLLECTION, id);
}
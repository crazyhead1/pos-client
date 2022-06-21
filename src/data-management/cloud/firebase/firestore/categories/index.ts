import {getDocument,getDocuments,addDocument,updateDocument,deleteDocument} from '../';
import { SUB_CATEGORIES_COLLECTION } from '../../../../../ui/common/constants/collections';


export const getCategory = async (id: string, type: string) => {
    return await getDocument(type, id);
}

export const getCategories = async (type: string) => {
    return await getDocuments(type);
}

export const addCategory = async (data: any, type: string) => {
    return await addDocument(type, data);
}

export const updateCategory = async (id: string, data: any, type: string) => {
    return await updateDocument(type, id, data);
}

export const deleteCategory = async (id: string, type: string) => {
    return await deleteDocument(type, id);
}
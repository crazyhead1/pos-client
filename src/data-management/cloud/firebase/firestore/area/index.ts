import {getDocument,getDocuments,addDocument,updateDocument,deleteDocument} from '../';
import { AREAS_COLLECTION } from '../../../../../ui/common/constants/collections';

export const getArea = async (id: string) => {
    return await getDocument(AREAS_COLLECTION, id);
}

export const getAreas = async () => {
    return await getDocuments(AREAS_COLLECTION);
}

export const addArea = async (data: any) => {
    return await addDocument(AREAS_COLLECTION, data);
}

export const updateArea = async (id: string, data: any) => {
    return await updateDocument(AREAS_COLLECTION, id, data);
}

export const deleteArea = async (id: string) => {
    return await deleteDocument(AREAS_COLLECTION, id);
}
import {getDocument,getDocuments,addDocument,updateDocument,deleteDocument} from '../';
import { TOWNS_COLLECTION } from '../../../../../ui/common/constants/collections';
//getTown
export const getTown = async (id: string) => {
    return await getDocument(TOWNS_COLLECTION, id);
}
//getTowns
export const getTowns = async () => {
    return await getDocuments(TOWNS_COLLECTION);
}
//addTown
export const addTown = async (data: any) => {
    return await addDocument(TOWNS_COLLECTION, data);
}
//updateTown
export const updateTown = async (id: string, data: any) => {
    return await updateDocument(TOWNS_COLLECTION, id, data);
}
//deleteTown
export const deleteTown = async (id: string) => {
    return await deleteDocument(TOWNS_COLLECTION, id);
}
import {getDocument,getDocuments,addDocument,updateDocument,deleteDocument} from '../';
import { EMPLOYEES_COLLECTION } from '../../../../../ui/common/constants/collections';

export const getEmployee = async (id: string) => {
    return await getDocument(EMPLOYEES_COLLECTION, id);
}

export const getEmployees = async () => {
    return await getDocuments(EMPLOYEES_COLLECTION);
}

export const addEmployee = async (data: any) => {
    return await addDocument(EMPLOYEES_COLLECTION, data);
}

export const updateEmployee = async (id: string, data: any) => {
    return await updateDocument(EMPLOYEES_COLLECTION, id, data);
}

export const deleteEmployee = async (id: string) => {
    return await deleteDocument(EMPLOYEES_COLLECTION, id);
}
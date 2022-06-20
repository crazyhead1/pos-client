import {getDocument,getDocuments,addDocument,updateDocument,deleteDocument} from '../';
import { SALES_ROUTES_COLLECTION } from '../../../../../ui/common/constants/collections';

export const getSalesRoute = async (id: string) => {
    return await getDocument(SALES_ROUTES_COLLECTION, id);
}

export const getSalesRoutes = async () => {
    return await getDocuments(SALES_ROUTES_COLLECTION);
}

export const addSalesRoute = async (data: any) => {
    return await addDocument(SALES_ROUTES_COLLECTION, data);
}

export const updateSalesRoute = async (id: string, data: any) => {
    return await updateDocument(SALES_ROUTES_COLLECTION, id, data);
}

export const deleteSalesRoute = async (id: string) => {
    return await deleteDocument(SALES_ROUTES_COLLECTION, id);
}
import {getDocument,getDocuments,addDocument,updateDocument,deleteDocument} from '../';


export const getCategory = async (id: string, type: 'categories_employees' | 'categories_customers' | 'categories_products' | 'categories_orders' | 'categories_suppliers' ) => {
    return await getDocument(type, id);
}

export const getCategories = async (type: 'categories_employees' | 'categories_customers' | 'categories_products' | 'categories_orders' | 'categories_suppliers') => {
    return await getDocuments(type);
}

export const getAllCategories = async () => {
    return {
        employees: await getCategories('categories_employees'),
        customers: await getCategories('categories_customers'),
        products: await getCategories('categories_products'),
        orders: await getCategories('categories_orders'),
        suppliers: await getCategories('categories_suppliers'),
    };
}

export const addCategory = async (data: any, type: 'categories_employees' | 'categories_customers' | 'categories_products' | 'categories_orders' | 'categories_suppliers') => {
    return await addDocument(type, data);
}

export const updateCategory = async (id: string, data: any, type: 'categories_employees' | 'categories_customers' | 'categories_products' | 'categories_orders' | 'categories_suppliers') => {
    return await updateDocument(type, id, data);
}

export const deleteCategory = async (id: string, type: 'categories_employees' | 'categories_customers' | 'categories_products' | 'categories_orders' | 'categories_suppliers') => {
    return await deleteDocument(type, id);
}
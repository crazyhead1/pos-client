// Add a second document with a generated ID.
import { set, get, remove, update, ref } from "firebase/database"; 
import { firebaseDatabase } from "../../../../services";
import {Error} from '../../../../interfaces/error';

export const writeWithUserID =async (path: string, id: string, data: Object): Promise<any> => {
    try {
        const docRef = await set(ref(firebaseDatabase, `${path}/${id}`), data);
        return docRef;
    } catch (error: any) {
        return {
            message: error.message,
            stack: error.stack,
            errorCode: error.code,
            errorType: error.type,
            name: error.name,
        } as Error;
    }
}
export const writeWithPath =async (path: string, data: Object): Promise<any> => {
    try {
        const docRef = await set(ref(firebaseDatabase, path), data);
        return docRef;
    } catch (error: any) {
        return {
            message: error.message,
            stack: error.stack,
            errorCode: error.code,
            errorType: error.type,
            name: error.name,
        } as Error;
    }
}

export const updateWithPath =async (path: string, data: Object): Promise<any> => {
    try {
        const docRef = await update(ref(firebaseDatabase, path), data);
        return docRef;
    } catch (error: any) {
        return {
            message: error.message,
            stack: error.stack,
            errorCode: error.code,
            errorType: error.type,
            name: error.name,
        } as Error;
    }
}
export const updateWithUserID =async (path: string, id: string, data: Object): Promise<any> => {
    try {
        const docRef = await update(ref(firebaseDatabase, `${path}/${id}`), data);
        return docRef;
    } catch (error: any) {
        return {
            message: error.message,
            stack: error.stack,
            errorCode: error.code,
            errorType: error.type,
            name: error.name,
        } as Error;
    }
}

export const removeWithPath =async (path: string): Promise<any> => {
    try {
        const docRef = await remove(ref(firebaseDatabase, path));
        return docRef;
    } catch (error: any) {
        return {
            message: error.message,
            stack: error.stack,
            errorCode: error.code,
            errorType: error.type,
            name: error.name,
        } as Error;
    }
}
export const removeWithUserID =async (path: string, id: string): Promise<any> => {
    try {
        const docRef = await remove(ref(firebaseDatabase, `${path}/${id}`));
        return docRef;
    } catch (error: any) {
        return {
            message: error.message,
            stack: error.stack,
            errorCode: error.code,
            errorType: error.type,
            name: error.name,
        } as Error;
    }
}

export const getWithPath =async (path: string): Promise<any> => {
    try {
        const snapShot = await get(ref(firebaseDatabase, path));
        return snapShot;
    } catch (error: any) {
        return {
            message: error.message,
            stack: error.stack,
            errorCode: error.code,
            errorType: error.type,
            name: error.name,
        } as Error;
    }
}
export const getWithUserID =async (path: string, id: string): Promise<any> => {
    try {
        const snapShot = await get(ref(firebaseDatabase, `${path}/${id}`));
        return snapShot;
    } catch (error: any) {
        return {
            message: error.message,
            stack: error.stack,
            errorCode: error.code,
            errorType: error.type,
            name: error.name,
        } as Error;
    }
}
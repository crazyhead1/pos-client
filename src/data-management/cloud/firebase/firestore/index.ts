// Add a second document with a generated ID.
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"; 
import { firebaseFirestore } from "../../../../services";
import {Error} from '../../../../interfaces/error';

export const getDocument = async (collectionName: string, id:string): Promise<any> => {
    try {
        const docRef = await getDoc(doc(firebaseFirestore, `${collectionName}/${id}`));
        const docData = docRef.exists() ? docRef.data() : null;
        return docData;
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

export const getDocuments = async (collectionName: string): Promise<any> => {
    try {
        const querySnapshot = await getDocs(collection(firebaseFirestore, collectionName));
        const documets = querySnapshot.docs;
        return documets;
    } catch (error) {
        return {
            message: error.message,
            stack: error.stack,
            errorCode: error.code,
            errorType: error.type,
            name: error.name,
        } as Error;
    }
}

export const addDocument = async (collectionName: string, data: Object): Promise<any> => {
    try {
        const docRef = await addDoc(collection(firebaseFirestore, collectionName), data);
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

// export const getDocumentFromCache = async (path: string): Promise<any> => {
//     try {
//         const docRef = await getDocumentFromCache(path);
//         const docData = docRef.exists() ? docRef.data() : null;
//         return docData;
//     } catch (error: any) {
//         return {
//             message: error.message,
//             stack: error.stack,
//             errorCode: error.code,
//             errorType: error.type,
//             name: error.name,
//         } as Error;
//     }
    
// }

export const updateDocument = async (collectionName: string, id:string, data: any): Promise<any> => {
    try {
        const docRef = await updateDoc(doc(firebaseFirestore,`${collectionName}/${id}`), data);
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

export const deleteDocument = async (collectionName: string, id:string): Promise<any> => {
    try {
        const docRef = await deleteDoc(doc(firebaseFirestore, `${collectionName}/${id}`));
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
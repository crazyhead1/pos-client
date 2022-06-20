// Add a second document with a generated ID.
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"; 
import { firebaseFirestore } from "../../../../services";
import ErrorInterface from '../../../../interfaces/error';

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
        } as ErrorInterface;
    }
    
}

export const getDocuments = async (collectionName: string): Promise<any> => {
    try {
        const querySnapshot = await getDocs(collection(firebaseFirestore, collectionName));
        const documets = querySnapshot.docs;
        return documets as any[];
    } catch (error) {
        return {
            message: error.message,
            stack: error.stack,
            errorCode: error.code,
            errorType: error.type,
            name: error.name,
        } as ErrorInterface;
    }
}

export const addDocument = async (collectionName: string, data: any): Promise<any> => {
    try {
        const existingDocRef = await getDoc(doc(firebaseFirestore, `${collectionName}/${data?.id}`));
        if (existingDocRef?.data()) {
            throw new Error("Already exists");
        }
        const docRef = await setDoc(doc(firebaseFirestore, collectionName,data?.id), data);
        return docRef;
      } catch (error: any) {
        throw new Error(error);
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
        } as ErrorInterface;
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
        } as ErrorInterface;
    }
}
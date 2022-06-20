import { addDoc, collection } from "firebase/firestore";
import { firebaseFirestore } from "../../..";
import { addDocument } from "../../../../data-management/cloud/firebase/firestore";
import { LOGS_COLLECTION } from "../../../../ui/common/constants/collections";

interface LogInterface {
    type?: string;
    message?: string;
    path?: string;
}

export const addLog = async ({
    type = "error",
    message,
    path = "not specified"
}: LogInterface) => {
    const writeResult = await addDoc(collection(firebaseFirestore,LOGS_COLLECTION), {type, message, path, timestamp: new Date().toISOString()});
    return writeResult;
}
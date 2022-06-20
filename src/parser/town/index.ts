import { addTown, deleteTown, getTowns, updateTown } from "../../data-management/cloud/firebase/firestore/town";

// get towns from inventory
export const gettowns = async () => {
    const towns = await getTowns();
    return towns.map(town => town.data());
}

// add town in inventory
export const addtown = async (town: any) => {
    const townAdded = await addTown(town);
    return townAdded;
}
//delete town api
export const deletetown = async (id: string) => {
    const townDeleted = await deleteTown(id);
    return townDeleted;
}
//edit town api
export const edittown = async (id: string, town: any) => {
    const townEdited = await updateTown(id,town);
    return townEdited;
}
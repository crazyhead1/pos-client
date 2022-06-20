import { addArea, deleteArea, getAreas, updateArea } from "../../data-management/cloud/firebase/firestore/area";

// get Areas from inventory
export const getAllAreas = async () => {
    const Areas = await getAreas();
    return Areas.map(Area => Area.data());
}

// add Area in inventory
export const addOneArea = async (Area: any) => {
    const AreaAdded = await addArea(Area);
    return AreaAdded;
}
//delete Area api
export const deleteOneArea = async (id: string) => {
    const AreaDeleted = await deleteArea(id);
    return AreaDeleted;
}
//edit Area api
export const editArea = async (id: string, Area: any) => {
    const AreaEdited = await updateArea(id,Area);
    return AreaEdited;
}
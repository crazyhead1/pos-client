import { addCategory, deleteCategory,  getCategories as getOneTypeCategories, updateCategory } from "../../data-management/cloud/firebase/firestore/categories";
import { SUB_CATEGORIES_COLLECTION } from "../../ui/common/constants/collections";

// get Categorys from inventory
export const getAllCategories = async () => {
    let categories = {} as any;
    for (const category in SUB_CATEGORIES_COLLECTION) {
        categories[SUB_CATEGORIES_COLLECTION[category]] = await getCategories(SUB_CATEGORIES_COLLECTION[category]);
    }
    return categories;
}

export const getCategories = async (type: string) => {
    const Categorys = await getOneTypeCategories(type);
    return Categorys.map(Category => Category.data()) as any[];
}
// add Category in inventory
export const addOneCategory = async (Category: any, type: string) => {
    const CategoryAdded = await addCategory(Category,type);
    return CategoryAdded;
}
//delete Category api
export const deleteOneCategory = async (id: string, type: string) => {
    const CategoryDeleted = await deleteCategory(id ,type);
    return CategoryDeleted;
}
//edit Category api
export const editCategory = async (id: string, Category: any, type: string) => {
    const CategoryEdited = await updateCategory(id,Category,type);
    return CategoryEdited;
}
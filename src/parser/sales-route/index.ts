import { addSalesRoute, deleteSalesRoute, getSalesRoutes, updateSalesRoute } from "../../data-management/cloud/firebase/firestore/sales-route";

// get SalesRoutes from inventory
export const getAllSalesRoutes = async () => {
    const SalesRoutes = await getSalesRoutes();
    return SalesRoutes.map(SalesRoute => SalesRoute.data());
}

// add SalesRoute in inventory
export const addOneSalesRoute = async (SalesRoute: any) => {
    const SalesRouteAdded = await addSalesRoute(SalesRoute);
    return SalesRouteAdded;
}
//delete SalesRoute api
export const deleteOneSalesRoute = async (id: string) => {
    const SalesRouteDeleted = await deleteSalesRoute(id);
    return SalesRouteDeleted;
}
//edit SalesRoute api
export const editSalesRoute = async (id: string, SalesRoute: any) => {
    const SalesRouteEdited = await updateSalesRoute(id,SalesRoute);
    return SalesRouteEdited;
}
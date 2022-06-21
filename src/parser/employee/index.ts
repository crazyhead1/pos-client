import { addEmployee, deleteEmployee, getEmployees, updateEmployee } from "../../data-management/cloud/firebase/firestore/employee";

// get Employees from inventory
export const getAllEmployees = async () => {
    const Employees = await getEmployees();
    return Employees.map(Employee => Employee.data());
}

// add Employee in inventory
export const addOneEmployee = async (Employee: any) => {
    const EmployeeAdded = await addEmployee(Employee);
    return EmployeeAdded;
}
//delete Employee api
export const deleteOneEmployee = async (id: string) => {
    const EmployeeDeleted = await deleteEmployee(id);
    return EmployeeDeleted;
}
//edit Employee api
export const editEmployee = async (id: string, Employee: any) => {
    const EmployeeEdited = await updateEmployee(id,Employee);
    return EmployeeEdited;
}
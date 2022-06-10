export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    personalPhoneNumber: string;
    officePhoneNumber: string;
    homePhoneNumber: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    department: string;
    jobTitle: string;
    isActive: boolean;
    isAdmin: boolean;
    reportsTo: Employee;
    photo: string;
}
import { Company } from "../company";

export interface Supplier {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    phoneNumber: string;
    isActive: boolean;
    company: Company;
}
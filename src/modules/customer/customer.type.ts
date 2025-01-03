export type TCustomer = {
    name: string;
    mobile: string;
    email?: string;
    address: string;
    gender: "Male" | "Female" | "Other";
    nid?: number;
    dob?: string;
    due?: number;
    balance?: number;
}
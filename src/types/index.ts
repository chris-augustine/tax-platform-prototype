export type UserRole = "individual_taxpayer" | "business_owner" | "tax_preparer" | "tax_reviewer" | "firm_admin" | "seasonal_staff";

export interface User{
    id: string;
    name: string;
    role: UserRole;
}
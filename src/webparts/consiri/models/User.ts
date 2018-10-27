export type UserRole = "bot" | "channel" | "user";

export interface User {
    id: string,
    name?: string,
    iconUrl?: string,
    role?: UserRole
}
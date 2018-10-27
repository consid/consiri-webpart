import { User } from "./User";

export interface Activity {
    type: string,
    channelData?: any,
    channelId?: string,
    conversation?: { id: string },
    eTag?: string,
    from: User,
    id?: string,
    timestamp?: string
}
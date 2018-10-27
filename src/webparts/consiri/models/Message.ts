import { Activity } from "./Activity";

export interface Message extends Activity {
    type: "message",
    text?: string,
}
export type Priority = "low" | "medium" | "high";

export interface Task {
    id: string;
    title: string;
    status: "to-do" | "in-progress" | "done";
    priority: Priority;
}
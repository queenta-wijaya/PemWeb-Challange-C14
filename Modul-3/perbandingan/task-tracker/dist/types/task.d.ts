export type TaskStatus = "todo" | "doing" | "done";
export declare const VALID_STATUSES: TaskStatus[];
export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
    dueDate?: string | undefined;
}
export type NewTask = Omit<Task, "id" | "status">;
export type TaskPatch = Partial<Omit<Task, "id">>;
//# sourceMappingURL=task.d.ts.map
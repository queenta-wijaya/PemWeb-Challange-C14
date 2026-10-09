export type TaskStatus = "todo" | "doing" | "done";

export const VALID_STATUSES: TaskStatus[] = ["todo", "doing", "done"];

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  dueDate?: string | undefined; // format ISO: 2026-10-31
}

export type NewTask = Omit<Task, "id" | "status">;
export type TaskPatch = Partial<Omit<Task, "id">>;
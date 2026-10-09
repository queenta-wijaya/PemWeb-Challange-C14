import type { Task, NewTask, TaskPatch } from "./types/index.js";
export declare function getAllTasks(): Promise<Task[]>;
export declare function addTask(newTask: NewTask): Promise<Task>;
export declare function updateTask(id: number, patch: TaskPatch): Promise<Task | null>;
export declare function removeTask(id: number): Promise<boolean>;
//# sourceMappingURL=taskService.d.ts.map
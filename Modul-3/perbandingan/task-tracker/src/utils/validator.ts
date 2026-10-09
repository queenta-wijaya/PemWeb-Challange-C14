import { VALID_STATUSES } from "../types/index.js";
import type { Task, TaskStatus } from "../types/index.js";

export function isTaskStatus(status: unknown): status is TaskStatus {
  return typeof status === "string" && VALID_STATUSES.includes(status as TaskStatus);
}

export function isTask(data: unknown): data is Task {
  if (typeof data !== "object" || data === null) return false;
  
  const t = data as Record<string, unknown>;
  
  const hasId = typeof t.id === "number";
  const hasTitle = typeof t.title === "string";
  const hasStatus = isTaskStatus(t.status);
  const hasValidDueDate = t.dueDate === undefined || typeof t.dueDate === "string";

  return hasId && hasTitle && hasStatus && hasValidDueDate;
}

export function isTaskArray(data: unknown): data is Task[] {
  return Array.isArray(data) && data.every(isTask);
}

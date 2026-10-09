import { VALID_STATUSES } from "../types/index.js";
export function isTaskStatus(status) {
    return typeof status === "string" && VALID_STATUSES.includes(status);
}
export function isTask(data) {
    if (typeof data !== "object" || data === null)
        return false;
    const t = data;
    const hasId = typeof t.id === "number";
    const hasTitle = typeof t.title === "string";
    const hasStatus = isTaskStatus(t.status);
    const hasValidDueDate = t.dueDate === undefined || typeof t.dueDate === "string";
    return hasId && hasTitle && hasStatus && hasValidDueDate;
}
export function isTaskArray(data) {
    return Array.isArray(data) && data.every(isTask);
}
//# sourceMappingURL=validator.js.map
import { loadTasks, saveTasks } from "./storage.js";
export async function getAllTasks() {
    return await loadTasks();
}
export async function addTask(newTask) {
    const tasks = await loadTasks();
    const id = tasks.length > 0
        ? Math.max(...tasks.map(t => t.id)) + 1
        : 1;
    const task = {
        id,
        title: newTask.title,
        status: "todo",
        dueDate: newTask.dueDate
    };
    tasks.push(task);
    await saveTasks(tasks);
    return task;
}
export async function updateTask(id, patch) {
    const tasks = await loadTasks();
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1)
        return null;
    const updatedTask = {
        ...tasks[index],
        ...patch
    };
    tasks[index] = updatedTask;
    await saveTasks(tasks);
    return updatedTask;
}
export async function removeTask(id) {
    const tasks = await loadTasks();
    const initialLength = tasks.length;
    const filteredTasks = tasks.filter(t => t.id !== id);
    if (filteredTasks.length === initialLength)
        return false;
    await saveTasks(filteredTasks);
    return true;
}
//# sourceMappingURL=taskService.js.map
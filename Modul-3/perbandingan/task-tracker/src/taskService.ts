import { loadTasks, saveTasks } from "./storage.js";
import type { Task, NewTask, TaskPatch, TaskStatus } from "./types/index.js";

export async function getAllTasks(): Promise<Task[]> {
  return await loadTasks();
}

export async function addTask(newTask: NewTask): Promise<Task> {
  const tasks = await loadTasks();
  
  const id = tasks.length > 0 
    ? Math.max(...tasks.map(t => t.id)) + 1 
    : 1;

  const task: Task = {
    id,
    title: newTask.title,
    status: "todo",
    dueDate: newTask.dueDate
  };

  tasks.push(task);
  await saveTasks(tasks);
  return task;
}

export async function updateTask(id: number, patch: TaskPatch): Promise<Task | null> {
  const tasks = await loadTasks();
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) return null;

  const updatedTask: Task = {
    ...tasks[index]!,
    ...patch
  };

  tasks[index] = updatedTask;
  await saveTasks(tasks);
  return updatedTask;
}

export async function removeTask(id: number): Promise<boolean> {
  const tasks = await loadTasks();
  const initialLength = tasks.length;
  const filteredTasks = tasks.filter(t => t.id !== id);

  if (filteredTasks.length === initialLength) return false;

  await saveTasks(filteredTasks);
  return true;
}

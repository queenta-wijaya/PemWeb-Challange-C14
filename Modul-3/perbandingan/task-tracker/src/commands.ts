import { addTask, getAllTasks, removeTask, updateTask } from "./taskService.js";
import type { NewTask } from "./types/index.js";

export async function handleAdd(args: string[]): Promise<void> {
  const title = args[0];
  if (!title || title.trim() === "") {
    console.error("Error: Judul task tidak boleh kosong.");
    return;
  }

  const dueDate = args[1]; // Bisa undefined
  const newTask: NewTask = { title, dueDate };

  const task = await addTask(newTask);
  console.log(`Task berhasil ditambahkan (ID: ${task.id})`);
}

export async function handleList(args: string[] = []): Promise<void> {
  let tasks = await getAllTasks();

  const statusIndex = args.indexOf("--status");
  if (statusIndex !== -1 && args[statusIndex + 1]) {
    const filterStatus = args[statusIndex + 1]!.toLowerCase();
    tasks = tasks.filter(t => t.status === filterStatus);
  }
  
  if (tasks.length === 0) {
    console.log("Daftar task kosong.");
    return;
  }

  console.log("\nDAFTAR TASK:");
  console.log("--------------------------------------------------");
  tasks.forEach(t => {
    const due = t.dueDate ? ` [Due: ${t.dueDate}]` : "";
    const status = t.status.toUpperCase().padEnd(6);
    console.log(`${t.id}. [${status}] ${t.title}${due}`);
  });
  console.log("--------------------------------------------------\n");
}

export async function handleDone(args: string[]): Promise<void> {
  const id = parseInt(args[0] || "", 10);
  if (isNaN(id)) {
    console.error("Error: ID harus berupa angka.");
    return;
  }

  const updated = await updateTask(id, { status: "done" });
  if (!updated) {
    console.error(`Error: Task dengan ID ${id} tidak ditemukan.`);
  } else {
    console.log(`Task ${id} berhasil ditandai selesai.`);
  }
}

export async function handleRemove(args: string[]): Promise<void> {
  const id = parseInt(args[0] || "", 10);
  if (isNaN(id)) {
    console.error("Error: ID harus berupa angka.");
    return;
  }

  const success = await removeTask(id);
  if (!success) {
    console.error(`Error: Task dengan ID ${id} tidak ditemukan.`);
  } else {
    console.log(`Task ${id} berhasil dihapus.`);
  }
}

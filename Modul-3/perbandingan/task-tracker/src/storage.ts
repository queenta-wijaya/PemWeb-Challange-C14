import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { Task } from "./types/index.js";
import { isTaskArray } from "./utils/validator.js";

const DATA_DIR = join(process.cwd(), "data");
const DATA_FILE = join(DATA_DIR, "tasks.json");

/**
 * Membaca daftar task dari data/tasks.json.
 * Mengembalikan array kosong jika file tidak ditemukan.
 * Melempar error jika JSON rusak atau struktur data tidak valid.
 */
export async function loadTasks(): Promise<Task[]> {
  try {
    const content = await readFile(DATA_FILE, "utf-8");
    const data: unknown = JSON.parse(content);

    if (!isTaskArray(data)) {
      throw new Error("Struktur data di tasks.json tidak valid.");
    }

    return data;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return [];
    }
    
    if (error instanceof SyntaxError) {
      throw new Error(`Gagal membaca tasks.json: JSON rusak. (${error.message})`);
    }

    throw error;
  }
}

/**
 * Menyimpan daftar task ke data/tasks.json.
 * Otomatis membuat folder data/ jika belum ada.
 */
export async function saveTasks(tasks: Task[]): Promise<void> {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    const content = JSON.stringify(tasks, null, 2);
    await writeFile(DATA_FILE, content, "utf-8");
  } catch (error) {
    throw new Error(`Gagal menyimpan data: ${error instanceof Error ? error.message : String(error)}`);
  }
}

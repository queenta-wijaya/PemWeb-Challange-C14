import type { Task } from "./types/index.js";
/**
 * Membaca daftar task dari data/tasks.json.
 * Mengembalikan array kosong jika file tidak ditemukan.
 * Melempar error jika JSON rusak atau struktur data tidak valid.
 */
export declare function loadTasks(): Promise<Task[]>;
/**
 * Menyimpan daftar task ke data/tasks.json.
 * Otomatis membuat folder data/ jika belum ada.
 */
export declare function saveTasks(tasks: Task[]): Promise<void>;
//# sourceMappingURL=storage.d.ts.map
import { handleAdd, handleDone, handleList, handleRemove } from "./commands.js";

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0]?.toLowerCase();
  const commandArgs = args.slice(1);

  switch (command) {
    case "add":
      await handleAdd(commandArgs);
      break;
    case "list":
      await handleList(commandArgs);
      break;
    case "done":
      await handleDone(commandArgs);
      break;
    case "remove":
      await handleRemove(commandArgs);
      break;
    case "help":
    case undefined:
      showUsage();
      break;
    default:
      console.error(`Error: Perintah "${command}" tidak dikenal.`);
      showUsage();
      process.exit(1);
  }
}

function showUsage(): void {
  console.log(`
Task Tracker CLI
----------------
Penggunaan:
  npm start -- add <title> [dueDate]       Tambah task baru (dueDate format: YYYY-MM-DD)
  npm start -- list [--status <status>]    Tampilkan task (filter: todo, doing, done)
  npm start -- done <id>                   Tandai task sebagai selesai
  npm start -- remove <id>                 Hapus task dari daftar
  npm start -- help                        Tampilkan bantuan ini
  `);
}

main().catch(error => {
  console.error("Terjadi kesalahan sistem:");
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});

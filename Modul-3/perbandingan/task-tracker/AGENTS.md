# AGENTS.md

## Proyek
Task Tracker CLI berbasis Node.js + TypeScript. Data disimpan di `data/tasks.json`.

## Perintah
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Jalankan: `npm start -- <perintah>`

## Aturan kode
- TypeScript `strict`. **Dilarang** memakai `any`, `@ts-ignore`, atau `as` kecuali ada komentar alasannya.
- Semua tipe dan interface ada di `src/types/` dan diekspor lewat `index.ts`.
- Fungsi publik wajib punya type annotation untuk parameter dan return.
- Data dari luar (argumen CLI, isi JSON) bertipe `unknown` lalu divalidasi.
- Jangan menambah dependency baru tanpa meminta persetujuan.

## Alur kerja
1. Jelaskan rencana singkat sebelum mengedit.
2. Setelah mengedit, jalankan `npm run typecheck` dan perbaiki semua error.
3. Jangan mengubah file di luar yang dibutuhkan tugas.
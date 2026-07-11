# Project photos

Each folder here is one project (the folder name matches the project `id` in
`src/data/projects.ts`). Every project has three images:

- `cover.jpg` — the grid thumbnail **and** the first image in the gallery
- `02.jpg` — second gallery image
- `03.jpg` — third gallery image

## To use your own photo

Just **replace the file with the same name**. For example, drop your real Monolith House photo in
as `monolith-house/cover.jpg`. No code change needed — rebuild (`npm run build`) or refresh the
dev server and it appears.

## Tips (keep it fast & free)

- Use **JPG** or **WebP**, around **1600px** on the long edge.
- Compress for free at https://squoosh.app or https://tinypng.com — aim for **under ~300 KB**.
- Keep the same filename/extension. If you switch to `.webp`, update the `cover`/`shot` helpers at
  the top of `src/data/projects.ts`.

## To add a new project

Create a new folder named after the new project `id` with `cover.jpg`, `02.jpg`, `03.jpg`, then
add a matching entry to the `projects` array in `src/data/projects.ts`.

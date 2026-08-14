import fs from "node:fs";
import path from "node:path";

const PHOTO_ROOT = "images/photos";
const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

// Resolves a photo slot (e.g. "services/hard-fm" or "home-hero") to a web
// path if a matching file exists under public/images/photos/, else null so
// the UI falls back to a placeholder. Server-side only — uses the filesystem.
export function photoFor(slot: string): string | null {
  for (const ext of EXTENSIONS) {
    const rel = `${PHOTO_ROOT}/${slot}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) {
      return `/${rel}`;
    }
  }
  return null;
}

// Same convention for an optional hero film clip: drop home-hero.mp4 (or
// .webm) into public/images/photos/ and the homepage uses it automatically.
export function videoFor(slot: string): string | null {
  for (const ext of ["mp4", "webm"]) {
    const rel = `${PHOTO_ROOT}/${slot}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) {
      return `/${rel}`;
    }
  }
  return null;
}

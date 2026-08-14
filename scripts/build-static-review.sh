#!/usr/bin/env bash
# Builds the fully static review site (out/) — the real React experience,
# deployable to any static host by drag and drop. The API route is set aside
# for the export (route handlers are incompatible with output:"export"); the
# form acknowledges submissions client-side via NEXT_PUBLIC_STATIC_PREVIEW.
set -euo pipefail
cd "$(dirname "$0")/.."

API_DIR="src/app/api"
API_STASH=".api-stash"

cleanup() {
  if [ -d "$API_STASH" ]; then
    rm -rf "$API_DIR"
    mv "$API_STASH" "$API_DIR"
  fi
}
trap cleanup EXIT

mv "$API_DIR" "$API_STASH"
STATIC_EXPORT=1 NEXT_PUBLIC_STATIC_PREVIEW=1 npx next build
echo "Static review site written to out/"

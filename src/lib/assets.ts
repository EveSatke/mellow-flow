const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string) {
  if (path.startsWith('http')) return path;
  return `${basePath}${path}`;
}

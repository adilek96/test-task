"use client";

export function FormErrors({ error }: { error: string[] }) {
  if (!error) return null;
  return <div className="text-pink-500 text-xs italic mt-1 py-2">{error}</div>;
}

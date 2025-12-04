export async function apiFetch<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}

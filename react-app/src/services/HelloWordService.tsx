export async function getHelloWord() {
  const response = await fetch('/api/test')
  return await response.json()
}

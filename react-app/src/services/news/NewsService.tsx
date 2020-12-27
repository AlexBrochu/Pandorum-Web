export async function getAllNewsFile(language: string) {
  const response = await fetch('/api/news', {
    method: 'GET',
    headers: new Headers({ language }),
  })
  return await response.json()
}

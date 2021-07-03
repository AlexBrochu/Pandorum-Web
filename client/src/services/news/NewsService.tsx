export async function getAllNewsFile(language: string) {
  const response = await fetch('/api/v1/news', {
    method: 'GET',
    headers: new Headers({ language }),
  })
  return await response.json()
}

export async function getAllNewsFileProtected(language: string, token: string) {
  const response = await fetch('/api/v1/protected/news', {
    method: 'GET',
    headers: new Headers({ language, Authorization: `Bearer ${token}` }),
  })
  return await response.json()
}

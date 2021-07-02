export async function login() {
  const response = await fetch('/api/login', {
    method: 'GET'
  })
  return await response.json()
}

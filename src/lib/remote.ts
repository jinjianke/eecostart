export async function fetchWithTimeout(
  input: RequestInfo | URL,
  init: RequestInit = {},
  timeout = 5000,
): Promise<Response> {
  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(input, { ...init, signal: controller.signal })
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    return response
  } finally {
    window.clearTimeout(timer)
  }
}

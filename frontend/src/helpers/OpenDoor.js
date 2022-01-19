let isRunning = false
export async function openDoor() {
  let complete = false
  let triesBeforeGiveUp = 3
  // ensure the call isn't done more than once
  if (isRunning) {
    return
  }
  isRunning = true
  while (!complete) {
    // retry on fail
    const url = getAlohomoraEndpoint();

    try {
      return await (await fetch(url)).json()
    } catch (err) {
      if (--triesBeforeGiveUp === 0) {
        return false
      }
      await new Promise(res => {
        setTimeout(() => res(), 1500)
      })
    }
  }
}

export function getAlohomoraEndpoint() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8080/unlock'
  }
  return `https://api.klak.in/unlock`
}

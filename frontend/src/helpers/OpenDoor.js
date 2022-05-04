let isRunning = false
export async function openDoor(doorID) {
  let complete = false
  let triesBeforeGiveUp = 3
  
  console.log(doorID);
  // ensure the call isn't done more than once
  if (isRunning) {
    return
  }
  isRunning = true
  while (!complete) {
    // retry on fail
    const url = getAlohomoraEndpoint(doorID);

    try {
      return await (await fetch(url)).json()
    } catch (err) {
      if (--triesBeforeGiveUp === 0) {
        return false
      }
      await new Promise(res => {
        setTimeout(() => res(), 3000)
      })
    }
  }
}

export function getAlohomoraEndpoint(doorID) {
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:8080/unlock/${doorID}`
  }
  return `https://api.klak.in/unlock/${doorID}`
}

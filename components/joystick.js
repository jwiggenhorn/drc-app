import { useContext, useEffect, useState } from 'react'
import { Joystick } from 'react-joystick-component'
import { CaptureContext } from '../App'
import { API_URL } from '../environment-images'

export default function JoystickWrapper({ sensitivity }) {
  const { startTime, isCapturing, participantData } = useContext(CaptureContext)
  const [data] = useState([])

  useEffect(() => {
    participantData.joystickInputs = data
  }, [isCapturing])

  function handleMove(e) {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, x: e.x, y: e.y })
  }

  function handleStop() {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, value: 0 })
  }

  function handleSensitivityImage() {
    let baseImageURL = API_URL

    if (sensitivity == "low")
    {
      baseImageURL += "/joystick-background-low-sensitivity.png"
    }
    else if (sensitivity == "high")
    {
      baseImageURL += "/joystick-background-high-sensitivity.png"
    }

    return baseImageURL
  }

  return (
    <Joystick
      move={isCapturing ? handleMove : null}
      stop={isCapturing ? handleStop : null}
      throttle={100}
      stickImage={API_URL + "/stick-image.png"}
      baseImage={handleSensitivityImage()}
    />
  )
}

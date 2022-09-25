import { useContext, useEffect, useState } from 'react'
import { Joystick } from 'react-joystick-component'
import { CaptureContext } from '../App'

export default function JoystickWrapper() {
  const { startTime, isCapturing, participantData } = useContext(CaptureContext)
  const [data] = useState([])

  useEffect(() => {
    participantData.joystickInputs = data
  }, [isCapturing])

  function handleMove(e) {
    const timestamp = Date.now() - startTime
    // TODO: move this calculation so it doesn't happen in real time
    const radians = Math.atan2(e.y, e.x) - Math.PI / 2

    let degrees = ((radians * 180) / Math.PI) * -1
    if (degrees < 0) degrees += 360.0

    let value = Math.round((degrees * 2) / 60)
    if (value == 0) value = 12

    data.push({ timestamp, value })
  }

  function handleStop() {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, value: 0 })
  }

  return (
    <Joystick
      move={isCapturing ? handleMove : null}
      stop={isCapturing ? handleStop : null}
      throttle={10}
    />
  )
}

import { useContext, useEffect, useState } from 'react'
import { Joystick } from 'react-joystick-component'
import { CaptureContext } from '../App'

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

  // TODO: update graphics for sensitivity
  return (
    <Joystick
      move={isCapturing ? handleMove : null}
      stop={isCapturing ? handleStop : null}
      throttle={100}
    />
  )
}

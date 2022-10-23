import { useContext, useEffect, useState } from 'react'
import Joystick from './joystick'
import { CaptureContext } from '../App'
import { lowSensitivityJoystick, highSensitivityJoystick } from '../images'

export default function JoystickWrapper({ sensitivity }) {
  const { startTime, isCapturing, participantData } = useContext(CaptureContext)
  const [data] = useState([])

  useEffect(() => {
    participantData.joystickInputs = data
  }, [isCapturing])

  function handleMove(e) {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, x: e.dx, y: e.dy })
  }

  function handleStop() {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, value: 0 })
  }

  return (
    <Joystick
      onMove={isCapturing ? handleMove : null}
      onStop={isCapturing ? handleStop : null}
      stickImage={
        sensitivity == 'high' ? highSensitivityJoystick : lowSensitivityJoystick
      }
    />
  )
}

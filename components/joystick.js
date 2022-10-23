import { useContext, useEffect, useState } from 'react'
import Joystick from './custom-joystick'
import { CaptureContext } from '../App'
import { IMAGES_URL } from '../environment'

export default function JoystickWrapper({ sensitivity }) {
  const joystickImage =
    IMAGES_URL +
    (sensitivity == 'low'
      ? '/low-sensitivity-joystick.png'
      : '/high-sensitivity-joystick.png')
  const { startTime, isCapturing, participantData } = useContext(CaptureContext)
  const [data] = useState([])

  useEffect(() => {
    participantData.joystickInputs = data
  }, [isCapturing])

  function handleMove(e) {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, x: e.moveX, y: e.moveY })
  }

  function handleStop() {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, value: 0 })
  }

  return (
    <Joystick
      onMove={isCapturing ? handleMove : null}
      onStop={isCapturing ? handleStop : null}
      stickImage={joystickImage}
      // baseColor="#5A5A5A"
    />
  )
}

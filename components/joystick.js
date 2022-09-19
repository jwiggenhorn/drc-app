import { useContext } from 'react'
import { Joystick } from 'react-joystick-component'
import { TimeContext } from '../App'

export default function JoystickWrapper() {
  const { startTime } = useContext(TimeContext)
  const data = []

  function handleMove(e) {
    const timestamp = Date.now() - startTime
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

  return <Joystick move={handleMove} stop={handleStop} throttle={10} />
}

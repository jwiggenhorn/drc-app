import { useContext } from 'react'
import { Joystick } from 'react-joystick-component'
import { TimeContext } from '../App'

export default function JoystickControl() {
  const { startTime } = useContext(TimeContext)

  const data = []
  function handleMove(e) {
    const timestamp = Date.now() - startTime

    // need to figure out the conversion from x, y coordinates
    // to clock face digits. for now just using x value as placeholder
    // (we should probably do the conversion afterwards when posting the data
    //  to the backend so that we don't lag during data capture...
    //  or the API could handle it)

    data.push({ value: e.x, timestamp })
  }

  return (
    <Joystick move={handleMove} stop={() => console.log(data)} throttle={10} />
  )
}

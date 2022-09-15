import { Joystick } from 'react-joystick-component'

export default function JoystickControl() {
  const data = []
  function handleMove(e) {
    const startTime = 0 // placeholder, need to get the startTime from the header somehow
    const timestamp = Date.now() - startTime

    // also need to figure out the conversion from x, y coordinates
    // to clock face digits. for now just using x value as placeholder

    data.push({ value: e.x, timestamp })
  }

  return (
    <Joystick move={handleMove} stop={() => console.log(data)} throttle={10} />
  )
}

import { Joystick } from 'react-joystick-component'

export function SpawnJoyStick(){

    const xArray = [];
    const yArray = [];
    var a = 0;

    return (
        <Joystick move={(e) => {
            xArray[a] = e.x;
            yArray[a] = e.y;
            ++a;
        }} 
        throttle={100}/>
    )
}
import { Text, View } from 'react-native'
import { styles } from '../styles'
import Slider from '../components/slider'
import Joystick from '../components/joystick'
import Switch from '../components/switch'
import HoldButton from '../components/hold-button'
import MultiControls from '../components/multi-controls'

export default function DataCapture({ route }) {
  return (
    <View style={styles.dataCaptureContainer}>
      <Control
        profile={route.params.profile}
        joystickSensitivity={route.params.joystickSensitivity}
      />
    </View>
  )
}

function Control({ profile, joystickSensitivity }) {
  switch (profile) {
    case 0:
      return <Slider vertical />
    case 1:
      return <Slider />
    case 2:
      return <Joystick sensitivity={joystickSensitivity} />
    case 3:
      return <Switch />
    case 4:
      return (
        <MultiControls>
          <Slider style={{ paddingLeft: 100 }} />
          <Slider style={{ paddingLeft: 30 }} vertical />
        </MultiControls>
      )
    case 5:
      return (
        <MultiControls>
          <Joystick sensitivity={joystickSensitivity} />
          <Slider style={{ paddingLeft: 30 }} vertical />
        </MultiControls>
      )
    case 6:
      return <HoldButton text="PUSH" />
    case 7:
      return (
        <MultiControls>
          <HoldButton text="  1  " number="One" />
          <HoldButton text="  2  " number="Two" />
        </MultiControls>
      )
    case 8:
      return (
        <MultiControls>
          <HoldButton text="  1  " number="One" />
          <HoldButton text="  2  " number="Two" />
          <HoldButton text="  3  " number="Three" />
        </MultiControls>
      )
    case 9:
      return (
        <MultiControls>
          <Slider style={{ paddingLeft: 30 }} vertical />
          <HoldButton text="PUSH" />
        </MultiControls>
      )
    case 10:
      return (
        <MultiControls>
          <Joystick sensitivity={joystickSensitivity} />
          <HoldButton text="PUSH" />
        </MultiControls>
      )
    case 11:
      return (
        <MultiControls>
          <Slider style={{ paddingLeft: 30 }} vertical />
          <Joystick sensitivity={joystickSensitivity} />
        </MultiControls>
      )
    case 12:
      return (
        <MultiControls>
          <Slider style={{ paddingLeft: 100 }} />
          <Joystick sensitivity={joystickSensitivity} />
        </MultiControls>
      )
    case 13:
      return (
        <MultiControls>
          <Switch />
          <Slider style={{ paddingLeft: 30 }} vertical />
        </MultiControls>
      )
    case 14:
      return (
        <MultiControls>
          <Switch />
          <Slider style={{ paddingRight: 30 }} />
        </MultiControls>
      )
    case 15:
      return (
        <MultiControls>
          <Switch />
          <Joystick sensitivity={joystickSensitivity} />
        </MultiControls>
      )
    case 16:
      return (
        <MultiControls>
          <Switch number="One" />
          <Switch number="Two" />
          <Switch number="Three" />
        </MultiControls>
      )
    default:
      return <Text>Profile {profile} does not exist.</Text>
  }
}

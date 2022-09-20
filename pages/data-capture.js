import { Text, View } from 'react-native'
import { styles } from '../styles'
import Slider from '../components/slider'
import Joystick from '../components/joystick'
import Switch from '../components/switch'
import HoldButton from '../components/hold-button'
import MultiControls from '../components/multi-controls'
import ConfirmationModal from '../components/confirmation-modal'

export default function DataCapture({ route }) {
  return (
    <View style={styles.dataCaptureContainer}>
      <Control profile={route.params.profile} />
      <ConfirmationModal></ConfirmationModal>
    </View>
  )
}

function Control({ profile }) {
  switch (profile) {
    case 0:
      return <Slider vertical />
    case 1:
      return <Slider />
    case 2:
      return <Joystick />
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
          <Joystick />
          <Slider style={{ paddingLeft: 30 }} vertical />
        </MultiControls>
      )
    case 6:
      return <HoldButton text="PUSH" />
    case 7:
      return (
        <MultiControls>
          <HoldButton text="  1  " />
          <HoldButton text="  2  " />
        </MultiControls>
      )
    case 8:
      return (
        <MultiControls>
          <HoldButton text="  1  " />
          <HoldButton text="  2  " />
          <HoldButton text="  3  " />
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
          <Joystick />
          <HoldButton text="PUSH" />
        </MultiControls>
      )
    case 11:
      return (
        <MultiControls>
          <Slider style={{ paddingLeft: 30 }} vertical />
          <Joystick />
        </MultiControls>
      )
    case 12:
      return (
        <MultiControls>
          <Slider style={{ paddingLeft: 100 }} />
          <Joystick />
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
          <Joystick />
        </MultiControls>
      )
    case 16:
      return (
        <MultiControls>
          <Switch />
          <Switch />
          <Switch />
        </MultiControls>
      )
    default:
      return <Text>Profile {profile} does not exist.</Text>
  }
}

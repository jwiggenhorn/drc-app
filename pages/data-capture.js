import { Text, View, Switch, Button } from 'react-native'
import { styles } from '../styles'
import Joystick from '../components/joystick'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import ClickNHold from 'react-click-n-hold'
import MultiControls from '../components/multi-controls'

export default function DataCapture({ route }) {
  return (
    <View style={styles.dataCaptureContainer}>
      <Control profile={route.params.profile} />
    </View>
  )
}

function Control({ profile }) {
  switch (profile) {
    case 0:
      return <MultiSlider vertical />
    case 1:
      return <MultiSlider />
    case 2:
      return <Joystick />
    case 3:
      return <Switch />
    case 4:
      return (
        <MultiControls>
          <MultiSlider containerStyle={{ paddingLeft: 100 }} />
          <MultiSlider containerStyle={{ paddingLeft: 30 }} vertical />
        </MultiControls>
      )
    case 5:
      return (
        <MultiControls>
          <Joystick />
          <MultiSlider containerStyle={{ paddingLeft: 30 }} vertical />
        </MultiControls>
      )
    case 6:
      return (
        <ClickNHold>
          <Button title="PUSH" />
        </ClickNHold>
      )
    case 7:
      return (
        <MultiControls>
          <ClickNHold>
            <Button title="  1  " />
          </ClickNHold>
          <ClickNHold>
            <Button title="  2  " />
          </ClickNHold>
        </MultiControls>
      )
    case 8:
      return (
        <MultiControls>
          <ClickNHold>
            <Button title="  1  " />
          </ClickNHold>
          <ClickNHold>
            <Button title="  2  " />
          </ClickNHold>
          <ClickNHold>
            <Button title="  3  " />
          </ClickNHold>
        </MultiControls>
      )
    case 9:
      return (
        <MultiControls>
          <MultiSlider containerStyle={{ paddingLeft: 30 }} vertical />
          <ClickNHold>
            <Button title="PUSH" />
          </ClickNHold>
        </MultiControls>
      )
    case 10:
      return (
        <MultiControls>
          <Joystick />
          <ClickNHold>
            <Button title="PUSH" />
          </ClickNHold>
        </MultiControls>
      )
    case 11:
      return (
        <MultiControls>
          <MultiSlider containerStyle={{ paddingLeft: 30 }} vertical />
          <Joystick />
        </MultiControls>
      )
    case 12:
      return (
        <MultiControls>
          <MultiSlider containerStyle={{ paddingLeft: 100 }} />
          <Joystick />
        </MultiControls>
      )
    case 13:
      return (
        <MultiControls>
          <Switch />
          <MultiSlider containerStyle={{ paddingLeft: 30 }} vertical />
        </MultiControls>
      )
    case 14:
      return (
        <MultiControls>
          <Switch />
          <MultiSlider containerStyle={{ paddingRight: 30 }} />
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

import { Text, View, Switch, Button } from 'react-native'
import { styles } from '../styles'
import { Joystick } from 'react-joystick-component'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import ClickNHold from 'react-click-n-hold'

export default function DataCapture({ route }) {
  return (
    <View style={styles.container}>
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
        <View style={styles.sliders}>
          <MultiSlider />
          <MultiSlider vertical />
        </View>
      )
    case 5:
      return (
        <View style={styles.sliders}>
          <Joystick />
          <MultiSlider vertical />
        </View>
      )
    case 6:
      return (
        <ClickNHold>
          <Button title="PUSH"/>
        </ClickNHold>
      )
    case 7:
      return (
        <View style={styles.sliders}>
          <ClickNHold> 
            <Button title="1" /> 
          </ClickNHold>
          <ClickNHold> 
            <Button title="2" /> 
          </ClickNHold>
        </View>
      )
    case 8:
      return (
        <View style={styles.sliders}>
          <ClickNHold> 
            <Button title="1" /> 
          </ClickNHold>
          <ClickNHold> 
            <Button title="2" /> 
          </ClickNHold>
          <ClickNHold> 
            <Button title="3" /> 
          </ClickNHold>
        </View>
      )
    case 9:
      return (
        <View style={styles.sliders}>
          <MultiSlider vertical />
          <ClickNHold> 
            <Button title="PUSH" /> 
          </ClickNHold>
        </View>
      )
    case 10:
      return (
        <View style={styles.sliders}>
          <Joystick />
          <ClickNHold> 
            <Button title="PUSH" /> 
          </ClickNHold>
        </View>
      )
    case 11:
      return (
        <View style={styles.sliders}>
          <MultiSlider vertical />
          <Joystick />
        </View>
      )
    case 12:
      return <Text>Horizontal Slider and Joystick</Text>
    case 13:
      return <Text>Toggle and Vertical Slider</Text>
    case 14:
      return <Text>Toggle and Horizontal Slider</Text>
    case 15:
      return <Text>Toggle and Joystick</Text>
    case 16:
      return <Text>3 Toggles</Text>
    default:
      return <Text>Profile {profile} does not exist.</Text>
  }
}

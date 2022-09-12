import { Text, View } from 'react-native'
import { styles } from '../styles'
import { Joystick } from 'react-joystick-component'

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
      return <Text>Vertical Slider</Text>
    case 1:
      return <Text>Horizontal Slider</Text>
    case 2:
      return <Joystick />
    case 3:
      return <Text>Toggle</Text>
    case 4:
      return <Text>Horizontal Slider and Vertical Slider</Text>
    case 5:
      return <Text>Joystick and Vertical Slider</Text>
    case 6:
      return <Text>Button</Text>
    case 7:
      return <Text>2 Buttons</Text>
    case 8:
      return <Text>3 Buttons</Text>
    case 9:
      return <Text>Vertical Slider and Button</Text>
    case 10:
      return <Text>Joystick and Button</Text>
    case 11:
      return <Text>Vertical Slider and Joystick</Text>
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

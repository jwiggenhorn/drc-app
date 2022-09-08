import { Text, View } from 'react-native'
import { styles } from '../styles'

export default function Profile({ route }) {
  return (
    <View style={styles.container}>
      <Text>Profile {route.params.profile}</Text>
    </View>
  )
}

import { View } from 'react-native'
import { styles } from '../styles'

export default function MultiControls({ children }) {
  return (
    <>
      {children.map((child, i) => (
        <View key={i} style={styles.control}>
          {child}
        </View>
      ))}
    </>
  )
}

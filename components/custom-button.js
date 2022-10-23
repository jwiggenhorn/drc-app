import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles'

TouchableOpacity.defaultProps = { activeOpacity: 0.6 }

export default React.forwardRef(function Button(
  { color, onPress, title, onPressIn, onPressOut },
  ref
) {
  const bgColor = {
    backgroundColor: color || '#00BFFF',
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[bgColor, styles.buttonContainer]}
      ref={ref}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
})

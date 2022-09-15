import { View, Button } from 'react-native'
import { useState } from 'react'
import { styles } from '../styles'

export default function ButtonHeader() {
  const [isCapturing, setIsCapturing] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const [stopTime, setStopTime] = useState(0)

  return (
    <View style={styles.header}>
      {isCapturing ? (
        <Button
          title="Stop"
          onPress={() => {
            setStopTime(Date.now())
            setIsCapturing(false)
            // TODO: pop up confirmation modal
          }}
        />
      ) : (
        <Button
          title="Start"
          onPress={() => {
            setStartTime(Date.now())
            setIsCapturing(true)
          }}
        />
      )}
    </View>
  )
}

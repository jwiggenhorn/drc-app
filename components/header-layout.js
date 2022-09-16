import { useContext, useState } from 'react'
import { View, Button } from 'react-native'
import { styles } from '../styles'
import { TimeContext } from '../App'

export default function ButtonHeader() {
  const [isCapturing, setIsCapturing] = useState(false)
  const { setStartTime } = useContext(TimeContext)

  return (
    <View style={styles.header}>
      {isCapturing ? (
        <Button
          title="Stop"
          onPress={() => {
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

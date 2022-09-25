import { useContext } from 'react'
import { View, Button } from 'react-native'
import { styles } from '../styles'
import { CaptureContext } from '../App'
import { API_URL } from '../environment'

export default function HeaderButton() {
  const { setStartTime, isCapturing, setIsCapturing, participantData } =
    useContext(CaptureContext)

  return (
    <View style={styles.header}>
      {isCapturing ? (
        <Button
          title="Stop"
          onPress={() => {
            setIsCapturing(false)
            //TODO: show confirmation modal
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

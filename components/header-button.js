import { useContext, useState } from 'react'
import { View, Button } from 'react-native'
import { styles } from '../styles'
import { TimeContext } from '../App'
import setModalVisible from './confirmation-modal'

export default function HeaderButton() {
  const [isCapturing, setIsCapturing] = useState(false)
  const { setStartTime } = useContext(TimeContext)

  return (
    <View style={styles.header}>
      {isCapturing ? (
        <Button
          title="Stop"
          onPress={() => {
            setIsCapturing(false)
            // TODO: show confirmation modal
            //setModalVisible(true)
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

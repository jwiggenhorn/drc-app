import { useContext, useState } from 'react'
import { View, Button, Modal, Text } from 'react-native'
import { styles } from '../styles'
import { TimeContext } from '../App'

export default function HeaderButton() {
  const [isCapturing, setIsCapturing] = useState(false)
  const { setStartTime } = useContext(TimeContext)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.header}>
      {isCapturing ? (
        <Button
          title="Stop"
          onPress={() => {
            setIsCapturing(false)
            setModalVisible(true)
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
      <View>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              Do you want to submit your study?
            </Text>
            <View style={styles.modalText}>
              <Button
                title="Submit"
                onPress={() => {
                  //Submit the data
                }}
              />
            </View>
            <View style={styles.modalText}>
              <Button
                title="Cancel"
                onPress={() => {
                  //Cancel
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

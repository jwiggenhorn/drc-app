import { useContext, useState } from 'react'
import { View, Button, Modal, Text } from 'react-native'
import { styles } from '../styles'
import { CaptureContext } from '../App'
import { API_URL } from '../environment'

export default function HeaderButton() {
  const { setStartTime, isCapturing, setIsCapturing, participantData } =
    useContext(CaptureContext)
  const [modalVisible, setModalVisible] = useState(false)

  async function handleSubmit() {
    await fetch(`${API_URL}/study/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(participantData),
    })
      .then((data) => console.log(data))
      .catch((e) => console.error(e))
  }

  return (
    <View style={styles.header}>
      {isCapturing ? (
        <Button
          title="Stop"
          onPress={() => {
            setIsCapturing(false)
            // TODO: Pause the music
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
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              Do you want to stop capturing and submit the data?
            </Text>
            <View style={styles.modalButtons}>
              <Button
                color="gray"
                title="Cancel"
                onPress={() => {
                  setModalVisible(false)
                  //TODO: resume the music
                }}
              />
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

import { useContext, useState } from 'react'
import { View, Button, Modal, Text } from 'react-native'
import { styles } from '../styles'
import { TimeContext } from '../App'
import { API_URL } from '../environment'

export default function HeaderButton() {
  const [isCapturing, setIsCapturing] = useState(false)
  const { setStartTime } = useContext(TimeContext)
  const [modalVisible, setModalVisible] = useState(false)

  async function handleSubmit() {
    await fetch(`${API_URL}/study/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
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
            setModalVisible(true)
            //TODO: Pause the music
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
                  handleSubmit()
                }}
              />
            </View>
            <View style={styles.modalText}>
              <Button
                title="Cancel"
                onPress={() => {
                  setModalVisible(false)
                  //TODO: resume the music
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

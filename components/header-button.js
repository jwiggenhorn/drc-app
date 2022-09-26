import { useContext, useState } from 'react'
import { View, Button, Modal, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles'
import { CaptureContext } from '../App'
import { API_URL } from '../environment'

export default function HeaderButton() {
  const {
    startTime,
    setStartTime,
    isCapturing,
    setIsCapturing,
    participantData,
    setParticipantData,
  } = useContext(CaptureContext)
  const [modalVisible, setModalVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigation = useNavigation()

  function handleStart() {
    setStartTime(Date.now())
    setIsCapturing(true)
  }

  function handleStop() {
    setIsCapturing(false)
    participantData.stopTime = Date.now() - startTime
    // TODO: Pause the music
    setModalVisible(true)
  }

  async function handleSubmit() {
    await fetch(`${API_URL}/study/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(participantData),
    })
      .then((data) => {
        if (data.status == 201) {
          setParticipantData({})
          navigation.navigate('Study Key Entry')
        } else {
          setErrorMessage(data.statusText)
        }
      })
      .catch((e) => console.error(e))
  }

  function handleCancel() {
    setModalVisible(false)
    //TODO: resume the music
  }

  return (
    <View style={styles.header}>
      {isCapturing ? (
        <Button title="Stop" onPress={handleStop} />
      ) : (
        <Button title="Start" onPress={handleStart} />
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
              <Button color="gray" title="Cancel" onPress={handleCancel} />
              <Button title="Submit" onPress={handleSubmit} />
            </View>
            <Text style={styles.error}>
              {errorMessage && `Error: ${errorMessage}`}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

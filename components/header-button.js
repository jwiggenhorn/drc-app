import { useContext, useState } from 'react'
import { View, Modal, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles'
import { CaptureContext } from '../App'
import { API_URL } from '../environment'
import { errorMessages } from '../error-messages'
import Button from './custom-button'

export default function HeaderButton() {
  const {
    startTime,
    setStartTime,
    isCapturing,
    setIsCapturing,
    participantData,
    setParticipantData,
    sound,
  } = useContext(CaptureContext)
  const [modalVisible, setModalVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigation = useNavigation()

  async function handleStart() {
    if (sound._loaded) await sound.playAsync()
    setStartTime(Date.now())
    setIsCapturing(true)
  }

  async function handleStop() {
    setIsCapturing(false)
    participantData.stopTime = Date.now() - startTime
    if (sound._loaded) await sound.pauseAsync()
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
      .then(async (data) => {
        if (data.status == 201) {
          setParticipantData({})
          if (sound._loaded) await sound.unloadAsync()
          navigation.navigate('Study Key Entry')
        } else {
          setErrorMessage(errorMessages.get(data.status))
        }
      })
      .catch((e) => console.error(e))
  }

  async function handleCancel() {
    setModalVisible(false)
    setIsCapturing(true)
    if (sound._loaded) await sound.playAsync()
  }

  return (
    <View style={styles.header}>
      {isCapturing ? (
        <Button title="Stop" color="red" onPress={handleStop} />
      ) : (
        <Button title="Start" color="green" onPress={handleStart} />
      )}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
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
            <Text style={styles.error}>{errorMessage}</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

import { useContext, useState } from 'react'
import { View, Button, Modal, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles'
import { CaptureContext } from '../App'
import { API_URL } from '../environment'
import { errorMessages } from '../error-messages'
import CustomButton from './custom-button'

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
          setErrorMessage(errorMessages.get(data.status))
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
        <CustomButton title="Stop" color="red" onPress={handleStop} />
      ) : (
        <CustomButton title="Start" color="green" onPress={handleStart} />
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
              <CustomButton color="gray" title="Cancel" onPress={handleCancel} />
              <CustomButton title="Submit" onPress={handleSubmit} />
            </View>
            <Text style={styles.error}>{errorMessage}</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

import { useContext, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import { CaptureContext } from '../App'
import { API_URL } from '../environment'
import { styles } from '../styles'
import { errorMessages } from '../error-messages'
import Button from '../components/custom-button'

export default function StudyKeyEntry({ navigation }) {
  const { participantData, sound } = useContext(CaptureContext)
  const [studyKey, setStudyKey] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit() {
    await fetch(`${API_URL}/study/config/${studyKey.trim()}`)
      .then((response) => {
        if (response.status == 200) return response.json()
        throw new Error(errorMessages.get(response.status))
      })
      .then(async (data) => {
        participantData.key = studyKey
        if (data.url) await sound.loadAsync({ uri: data.url })
        navigation.navigate('Data Capture', {
          profile: data.inputProfile,
          joystickSensitivity: data.joystickSensitivity,
        })
      })
      .catch((e) => setErrorMessage(e.message))
  }

  return (
    <View style={styles.centeredView}>
      <Text>Enter a study key:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setStudyKey(text)
          setErrorMessage('')
        }}
        value={studyKey}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  )
}

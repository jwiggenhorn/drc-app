import { useContext, useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { CaptureContext } from '../App'
import { API_URL } from '../environment'
import { styles } from '../styles'
import { errorMessages } from '../error-messages'

export default function StudyKeyEntry({ navigation }) {
  const { participantData } = useContext(CaptureContext)
  const [studyKey, setStudyKey] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit() {
    await fetch(`${API_URL}/study/config/${studyKey.trim()}`)
      .then((response) => {
        if (response.status == 200) return response.json()
        throw new Error(errorMessages.get(response.status))
      })
      .then((data) => {
        participantData.key = studyKey
        navigation.navigate('Data Capture', { profile: data.inputProfile })
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

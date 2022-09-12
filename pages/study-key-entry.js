import { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { API_URL } from '../environment'
import { styles } from '../styles'

export default function StudyKeyEntry({ navigation }) {
  const [studyKey, setStudyKey] = useState('')
  const [isError, setIsError] = useState(false)

  async function handleSubmit() {
    await fetch(`${API_URL}/study/config/${studyKey.trim()}`)
      .then((response) => response.json())
      .then((data) =>
        navigation.navigate('Data Capture', { profile: data.inputProfile })
      )
      .catch((e) => setIsError(e))
  }

  return (
    <View style={styles.container}>
      <Text>Enter a study key:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setStudyKey(text)
          setIsError(false)
        }}
        value={studyKey}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {isError && <Text style={styles.error}>Invalid study key</Text>}
    </View>
  )
}

import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { API_URL } from './environment'

export default function App() {
  const [studyKey, setStudyKey] = useState('')

  async function handleSubmit() {
    await fetch(`${API_URL}/study/${studyKey.trim()}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <View style={styles.container}>
      <Text>Enter a study key:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setStudyKey}
        value={studyKey}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

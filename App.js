import { createContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Audio } from 'expo-av'
import StudyKeyEntry from './pages/study-key-entry'
import DataCapture from './pages/data-capture'
import HeaderButton from './components/header-button'

export const CaptureContext = createContext(null)
const Stack = createNativeStackNavigator()
const sound = new Audio.Sound()

export default function App() {
  const [startTime, setStartTime] = useState(0)
  const [isCapturing, setIsCapturing] = useState(false)
  const [participantData, setParticipantData] = useState({})

  return (
    <CaptureContext.Provider
      value={{
        startTime,
        setStartTime,
        isCapturing,
        setIsCapturing,
        participantData,
        setParticipantData,
        sound,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Study Key Entry"
            component={StudyKeyEntry}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Data Capture"
            component={DataCapture}
            options={{
              header: () => <HeaderButton />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CaptureContext.Provider>
  )
}

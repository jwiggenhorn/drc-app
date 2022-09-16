import { createContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudyKeyEntry from './pages/study-key-entry'
import DataCapture from './pages/data-capture'
import HeaderButton from './components/header-button'

export const TimeContext = createContext(null)
const Stack = createNativeStackNavigator()

export default function App() {
  const [startTime, setStartTime] = useState(0)

  return (
    <TimeContext.Provider value={{ startTime, setStartTime }}>
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
    </TimeContext.Provider>
  )
}

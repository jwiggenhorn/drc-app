import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudyKeyEntry from './pages/study-key-entry'
import DataCapture from './pages/data-capture'
import StartStopButton from './components/header-layout'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
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
            header: () => <StartStopButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

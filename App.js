import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudyKeyEntry from './pages/study-key-entry'
import DataCapture from './pages/data-capture'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Study Key Entry" component={DataCapture} />
        <Stack.Screen name="Data Capture" component={DataCapture} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

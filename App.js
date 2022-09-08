import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudyKeyEntry from './pages/StudyKeyEntry'
import DataCapture from './pages/DataCapture'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Study Key Entry" component={StudyKeyEntry} />
        <Stack.Screen name="Data Capture" component={DataCapture} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

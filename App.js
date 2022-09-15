import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudyKeyEntry from './pages/study-key-entry'
import DataCapture from './pages/data-capture'
import ButtonLayout from './components/header-layout'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Study Key Entry" component={StudyKeyEntry} />
        <Stack.Screen name="Data Capture" component={DataCapture}
          options={{
            headerRight: () => (<ButtonLayout/>),
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

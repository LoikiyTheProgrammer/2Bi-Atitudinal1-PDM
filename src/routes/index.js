import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tela1 from '../screens/Tela1'
import Tela3 from '../screens/Tela3'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Tela1'
        component={Tela1}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='Tela3'
        component={Tela3}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  )
}
//import screens to app
import MerchantSignIn from "./Screens/MerchantSignIn";
import MerchantRegister from "./Screens/MerchantRegister";
import MerchantRegDetails from "./Screens/MerchantRegDetails";

//import others
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //setup the screens
    <NavigationContainer>
      <Stack.Navigator>          
        <Stack.Screen
          name="Home"
          component={MerchantSignIn}
          options={{title:"Merchant Sign In", headerShown:false}}
        />
        <Stack.Screen
          name="MerchantRegister"
          component={MerchantRegister}
          options={{title:"Merchant Registration"}}
        />
        <Stack.Screen
          name="MerchantRegDetails"
          component={MerchantRegDetails}
          options={{title:"Merchant Details"}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

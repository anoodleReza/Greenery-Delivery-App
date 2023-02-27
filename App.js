//import screens to app
import MerchantSignIn from "./Screens/MerchantSignIn";
import MerchantRegister from "./Screens/MerchantRegister";
import MerchantRegDetails from "./Screens/MerchantRegDetails";
import MerchantHomepage from "./Screens/MerchantHomepage";

//import others
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //setup the screens
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>          
          <Stack.Screen
            name="MerchantSignIn"
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
          <Stack.Screen
            name="MerchantHomepage"
            component={MerchantHomepage}
            options={{title:"Home"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 40,
  colors: {
    ...DefaultTheme.colors,
    primary: '#A9FDAC',
    accent: '#f1c40f',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



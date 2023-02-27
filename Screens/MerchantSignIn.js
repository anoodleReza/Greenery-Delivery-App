import { StatusBar } from 'expo-status-bar';
import { paper, Button, StyleSheet, Text, View } from 'react-native';

export default function MerchantSignIn( {navigation}) {
  return (
    <View style={styles.container}>
      <Button
      title='Sign In'
      onPress={() => navigation.navigate("MerchantHomepage")}
      />
      <Button
      title="Don't have an account? Sign up Here"
      onPress={() => navigation.navigate("MerchantRegister")}
      />
      <StatusBar style="auto" />
    </View>
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

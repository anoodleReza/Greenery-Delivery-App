import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function MerchantRegister( {navigation}) {
  return (
    <View style={styles.container}>
      <Button
      title='Next'
      onPress={() => {navigation.dispatch(StackActions.replace("MerchantRegDetails"));}}
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

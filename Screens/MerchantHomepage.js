import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-paper';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MerchantHomepage( {navigation}) {
  return (
    <View>
        <Text>Hello there</Text>
        <TextInput label="Name"></TextInput>
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

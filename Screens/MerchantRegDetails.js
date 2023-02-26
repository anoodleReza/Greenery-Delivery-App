import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function MerchantRegDetails( {navigation}) {
  return (
    <View style={styles.container}>
      <Button
      title='Register'
      onPress={() => {navigation.pop(2)}}
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Principal from './src/Telas/Principal'

export default function App() {
  return (
    <View style={styles.container}>
      <Principal/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2E35',  
    alignItems:'center',
    justifyContent: 'center'
    
  }
});

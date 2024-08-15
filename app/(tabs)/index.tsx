// Import Modulues
import { StyleSheet } from 'react-native'; // from react native

import EditScreenInfo from '@/components/EditScreenInfo'; // from repository
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() { // primary export of file 
  return ( // return describes what the UI will look like
    // View is a container for components, defines styles based on styles vairable, <Text> displays text
    <View style={styles.container}> 
      <Text style={styles.title}>Tab One</Text> 
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

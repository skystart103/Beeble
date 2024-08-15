// Import Modulues
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define Interface for Props
interface NewScreenProps {
    title: string;
}

// Define Styles
const styles = StyleSheet.create({ // const = constant variable, creating a style from stylesheet (styles)
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
    },
});

// Create Component with Type Annoatations
const NewScreen: React.FC<NewScreenProps> = ({ title }) => { // create a new component with properties (title) perviously defined
return (
    // View container and text based on styles
    <View style={styles.container}>  
        <Text style={styles.text}>{title}</Text> 
    </View>
);
};
  
export default NewScreen;

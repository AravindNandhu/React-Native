import React from 'react';
import {
  StyleSheet,
  Text,
  
  View,
} from 'react-native';

function Home () {
  return (
    <View style={styles.sectionContainer}>
      <Text> Hiiiiiiiiiii
        
      </Text>
      
    </View>
  );
};



const styles = StyleSheet.create({
  sectionContainer: {
    flex : 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});

export default Home;

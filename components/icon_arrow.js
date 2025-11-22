import { StyleSheet, Pressable } from 'react-native' ;
import Ionicons from '@expo/vector-icons/Ionicons';

const Icon = () => {
  return (
  <Pressable style={styles.boxBack}>
    <Ionicons name="arrow-back-circle-outline" size={24} color="#00008b" />
  </Pressable>
  );
}

const styles = StyleSheet. create({
    boxBack:{
      top:'10%',
      left:'5%',
      position:'absolute',
  },
});

export default Icon;
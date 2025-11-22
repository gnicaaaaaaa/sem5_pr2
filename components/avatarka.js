import { View, Image, StyleSheet } from 'react-native' ;

const Avatarka = () => {
  return (
    <View>
      <Image
      style={styles.avatar}
      source={{ uri: 'https://i.pinimg.com/originals/cc/86/8f/cc868f76f085abd6066e20159ae13579.jpg' }}
    />
    </View>
  );
};

const styles = StyleSheet. create({
 avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 16
 }
});

export default Avatarka;
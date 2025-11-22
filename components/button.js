import { View, Text, StyleSheet, Pressable } from 'react-native' ;

const Button = () => {
  return (
    <View>
      < Pressable style={styles.boxBtn}>
        <Text style={styles.textBtn}>Подписаться</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet. create({
  textBtn:{
    color:'#00008b'
  },
  boxBtn:{
    borderRadius:50,
    paddingHorizontal:15,
    paddingVertical:7,
    marginTop: 15,
    backgroundColor:'#eee',
  },
});

export default Button;
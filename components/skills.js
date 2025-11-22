import { View, Text, StyleSheet } from 'react-native';

const Skills = () => {
     const skill = ['figma', 'visual studio', 'adobe']

     return (
       <View style={styles.skills}>
        {skill.map((skill, index) => 
          <Text key={index} style={styles.skill}>
            {skill}
          </Text>)}
       </View>
     );
};

const styles = StyleSheet.create({
  skill:{
    borderWidth: 1,
    borderColor:'#00008b',
    color:'#00008b',
    borderRadius:10,
    paddingHorizontal:8,
    paddingVertical:2,
  },
  
  skills:{
    marginTop:5,
    gap:10,
    flexDirection:'row'
  },
});

export default Skills;
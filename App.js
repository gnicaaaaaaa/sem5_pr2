import { View, Text, Image, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import Skills from './components/skills';
import Button from './components/button';
import Avatarka from './components/avatarka';
import Icon from './components/icon_arrow';


const App = () => {
 return (
<SafeAreaView style={styles.container}>
 <View style={styles.card}>
  <Avatarka />
  <Icon />
  <View style={styles.textContainer}>
    <Text style={styles.name}>Вероника Горелова</Text>
    <Text style={styles.title}>Designer model influencer</Text>
    <Text style={styles.bio}>
      Делаю дизайн, который работает на ваши продажи так же эффективно, как и на эстетику.
    </Text>
  </View>
  <Skills />
  <Button />
  </View>
 </SafeAreaView>
 );
};
const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
 },
 card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    // Тень для iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    // Тень для Android
    elevation: 5,
 },
 avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Делаем круг
    marginBottom: 16
 },
 name: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 4
 },
 title: {
  fontSize: 16,
  color: '#636363',
  marginBottom: 8
 },
 bio: {
 fontSize: 14,
 color: '#888',
 textAlign: 'center'
 }
});
export default App;
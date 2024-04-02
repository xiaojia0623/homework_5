import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Pressable, Text, View,  ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';

const image = {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Y6GGhFM0mB-zDNWcY5lzfdMMlpGJ3eNjYg&s'};

export default function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.backgroundImage} />
      <Text style={textStyle.bigTitle}>陶瓷的世界</Text>
      <Pressable style={buttonsStyle.btns}  onPress={() => props.navigation.push('Technology')}>
        <Text style={textStyle.text}>航空航天技術</Text>
        <LinearGradient
        // Background Linear Gradient
        colors={['#6495ED', '#ffffff']}
        style={styles.background}
      />
      </Pressable>

      <Pressable style={buttonsStyle.btns}  onPress={() => props.navigation.push('Science')}>
        <Text style={textStyle.text}>生物醫學</Text>
        <LinearGradient
        // Background Linear Gradient
        colors={['#6495ED', '#ffffff']}
        style={styles.background}
      />
      </Pressable>

      <Pressable style={buttonsStyle.btns}  onPress={() => props.navigation.push('ElectronicTechnology')}>
        <Text style={textStyle.text}>電子行業</Text>
        <LinearGradient
        // Background Linear Gradient
        colors={['#6495ED', '#ffffff']}
        style={styles.background}
      />
      </Pressable>

      <Pressable style={buttonsStyle.btns}  onPress={() => props.navigation.push('Automobile')}>
        <Text style={textStyle.text}>汽車行業</Text>
        <LinearGradient
        // Background Linear Gradient
        colors={['#6495ED', '#ffffff']}
        style={styles.background}
      />
      </Pressable>

      <Pressable style={buttonsStyle.btns}  onPress={() => props.navigation.push('Optical')}>
        <Text style={textStyle.text}>光學行業</Text>
        <LinearGradient
        // Background Linear Gradient
        colors={['#6495ED', '#ffffff']}
        style={styles.background}
      />
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(209, 183, 153)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 35,
  },
  backgroundImage: {
    flex: 1,
    width:'100%',
    height:'100%',
    resizeMode:"cover",
    objectFit:'cover',
    //justifyContent: 'center',
  },
});
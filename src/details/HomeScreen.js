import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,  Pressable, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';

const image = {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Y6GGhFM0mB-zDNWcY5lzfdMMlpGJ3eNjYg&s'};

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>

      <ImageBackground source={image} style={styles.backgroundImage} />

      <Text style={textStyle.bigTitle}>陶瓷的世界</Text>
      <Pressable style={buttonsStyle.btns}  onPress={() => props.navigation.push('CeremicHistory')}>
        <Text style={textStyle.text}>陶與瓷</Text>
        <LinearGradient
        // Background Linear Gradient
        colors={['#6495ED', '#ffffff']}
        style={styles.background}
      />
      </Pressable>

      <Pressable style={buttonsStyle.btns}  onPress={() => props.navigation.push('CeremicIntro')}>
        <Text style={textStyle.text}>陶瓷介紹</Text>
        <LinearGradient
        // Background Linear Gradient
        colors={['#6495ED', '#ffffff']}
        style={styles.background}
      />
      </Pressable>

      <Pressable style={buttonsStyle.btns}  onPress={() => props.navigation.push('CeremicStep')}>
        <Text style={textStyle.text}>陶瓷生產步驟</Text>
        <LinearGradient
        // Background Linear Gradient
        colors={['#6495ED', '#ffffff']}
        style={styles.background}
      />
      </Pressable>

      <Pressable style={buttonsStyle.btns}  onPress={() => props.navigation.push('CeremicResult')}>
        <Text style={textStyle.text}>陶瓷的成形</Text>
        <LinearGradient
        // Background Linear Gradient
        colors={['#6495ED', '#ffffff']}
        style={styles.background}
      />
      </Pressable>

      <Pressable style={buttonsStyle.btns}  onPress={() => props.navigation.push('CeremicProess')}>
        <Text style={textStyle.text}>陶瓷燒結過程</Text>
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
  },
});
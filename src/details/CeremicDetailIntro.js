import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity,Image, ScrollView,SafeAreaView} from 'react-native';
import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';

export default function CeremicDetailIntro(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={textStyle.scrollView}>
        <Text style={textStyle.bigTitle}>陶瓷介紹</Text>
        <Text style={[textStyle.smallTitle, {marginBottom:10}]}>陶瓷器{'\n'}</Text>
        <Text style={textStyle.textContent}>也作陶磁器，一般稱為陶瓷，是用泥（陶泥或瓷泥）勾水成泥漿，製成器皿的形狀，待乾燥後再放入爐燒成一件件器皿的工藝。製成品會叫做陶器或瓷器。陶器一般用黏土或陶土經捏製成形後燒制而成；瓷器則由瓷石、高嶺土等組成，外表施有釉或彩繪的物器，需經過高溫（約1200℃–1400℃）的窯內燒制，源於中國。</Text>
        <Image
          style={styles.img}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Blue_and_white_vase_Jingdezhen_Ming_Yongle_1403_1424.jpg/330px-Blue_and_white_vase_Jingdezhen_Ming_Yongle_1403_1424.jpg',
          }}
        />
        <TouchableOpacity style={buttonsStyle.infoBtn} onPress={() => props.navigation.pop()}>
            <Text style={textStyle.btnText}>回首頁</Text>
          </TouchableOpacity>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(186, 147, 106)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    padding:0,
  },
  img:{
    display:'flex',
    textAlign:'right',
    width: 100,
    height: 100,
    borderRadius:10,
    justifyContent:'flex-end',
    marginBottom:10,
    objectFit:'cover',
  },
});
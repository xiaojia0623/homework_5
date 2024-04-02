import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, ScrollView,SafeAreaView} from 'react-native';
import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';
export default function CeremicDetailHistory(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={textStyle.scrollView}>
        <Text style={textStyle.bigTitle}>陶與瓷</Text>
        <Text style={textStyle.smallTitle}>陶器{'\n'}</Text>
        <Text style={textStyle.textContent}>古稱瓦，是用黏土或陶土經捏製成形後燒制而成的器具。陶器歷史悠久，在新石器時代就已初見簡單粗糙的陶器。陶器在古代作為一種生活用品，在現在一般作為工藝品收藏。</Text>
        <Text style={textStyle.smallTitle}>瓷器</Text>
        <Text style={textStyle.textContent}>也稱磁器，是由瓷石、高嶺土等組成，外表施有釉或彩繪的物器，需經過高溫（約1200℃–1400℃）的窯內燒製。</Text>
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
    justifyContent: 'start',
    textAlign:'center',
    //padding:0,
  },
});
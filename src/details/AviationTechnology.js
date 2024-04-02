import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';

export default function aviationTechnology(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={textStyle.bigTitle}>航空航天技術</Text>
        <Text style={[textStyle.smallTitle, {fontSize: 24}]}>發動機{'\n'}</Text>
        <Text style={textStyle.textContent}>飛機發動機在工作中非常熱，使用陶瓷材料隔絕熱量避免損壞其他零件。</Text>
        <Text style={[textStyle.smallTitle, {fontSize: 24}]}>機身{'\n'}</Text>
        <Text style={textStyle.textContent}>使用高強度、高溫的輕型軸承和結構部件。</Text>
        <Text style={[textStyle.smallTitle, {fontSize: 24}]}>飛彈鼻錐{'\n'}</Text>
        <Text style={textStyle.textContent}>保護火箭內部不受外部高熱影響。</Text>
        <Text style={[textStyle.smallTitle, {fontSize: 24}]}>太空梭 : </Text>
        <Text style={textStyle.textContent}>隔熱瓦。</Text>
        <Text style={[textStyle.smallTitle, {fontSize: 24}]}>太空垃圾護盾{'\n'}</Text>
        <Text style={textStyle.textContent}>和同等重量的鋁護盾相比，陶瓷纖維織成的護盾對超高速物體（7千米/秒）的防護更好。</Text>
        <Text style={[textStyle.smallTitle, {fontSize: 24}]}>火箭噴嘴{'\n'}</Text>
        <Text style={textStyle.textContent}>可以承受火箭助推器排氣的高溫，還可以將排氣聚焦。</Text>

        <TouchableOpacity style={[buttonsStyle.infoBtn,{marginrticVeal:'auto'}]} onPress={() => props.navigation.pop()}>
          <Text style={textStyle.btnText}>回應用首頁</Text>
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
    //margin:'auto',
    padding: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },

});
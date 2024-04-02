import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';

export default function CeremicDetailResult(props) {
  return (
    <View style={styles.container}>
      <Text style={textStyle.bigTitle}>陶瓷的成形</Text>
      <Text style={[textStyle.smallTitle, {marginBottom:10}]}>成型方法{'\n'}</Text>
      <Text style={textStyle.textContent}>陶瓷成型技術包括拋擲、注漿、流延等方法，用於製造各種複雜形狀的陶瓷。增強纖維主要使用聚合物、溶膠凝膠等方法，也可能使用熔融。層狀結構在製造電子器件襯底和封裝方面廣泛應用。熱壓燒結方法在製造高品質零件時更為先進，特別適用於大型零件和形狀簡單但品質要求高的零件。</Text>
      <TouchableOpacity style={buttonsStyle.infoBtn} onPress={() => props.navigation.pop()}>
          <Text style={textStyle.btnText}>回首頁</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(186, 147, 106)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign:'center',
    padding: 20,
  },
});
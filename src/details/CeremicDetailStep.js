import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView,SafeAreaView,  TouchableOpacity} from 'react-native';
import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';

export default function CeremicDetailStep(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={textStyle.scrollView}>
        <Text style={textStyle.bigTitle}>陶瓷生產步驟</Text>
        <Text style={textStyle.smallTitle}>生產步驟{'\n'}</Text>
        <Text style={textStyle.textContent}>陶瓷生產步驟按照如下順序：粉碎→配料→混合→成型→乾燥→火燒→裝配。</Text>
        <Text style={textStyle.smallTitle}>粉碎</Text>
        <Text style={textStyle.textContent}>用機械手段，如摩擦、壓縮、衝擊，將材料從大體積轉為小，例如球磨或顎式碾碎機。</Text>
        <Text style={textStyle.smallTitle}>配料</Text>
        <Text style={textStyle.textContent}>根據配方對各種原材料稱重的過程，將原材料準備好用於混合和乾燥。</Text>
        <Text style={textStyle.smallTitle}>混合</Text>
        <Text style={textStyle.textContent}>在配料過程之後進行，通常使用不同的機器來實現。在混合攪拌的過程中通常需要加入水。</Text>
        <Text style={textStyle.smallTitle}>成型</Text>
        <Text style={textStyle.textContent}>混料製造各形狀，如擠出磚、壓製、注漿成型，產生零件坯，需乾燥。</Text>
        <Text style={textStyle.smallTitle}>乾燥</Text>
        <Text style={textStyle.textContent}>除去材料水分或結合劑的過程，如噴霧乾燥、管道、周期乾燥。需受控加熱以避免裂紋。</Text>
        <Text style={textStyle.smallTitle}>火燒</Text>
        <Text style={textStyle.textContent}>將乾燥的零件進行受控加熱的過程，這時原材料中的氧化物會發生化學變化，並引起燒結。通過火燒的零件將會比乾燥的零件更小。</Text>
        
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
  },
});
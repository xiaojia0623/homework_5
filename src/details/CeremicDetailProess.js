import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';

export default function CeremicDetailProess(props) {
  return (
    <View style={styles.container}>
      <Text style={textStyle.bigTitle}>陶瓷燒結過程</Text>
      <Text style={textStyle.smallTitle}>燒結過程{'\n'}</Text>
      <Text style={textStyle.textContent}>將陶瓷坯料置於高溫窯中，通常低於陶瓷熔點，使微結構改變以增加其強度和密度。壓力、有機結合劑和潤滑劑可優化成型過程，提高坯料緻密度。漿料亦可灌製成型後燒結。液相燒結利用某成分的融化降低燒結溫度及時間。此過程應用於高性能陶瓷，廣泛用於電子器件、傳感器等製造。传统陶器製作也採用混合物，部分成分可能經液相燒結。</Text>
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
    padding: 10,

  },
});
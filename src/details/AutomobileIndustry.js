import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,  TouchableOpacity, FlatList} from 'react-native';
import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';

const AutoItem = ({ item }) => (
  <Text style={{fontSize:20, color:'rgb(79, 39, 2)', fontWeight:'bold'}}>{`\u2022 ${item}`}</Text>
);

export default function AutomobileIndustry(props) {

  const data = ['防熱盾', '餘熱管理', '陶瓷發動機']

  return (
    <View style={styles.container}>
      <Text style={textStyle.bigTitle}>汽車行業</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <AutoItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={buttonsStyle.infoBtn} onPress={() => props.navigation.pop()}>
        <Text style={textStyle.btnText}>回應用首頁</Text>
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
    justifyContent: 'center',
    padding: 10,
  },
});
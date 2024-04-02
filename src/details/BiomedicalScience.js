import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity, FlatList} from 'react-native';
import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';

const ListItem = ({ item }) => (
  <Text style={{fontSize:20, color:'rgb(79, 39, 2)', fontWeight:'bold'}}>{`\u2022 ${item}`}</Text>
);

export default function biomedicalScience(props) {

  const data = ['人工骨骼，牙科應用的假牙', '生物可降解夾板；用於治療骨質疏鬆症的強化骨骼', '植入物材料'];
  return (
    <View style={styles.container}>
      <Text style={textStyle.bigTitle}>生物醫學</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
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
  }
});
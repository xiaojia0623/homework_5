import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList, Image, TouchableOpacity} from 'react-native';
import buttonsStyle from '../../styles/buttonsStyle';
import textStyle from '../../styles/textStyle';

const ListItem = ({ item }) => (
  <Text style={{fontSize:20, color:'rgb(79, 39, 2)', fontWeight:'bold'}}>{`\u2022 ${item}`}</Text>
);

export default function OpticalIndustry(props) {

  const data = ['光纖、光波導傳輸', '雷射放大器','透鏡','紅外線追蹤設備'];
  return (
    <View style={styles.container}>
      <Text style={textStyle.bigTitle}>光學行業</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Image style={styles.imgSize} source={{uri:'https://www3.panasonic.biz/ac/tw/fasys/sensor/photoelectric/ls-500/images/pic16.png',}} />
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
  imgSize:{
    width:200,
    height:200,
    marginBottom:20,
    borderRadius:10,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  }
});
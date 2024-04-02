
import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    text: {  //兩個首頁中按鈕的文字設定
      color:'red',
      fontSize:22,
      zIndex: 2,
      textAlign:'center',
    },
    bigTitle:{ //內容頁面 - 大標題
      fontSize:40,
      textAlign:'center',
    },
    smallTitle:{ //內容頁面 - 小標題
      fontSize:28,
      color:'rgb(79, 39, 2)',
      //alignItems: 'flex-start',
      //justifyContent:'start',
      //color:
    },
    textContent:{ //內容頁面 - 內容文字
      fontSize:20,
      lineHeight:32,
      marginBottom:10,
      color:'#ffffff',
    },
    btnText:{ //內容頁面返回按鈕
      fontSize:18,
      fontWeight:'bold',
      textAlign:'center',
      color:'#ffffff',
    },
    scrollView: {
      marginHorizontal: 20,
    },
  });
  

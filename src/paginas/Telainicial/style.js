import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Imagem: {
        width: 45,
        height: 45,
        left: 20,
        borderRadius: 25
    },

    Input: {
      borderWidth: 11,
      borderColor: '#B1D3C1',
      marginLeft: 50,
      marginRight: 30,
      borderRadius: 15,
      backgroundColor: '#B1D3C1',
      width: 230,
      padding: 2,
      flex:1
      },

      view: {
        flexDirection: 'row', 
        paddingHorizontal: 1,
        marginTop: 60
      },
      viewmax: {
        flexDirection: 'row', 
        paddingHorizontal: 0,
        marginTop: 0,
        backgroundColor: '#B1D3C1',
        height:60
      },
      views: {
        flexDirection: 'row', 
        paddingHorizontal: 1,
        flex:1,
        marginRight: 60
      },
      vieww: {
        flexDirection: 'row', 
        paddingHorizontal: 1,
        marginTop: 5,
        marginLeft: 30
      },
      Imagens: {
        width: 135,
        height: 163,
        borderRadius: 25,
        marginTop: -20,
        marginLeft: -19,
        flex:1

    }
  })

  
  export default styles;
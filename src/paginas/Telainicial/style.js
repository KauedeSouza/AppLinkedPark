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
      padding: 2
      },

      view: {
        flexDirection: 'row', 
        paddingHorizontal: 1,
        marginTop: 60
      },
      viewmax: {
        flexDirection: 'row', 
        paddingHorizontal: 1,
        marginTop: 24,
        backgroundColor: '#B1D3C1',
        height:90
      },
      views: {
        flexDirection: 'row', 
        paddingHorizontal: 1,
        marginTop: 2,
        marginLeft: 18
      },
      vieww: {
        flexDirection: 'row', 
        paddingHorizontal: 1,
        marginTop: 10,
        marginLeft: 30
      },
      Imagens: {
        width: 135,
        height: 150,
        left: 1,
        borderRadius: 25
    }
  })

  
  export default styles;
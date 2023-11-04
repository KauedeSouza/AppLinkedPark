import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';

const Pesquisa = ({ data, navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = data.filter(item =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const [dados, setDados] = useState([]);


  async function fazerSolicitacaoComToken() {
    try {
      // Obtém o token de AsyncStorage
      const token = await AsyncStorage.getItem("token");
  
      if (token) {
        // Construa o cabeçalho Authorization
        const headers = {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`
        };
      }
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Digite para pesquisar"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
        style={{
          marginBottom: 16,
          padding: 8,
          borderWidth: 1,
          borderRadius: 4,
        }}
      />
      <TouchableOpacity
        style={{ height: 160 }}
        onPress={() => navigation.navigate('TelaDetalhes', item)}
      >
        <FlatList
          data={searchResults}
          keyExtractor={item => item.idLazer.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: '#B1D3C1',
                marginTop: 15,
                borderRadius: 35,
                width: 340,
                height: 150,
                marginLeft: 9,
              }}
            >
              <Image source={{ uri: item.imagem }} style={styles.Imagens} />
              <Text
                style={{
                  marginLeft: 140,
                  marginTop: -115,
                  fontSize: 18,
                }}
              >
                {item.nome}
              </Text>

              <Text
                style={{
                  marginLeft: 140,
                  marginTop: 15,
                  fontSize: 12,
                }}
              >
                {item.descricao}
              </Text>
            </View>
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  Imagens: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 25,
  },
};

export default Pesquisa;


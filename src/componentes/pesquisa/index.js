import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native';

const data = [
  {
    idLazer: '1',
    nome: 'Atividade 1',
    descricao: 'Descrição da Atividade 1',
    imagem: 'URL_DA_IMAGEM_1'
  },
  {
    idLazer: '2',
    nome: 'Atividade 2',
    descricao: 'Descrição da Atividade 2',
    imagem: 'URL_DA_IMAGEM_2'
  },
  // Adicione mais itens conforme necessário
];

const Pesquisa = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.idLazer}
      style={{ height: 160 }}
      onPress={() => navigation.navigate('TelaDetalhes', item)}
    >
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
            marginTop: -145,
            fontSize: 18,
          }}
        >
          {item.nome}
        </Text>

        <Text
          style={{
            marginLeft: 140,
            marginTop: 10,
            fontSize: 10,
          }}
        >
          {item.descricao}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const filteredData = data.filter((item) =>
    item.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 16,
          paddingHorizontal: 8,
        }}
        placeholder="Digite sua pesquisa"
        onChangeText={(text) => setQuery(text)}
        value={query}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.idLazer}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = {
  Imagens: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    left: 20,
    top: 25,
  },
};

export default Pesquisa;

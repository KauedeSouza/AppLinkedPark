import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
  { id: '1', nome: '' },
  { id: '2', nome: 'Item 2' },
  { id: '3', nome: 'Item 3' },
  { id: '4', nome: 'Another Item' },
  // ... mais dados
];

const App = () => {
  const [search, setSearch] = useState('');
  const filteredData = data.filter(item =>
    item.nome.toLowerCase().includes(search.toLowerCase())
  );

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
    
          // Faça a solicitação usando o cabeçalho personalizado
          const response = await fetch('https://tcc-production-e100.up.railway.app/api/lazer/parque', {
            method: 'GET', // ou outro método HTTP
            headers: headers
          });
    
          if (response.status === 200) {
            const data = await response.json();
            console.log("Dados da resposta:", data);
            setDados(data);
          } else {
            console.error("Erro na solicitação:", response.status);
          }
        } else {
          console.log("Token não encontrado em AsyncStorage.");
        }
      } catch (error) {
        console.error("Erro ao fazer a solicitação:", error);
      }
    }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 16,
          paddingLeft: 8,
        }}
        placeholder="Pesquisar..."
        onChangeText={text => setSearch(text)}
        value={search}
      />
      {dados.map((item, index) => (
      <FlatList
        data={filteredData}
        key={item.idLazer}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
      ))}
    </View>
  );
};

export default App;

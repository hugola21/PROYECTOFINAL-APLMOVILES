import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

const users = [
  { id: 1, username: 'admin', password: '123456' },
];

const products = [
  { id: 1, name: 'Funda de arroz', price: 0.65, pathImage: 'https://elahorro.com.ec/web/image/product.template/88635/image?unique=19b4804' },
  { id: 2, name: 'Funda de azucar', price: 1.20, pathImage: 'https://mhmarket.ec/wp-content/uploads/sites/2/2020/11/9601037-100x100.jpg' },
  { id: 3, name: 'Funda de papas', price: 2.50, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65700_G.jpg' },
  { id: 4, name: 'Funda de fideos', price: 1.00, pathImage: 'https://modernaalimentos.com.ec/wp-content/uploads/2022/01/moderna-alimentos-pastas-santorino-tallarin.jpg' },
  { id: 5, name: 'Funda de sal', price: 0.80, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg' }
];

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setLoggedIn(true);
    } else {
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}>
      <Image source={{ uri: item.pathImage }} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
      <Text>Precio: {item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: 'lightblue' }}>
      {!loggedIn ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: 'blue' }}>Bienvenido</Text>
          <Image source={{ uri: 'https://iconecta.es/blog/wp-content/uploads/2019/12/2.jpg' }} style={{ width: 200, height: 200, marginBottom: 20 }} />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 5, paddingLeft: 10 }}
            placeholder="Usuario"
            value={username}
            onChangeText={value => setUsername(value)}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 5, paddingLeft: 10 }}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Acceder</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: 'blue' }}>Productos</Text>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={<Text style={{ marginTop: 20 }}>Total a pagar: {products.reduce((total, product) => total + product.price, 0)}</Text>}
          />
          <TouchableOpacity onPress={() => setLoggedIn(false)} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Retroceder</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;

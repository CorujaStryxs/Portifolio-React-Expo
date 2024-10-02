// Cores do sistema (#1f1f20, #2b4c7e, #567ebb, #606d80, #dce0e6)

import React from 'react'; 
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function TelaPrincipal({ navigation }: { navigation: any }) {

  return (
    <View style={{ flex: 1, backgroundColor: '#dce0e6' }}>
      <View style={{ flex: 6, backgroundColor: '#dce0e6', zIndex: 1, padding: 10 }}>
        <Image
          source={require('./assets/Foto perfil.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 50, shadowRadius: 20, shadowOffset: { width: 0, height: 5 }, overflow: 'visible' }}
        />
      </View>
      <TouchableOpacity style={{ flex: 1, alignItems: 'center', paddingVertical: 10, justifyContent: 'center', backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 10 }} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')} >
        <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'center' }}>Daniel Garcia Morais</Text>
      </TouchableOpacity>
      <View style={{ flex: 10, backgroundColor: '#606d80', zIndex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row'}}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 5, paddingVertical: 5 }}>
            <TouchableOpacity style={{ flex: 1, marginVertical: 15, backgroundColor: '#1f1f20', borderRadius: 15, alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 }} onPress={() => Linking.openURL('https://www.linkedin.com/in/daniel-garcia-morais-a69a06117/')} >
              <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'center' }}>Linkedin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, marginVertical: 15, backgroundColor: '#1f1f20', borderRadius: 15, alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 }} onPress={() => Linking.openURL('https://github.com/CorujaStryxs')} >
              <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'center' }}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, marginVertical: 15, backgroundColor: '#1f1f20', borderRadius: 15, alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 }} onPress={() => Linking.openURL('https://www.instagram.com/daniel.garcia.morais/?next=%2Fdanielgarciamoraiss%2F')}>
              <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'center' }}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, marginVertical: 15, backgroundColor: '#1f1f20', borderRadius: 15, alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 }} onPress={() => {navigation.navigate('Tela de Habilidades')}} >
              <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'center' }}>Habilidades →</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
      <View style={{ paddingVertical: 5, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 10 }}></View>
    </View>
  );
}

function TelaHabilidades({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#dce0e6' }}>
      <View style={{ flex: 1, backgroundColor: '#dce0e6', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 36, color: '#1f1f20', textAlign: 'center' }}>Hard Skills</Text>
      </View>
      <View style={{ paddingVertical: 5, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 10 }}></View>

      <View style={{ flex: 10, backgroundColor: '#606d80', flexDirection: 'column' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingRight: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'right' }}>HTML</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingLeft: 5 }}>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 8, paddingVertical: 1, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 5 }}></View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingRight: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'right' }}>CSS</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingLeft: 5 }}>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 8, paddingVertical: 1, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 5 }}></View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingRight: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'right' }}>C</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingLeft: 5 }}>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 8, paddingVertical: 1, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 5 }}></View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingRight: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'right' }}>JS</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingLeft: 5 }}>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 8, paddingVertical: 1, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 5 }}></View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingRight: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'right' }}>DB</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingLeft: 5 }}>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 8, paddingVertical: 1, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 5 }}></View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'center', paddingRight: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'right' }}>Java</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingLeft: 5 }}>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 8, paddingVertical: 1, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 5 }}></View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingRight: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'right' }}>Node</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingLeft: 5 }}>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 8, paddingVertical: 1, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 5 }}></View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingRight: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'right' }}>PHP</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingLeft: 5 }}>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 8, paddingVertical: 1, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 5 }}></View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingRight: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white', textAlign: 'right' }}>React</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingLeft: 5 }}>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
              <FontAwesome name='star-o' size={30} color='#1f1f20'/>
          </View>
        </View>
      </View>

      <View style={{ paddingVertical: 5, backgroundColor: '#1f1f20', zIndex: 2, shadowRadius: 10 }}></View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela Principal" screenOptions={{ headerStyle: { backgroundColor: '#1f1f20', borderBottomWidth: 0, shadowRadius: 10 }, headerTintColor: '#dce0e6', headerTitleStyle: { fontWeight: 'bold', fontSize: 24 } }}>
        <Stack.Screen name="Tela Principal" component={TelaPrincipal} options={{ animation: 'slide_from_right', title: 'Perfil' }} />
        <Stack.Screen name="Tela de Habilidades" component={TelaHabilidades} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
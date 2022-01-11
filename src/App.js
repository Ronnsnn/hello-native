/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import Formulario from './components/Formulario';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPressNuevaCita = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas {'\n'}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable style={styles.btnNuevaCita} onPress={onPressNuevaCita}>
        <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      </Pressable>
      <Formulario visible={modalVisible} setVisible={setModalVisible} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 28,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6d28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  modalCita: {
    backgroundColor: '#FFF',
  },
});

export default App;

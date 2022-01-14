/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import PatientListItem from './components/common/PatientListItem';
import DateForm from './components/DateForm';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [patientDates, setPatientDates] = useState([]);
  const [patientDate, setPatientDate] = useState({});

  const editPatient = id => {
    const patient = patientDates.find(p => p.id === id);
    setPatientDate(patient);
  };

  const deletePatient = id => {
    const patient = patientDates.find(p => p.id === id);
    Alert.alert(
      `¿Desea eliminar ${patient.patient}?`,
      'La acción no podrá revertirse',
      [
        {text: 'Cancelar'},
        {
          text: 'Sí',
          onPress: () => {
            const updatedPatientDates = patientDates.filter(p => p.id !== id);
            setPatientDates(updatedPatientDates);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de citas {'\n'}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnNewDate}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextNewDate}>Nueva cita</Text>
      </Pressable>
      {patientDates.length === 0 ? (
        <Text style={styles.noPatients}>No hay pacientes aún</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={patientDates}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PatientListItem
              key={item.id}
              item={item}
              setModalVisible={setModalVisible}
              editPatient={editPatient}
              deletePatient={deletePatient}
            />
          )}
        />
      )}
      <DateForm
        visible={modalVisible}
        setModalVisible={setModalVisible}
        patientDates={patientDates}
        setPatientDates={setPatientDates}
        patientDate={patientDate}
        setPatientDate={setPatientDate}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 28,
    color: '#374151',
    fontWeight: '600',
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNewDate: {
    backgroundColor: '#6d28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNewDate: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  noPatients: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  list: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;

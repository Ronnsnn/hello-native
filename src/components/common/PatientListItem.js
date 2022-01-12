import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {dateFormat} from '../../helpers/date';

const PatientListItem = ({
  item,
  setModalVisible,
  editPatient,
  deletePatient,
}) => {
  const {patient, date, id} = item;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Paciente:</Text>
      <Text style={styles.text}>{patient}</Text>
      <Text style={styles.date}>{dateFormat(date)}</Text>
      <View style={styles.btnContainer}>
        <Pressable
          style={[styles.btn, styles.btnEdit]}
          onPress={() => {
            editPatient(id)
            setModalVisible(true);
          }}>
          <Text style={styles.btnText}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnDelete]}>
          <Text style={styles.btnText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#9413B8',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
  },
  text: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
  },
  date: {
    color: '#6a6f73',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEdit: {
    backgroundColor: '#F59E0B',
  },
  btnDelete: {
    backgroundColor: '#EF4444',
  },
  btnText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});

export default PatientListItem;

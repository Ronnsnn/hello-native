import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import DateField from './common/DateField';
import TextField from './common/TextField';

const DateForm = ({
  visible,
  setVisible,
  patientDates,
  setPatientDates,
  patientDate,
}) => {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [symptoms, setSymptoms] = useState('');

  useEffect(() => {
    if (patientDate) {
      setPatient(patientDate.patient);
      setOwner(patientDate.owner);
      setEmail(patientDate.email);
      setPhone(patientDate.phone);
      setDate(new Date(patientDate.date));
      setSymptoms(patientDate.symptoms);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCita = () => {
    // Validar
    if ([patient, owner, email, phone, date, symptoms].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios', [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Oki'},
      ]);
    }

    const newPatientDate = {
      patient,
      owner,
      email,
      phone,
      date,
      symptoms,
    };

    setPatientDates([...patientDates, newPatientDate]);
    setPatient('');
    setOwner('');
    setEmail('');
    setPhone('');
    setSymptoms('');
    setVisible(false);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>Nueva Cita</Text>

          <Pressable
            style={styles.btnCancelar}
            onPress={() => setVisible(false)}>
            <Text style={styles.btnCancelText}>X Cancelar</Text>
          </Pressable>

          <TextField
            label="Nombre Paciente"
            value={patient}
            setValue={setPatient}
            placeholder="Ingrese nombre de paciente"
          />

          <TextField
            label="Nombre propietario"
            value={owner}
            setValue={setOwner}
            placeholder="Ingrese nombre de propietario"
          />

          <TextField
            label="Email propietario"
            value={email}
            setValue={setEmail}
            placeholder="Ingrese email de propietario"
            keyboardType="email-address"
          />

          <TextField
            label="Teléfono propietario"
            value={phone}
            setValue={setPhone}
            placeholder="Ingrese teléfono de propietario"
            keyboardType="number-pad"
          />

          <DateField label="Fecha alta" value={date} setValue={setDate} />

          <TextField
            label="Síntomas"
            value={symptoms}
            setValue={setSymptoms}
            placeholder="Ingrese síntomas"
            keyboardType="number-pad"
            multiline={true}
            numberOfLines={3}
          />

          <Pressable style={styles.btnNewDate} onPress={() => handleCita()}>
            <Text style={styles.btnNewDateText}>Enviar</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    color: '#FFF',
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCancelText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  btnNewDate: {
    marginVertical: 30,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNewDateText: {
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 16,
  },
});

export default DateForm;
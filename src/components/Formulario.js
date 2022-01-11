import React, {useState} from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = ({visible, setVisible}) => {
  const [patient, setPatient] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [symptoms, setSymptoms] = useState('');

  return (
    <Modal animationType="slide" visible={visible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>Nueva Cita</Text>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              value={patient}
              onChange={setPatient}
              style={styles.input}
              keyboardType="default"
              placeholder="Ingrese Nombre de paciente"
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              value={propietario}
              onChange={setPropietario}
              style={styles.input}
              keyboardType="default"
              placeholder="Ingrese Nombre de paciente"
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              value={email}
              onChange={setEmail}
              style={styles.input}
              keyboardType="email-address"
              placeholder="Ingrese Nombre de paciente"
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              value={phone}
              onChange={setPhone}
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Ingrese Nombre de paciente"
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha alta</Text>
            <View style={styles.fechaContainer}>
              <DatePicker
                date={date}
                locale="es"
                onDateChange={d => setDate(d)}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              value={symptoms}
              onChange={setSymptoms}
              style={styles.input}
              keyboardType="default"
              placeholder="Ingrese síntomas"
              multiline={true}
              numberOfLines={3}
            />
          </View>
          <Button title="Enviar" onPress={() => setVisible(false)} />
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
  campo: {
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  fechaContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
});

export default Formulario;

import {StyleSheet} from 'react-native';

const commonStyle = StyleSheet.create({
  field: {
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600',
  },
});

export const textFieldStyle = StyleSheet.create({
  ...commonStyle,
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export const dateFieldStyle = StyleSheet.create({
  ...commonStyle,
  dateContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
});

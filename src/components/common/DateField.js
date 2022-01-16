import React from 'react';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {dateFieldStyle as styles} from './_styles';

const DateField = ({label, value, setValue}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.dateContainer}>
        <DatePicker
          date={value}
          locale="es"
          onDateChange={d => setValue(d)}
          minuteInterval={15}
        />
      </View>
    </View>
  );
};

export default DateField;

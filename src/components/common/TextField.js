import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {textFieldStyle as styles} from './_styles';

const TextField = ({
  label,
  value,
  setValue,
  placeholder,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = undefined,
}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default TextField;

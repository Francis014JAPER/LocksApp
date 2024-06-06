// src/views/LockForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { LocksViewModel } from '../viewmodels/LocksViewModel';

const LockForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const viewModel = new LocksViewModel();

  const handleSubmit = async () => {
    try {
      await viewModel.registerLock({ name, description });
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error registering lock:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
});

export default LockForm;
// src/views/LockDetail.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LocksViewModel } from '../viewmodels/LocksViewModel';

const LockDetail = ({ route }) => {
  const { lockId } = route.params;
  const [lock, setLock] = useState(null);
  const viewModel = new LocksViewModel();

  useEffect(() => {
    const fetchLock = async () => {
      try {
        const lockData = await viewModel.getLock(lockId);
        setLock(lockData);
      } catch (error) {
        console.error('Error fetching lock:', error);
      }
    };

    fetchLock();
  }, [lockId]);

  if (!lock) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{lock.name}</Text>
      <Text style={styles.description}>{lock.description}</Text>
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
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
  },
});

export default LockDetail;
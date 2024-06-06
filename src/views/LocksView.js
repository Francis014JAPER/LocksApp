// src/views/LocksView.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LocksViewModel } from '../viewmodels/LocksViewModel';

const LocksView = () => {
  const [locks, setLocks] = useState([]);
  const viewModel = new LocksViewModel();

  useEffect(() => {
    const fetchLocks = async () => {
      try {
        const locksData = await viewModel.getLocks();
        setLocks(locksData);
      } catch (error) {
        console.error('Error fetching locks:', error);
      }
    };

    fetchLocks();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={locks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.lockItem}>
            <Text style={styles.lockName}>{item.name}</Text>
            <Text style={styles.lockDescription}>{item.description}</Text>
          </View>
        )}
      />
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
  lockItem: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 8,
  },
  lockName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lockDescription: {
    fontSize: 16,
  },
});

export default LocksView;
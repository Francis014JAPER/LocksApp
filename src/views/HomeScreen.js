import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { View, Text, FlatList, Button } from 'react-native';
import lockViewModel from '../viewmodels/LockViewModel';

const HomeScreen = observer(({ navigation }) => {
  useEffect(() => {
    lockViewModel.fetchLocks();
  }, []);

  return (
    <View>
      <FlatList
        data={lockViewModel.locks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('LockDetail', { lock: item })}
            />
          </View>
        )}
      />
      <Button title="Add Lock" onPress={() => navigation.navigate('LockDetail')} />
    </View>
  );
});

export default HomeScreen;

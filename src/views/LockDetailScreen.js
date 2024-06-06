import React, { useState } from 'react';
import { View, TextInput, Button, Switch, Image, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import lockViewModel from '../viewmodels/LockViewModel';
import Lock from '../models/Lock';

const LockDetailScreen = ({ route, navigation }) => {
  const { lock } = route.params || {};
  const [name, setName] = useState(lock ? lock.name : '');
  const [photo, setPhoto] = useState(lock ? lock.photo : null);
  const [isActive, setIsActive] = useState(lock ? lock.isActive : false);

  const handleSave = async () => {
    const newLock = new Lock(lock ? lock.id : null, name, photo, isActive);
    if (lock) {
      await lockViewModel.updateLock(newLock);
    } else {
      await lockViewModel.addLock(newLock);
    }
    navigation.goBack();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.uri);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Lock Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Active</Text>
        <Switch value={isActive} onValueChange={setIsActive} />
      </View>
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default LockDetailScreen;

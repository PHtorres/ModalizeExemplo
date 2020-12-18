import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Modalize } from 'react-native-modalize';

const App = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize 
      onOpen={()=> {
        Alert.alert('abriu!');
      }}
      onPositionChange={(position) => {
        if(position === 'top'){
          Alert.alert('subiu');
        }

        if(position === 'initial'){
          Alert.alert('desceu');
        }
      }}
      snapPoint={50}
      alwaysOpen={100}
      ref={modalizeRef} 
      openAnimationConfig={{spring:{speed:2, bounciness:10}, timing:{duration:1000}}}>
        <View>
          <Text>Linha 1</Text>
          <Text>Linha 2</Text>
          <Text>Linha 3</Text>
          <Text>Linha 4</Text>
        </View>
      </Modalize>
    </>
  );
};

export default App;

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import { Animacion1,Animacion2,Animacion3,Animacion4 } from './components/Animacion1';
import { Animacion5 } from './components/Animacion5';
import { Animacion6 } from './components/Animacion6';
import { Animacion7 } from './components/Animacion7';

const App = () => {



  return (
    <>
      <View style={styles.contenido}>
        {/* <Animacion1 /> */}
        {/* <Animacion2 /> */}
        {/* <Animacion3 /> */}
        {/* <Animacion4 /> */}
        {/* <Animacion5 /> */}
        {/* <Animacion6 /> */}
        <Animacion7 />

      </View>
    </>
  )
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
  },
});

export default App;

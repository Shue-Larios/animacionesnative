import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Animated, View, TouchableWithoutFeedback } from 'react-native';

export const Animacion5 = () => {

    const [animacion] = useState(new Animated.Value(1));

    const presionarBoton = () => {

        Animated.spring(animacion, {
            toValue: .8,
            useNativeDriver: true
        }).start();
    }

    const soltarBoton = () => {
        Animated.spring(animacion, {
            toValue: 1,
            friction:1, // mas bajo mayor rebote 
            tension: 30, // entre mas bajo sea el numero mas suave es el movimiento
             useNativeDriver: true
        }).start();
    }

    const estiloAnimacion = {
        transform : [{ scale: animacion }]
    }

    return (
        <View style={[styles.contenedor]}>
            <TouchableWithoutFeedback
                onPressIn={() => presionarBoton()}
                onPressOut={() => soltarBoton()}
            >
                <Animated.View style={[styles.btn, estiloAnimacion]}>
                    <Text style={[styles.texto]}> Iniciar sesion </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
});


import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Animated, View } from 'react-native';

export const Animacion4 = () => {

    const [animacion] = useState(new Animated.Value(0));


    useEffect(() => {
        // timing en determinado tiempo realiza una animacion 
        Animated.timing(
            // utiliza dos valores
            animacion, {
            // 1 a q valor va a llegar
            toValue: 360,
            // 2 cuando va a durar
            duration: 500,
            useNativeDriver: false
        }
        ).start(); //obligatorio para q funcione la animacion
    }, [])

    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }

    return (
        <View>

            <Animated.View style={[styles.texto, estiloAnimacion]}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    },
});


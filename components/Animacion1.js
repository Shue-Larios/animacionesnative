import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Animated } from 'react-native';

export const Animacion1 = () => {

    const [animacion] = useState(new Animated.Value(0));


    useEffect(() => {
        // timing en determinado tiempo realiza una animacion 
        Animated.timing(
            // utiliza dos valores
            animacion, {
            // 1 a q valor va a llegar
            toValue: 1,
            // 2 cuando va a durar
            duration: 500,
            useNativeDriver: true
        }
        ).start(); //obligatorio para q funcione la animacion
    }, [])


    return (
        <Animated.View
        style={{
            opacity: animacion
        }}
        >

            <Text style={styles.texto}>Animacion1</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    },
});

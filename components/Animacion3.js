import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Animated, View } from 'react-native';

export const Animacion3 = () => {
 
    const [animacion] = useState(new Animated.Value(14));


    useEffect(() => {
        // timing en determinado tiempo realiza una animacion 
        Animated.timing(
            // utiliza dos valores
            animacion, {
            // 1 a q valor va a llegar
            toValue: 40,
            // 2 cuando va a durar
            duration: 500,
            useNativeDriver: false
        }
        ).start(); //obligatorio para q funcione la animacion
    }, [])


    return (
        <View>

            <Animated.Text style={[styles.texto, {
                fontSize: animacion
            }]}>Animacion3</Animated.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    },
});

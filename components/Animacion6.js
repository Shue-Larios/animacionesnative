import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

export const Animacion6 = () => {

    const [animacion1] = useState(new Animated.Value(0));
    const [animacion2] = useState(new Animated.Value(-50));


    useEffect(() => {
        // loop ejecuta la animacion de forma infinita
        Animated.loop(
            // ejecuta las animaciones en secuencia una tras otra
            Animated.sequence([
                Animated.timing(animacion2, {
                    toValue: -30,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.timing(animacion1, {
                    toValue: 60,
                    duration: 500,
                    useNativeDriver: true

                }),
                Animated.timing(animacion2, {
                    toValue: 30,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(animacion1, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                }), Animated.timing(animacion2, {
                    toValue: -30,
                    duration: 500,
                    useNativeDriver: true
                }),
            ])
        ).start();

    }, [])

    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { translateX: animacion2 }

        ]
    }

    return (
        <View style={{ alignItems: 'center' }} >
            <Animated.View
                style={[styles.caja, estiloAnimacion]}
            >

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    caja: {
        width: 10,
        height: 10,
        backgroundColor: 'cornflowerblue'
    },
});

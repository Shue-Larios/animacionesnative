import React, { startTransition, useEffect, useState } from 'react'
import { StyleSheet, Text, Animated } from 'react-native';

export const Animacion2 = () => {

    const [animacion] = useState(new Animated.Value(0));


    useEffect(() => {
        // timing en determinado tiempo realiza una animacion 
        Animated.timing(
            // utiliza dos valores
            animacion, {
            // 1 a q valor va a llegar
            toValue: 450,
            // 2 cuando va a durar
            duration: 1000,
            useNativeDriver: true
        }
        ).start(); //obligatorio para q funcione la animacion
    }, [])


    return (
        <Animated.View
            style={[
                styles.caja,
                {
                    // en este caso usar el scaleX por width
                    //     width    -- -> caleX: animacion,
                    // height-- -> scaleY: animacion
                    // width: animacion
                    scaleX: animacion,
                    scaleY: animacion
                }
            ]}
        >
        </Animated.View >
    )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    },
});


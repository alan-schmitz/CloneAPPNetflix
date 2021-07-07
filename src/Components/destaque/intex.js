import React from 'react';
import { View, Image, ImageBackground } from 'react-native';

import styles from './Styles';

import { LinearGradient } from 'expo-linear-gradient';

export default function Destaque () {
    return (
        <ImageBackground source = {require('../../assets/Elite.jpg')} style={styles.destaque}>
            <View>
            <Image resizeMode="contain" source={require('../../assets/Elitelogo.png')} style={styles.logo} />
            </View>

            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.9)',]} style={styles.efeito}/>

        </ImageBackground>
    );
}


import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

import styles from './Styles';

export default function Header () {
    return ( 
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.10)']} style={styles.header}>
            <View style={styles.headerhome}>
            <Image style={styles.headerlogo} source={require('../../assets/logo-n2.png')}/>
                <View style={styles.headerperfil}>
                    <TouchableOpacity style={styles.button}>
                    <AntDesign name="search1" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                    <AntDesign name="user" size={24} color="#ffffff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.headermenu}>
                <TouchableOpacity>
                    <Text style={styles.text}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Filmess</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Minha lista</Text>
                </TouchableOpacity>

            </View>

        </LinearGradient>
        


      
    );
}


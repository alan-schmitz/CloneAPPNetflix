import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';  


import styles from './Styles';

export default function footer () {
    return ( 
        
    <View style={styles.contender}>
        <TouchableOpacity style={styles.button}>
        <AntDesign name="home" size={24} color="white" />
          <Text style={styles.textbutton}>inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.button}>
            <FontAwesome name="list-alt" size={24} color="white" />
          <Text style={styles.textbutton}>Em breve</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} >
        <MaterialCommunityIcons name="download-circle-outline" size={24} color="white" />
          <Text style={styles.textbutton} >download</Text>
        </TouchableOpacity>
    </View>
        
        


      
    );
}


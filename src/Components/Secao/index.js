import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';


import styles from './Styles';


export default function secao () {
    return ( 
        <View>
        <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoria}>
            <View style={styles.titulocategoria}>
            <Text style={styles.text}> Populares na Netflix </Text>
            </View>
            <View style={styles.img}>
            <Image  style={styles.capa} source={require('../../assets/opoco.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/thecircle.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/shrek.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/RuPauls.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/naruto.jpg')}/>
            </View>
        </View>
        </ScrollView>
        </View>

        <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoria}>
            <View style={styles.titulocategoria}>
            <Text style={styles.text}> Séries </Text>
            </View>
            <View style={styles.img}>
            <Image  style={styles.capa} source={require('../../assets/ga.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/visavis.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/special.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/pulin.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/lacasa.jpg')}/>
            </View>
        </View>
        </ScrollView>
        </View>

        <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoria}>
            <View style={styles.titulocategoria}>
            <Text style={styles.text}> Filmes </Text>
            </View>
            <View style={styles.img}>
            <Image  style={styles.capa} source={require('../../assets/corra.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/fio.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/mae.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/mae.jpg')}/>
            <Image  style={styles.capa} source={require('../../assets/opoco.jpg')}/>
            </View>
        </View>
        </ScrollView>
        </View>

        </View>


        
    );
}
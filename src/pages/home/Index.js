import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import styles from  './Styles';

import Header from '../../Components/Header/index';
import Destaque from '../../Components/destaque/intex';
import Secao from '../../Components/Secao/index';
import Footer from '../../Components/footer/index';


import { AntDesign } from '@expo/vector-icons'; 


export default function Home () {
    return(
    
    <View style={styles.fundo}>
    <ScrollView vertical={true} showsVerticalScrollIndicator={false}> 
      <Destaque />
      <Header />
      <View style={styles.menodestaque}>
        <TouchableOpacity style={styles.menubutton}>
          <AntDesign name="plus" size={24} color="#ffffff" />
          <Text style={styles.textbutton}>Minha lista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonplay}>
          <AntDesign style={styles.buttonplaytext} name="play" size={24} color="black" />
          <Text style={styles.buttonplaytext}> Assitir </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menubutton}>
          <AntDesign name="infocirlceo" size={24} color="#ffffff" />
          <Text style={styles.textbutton} >Minha lista</Text>
        </TouchableOpacity>
      </View>
      <Secao />
      <Footer/>
    </ScrollView> 
    </View>

    );

}
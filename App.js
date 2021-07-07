import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Logim from './src/pages/login/Login';
import Home from './src/pages/home/Index';

export default function App() {
  return (
        <Logim/>
        //<Home />
  );
}

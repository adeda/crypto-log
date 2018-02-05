import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import Toolbar from './toolbar/Toolbar';
import { getColor } from './toolbar/helpers';
import styles from './../styles/styles';

const { headerContainer, header } = styles;

const Header = () => {
    return (
        <View style={headerContainer}>
          <StatusBar backgroundColor="#16a085"  animated={true} />
          <Toolbar  title="Cryptocurrency Tracker" color={getColor("#1abc9c")} />
        </View>
    )
}

export default Header;

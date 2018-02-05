import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import Toolbar from './toolbar/Toolbar';
import { getColor } from './toolbar/helpers';

const Header = () => {
    return (
        <View style={headerContainer}>
        <StatusBar
          backgroundColor="#16a085"
          animated={true}
        />
        <Toolbar  title="Cryptocurrency Tracker" color={getColor("#1abc9c")} />

        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 24,

    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
    }
})

const { headerContainer, header } = styles;


export default Header;

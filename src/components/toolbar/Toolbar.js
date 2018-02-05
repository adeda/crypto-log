import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Typo } from './Typography';
import { getColor } from './helpers';
import styles from './../../styles/styles';
import Touchable from 'react-native-platform-touchable';
import { StackNavigator } from "react-navigation";
import Settings from "./../Settings";

export default class Toolbar extends Component {
  render() {
    const {
     color,
     title
   } = this.props

    const { toolbar, touchableBgColor } = styles;

    return (
        <View style={[ styles.toolbar, { backgroundColor: getColor(color) } ]}>
          <Text style={[ styles.title, Typo.toolbarTitle ]} >
            {title.toUpperCase()}
          </Text>
        </View>
    )
  }
}

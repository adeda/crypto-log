import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import { Typo } from './Typography';
import { getColor } from './helpers';
import styles from './../../styles/styles';

export default class Toolbar extends Component {
  render() {
    
    const { color, title, toolbar } = styles;

    return (
        <View style={[ styles.toolbar, { backgroundColor: getColor(color) } ]}>
          <Text style={[ styles.title, Typo.toolbarTitle ]} >
            Criptocurrency Tracer
          </Text>
          <Text style={[ styles.settings]} >
            Settings
          </Text>
        </View>
    )
  }
}

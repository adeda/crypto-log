import React, {Component} from 'react';
import { StatusBar, Text, View } from 'react-native';
import styles from './../styles/styles';
import Toolbar from './toolbar/Toolbar';
import { getColor } from './toolbar/helpers';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Button from 'react-native-button';


class Settings extends Component {

  constructor () {
    super()
    this.state = {
      types1: [{label: 'USD', value: 0}, {label: 'EUR', value: 1}, {label: 'CYN', value: 2}],
      value1: 0,
      value1Index: 0,
      value1_1: 0,
      value1_1Index: 0,
      types2: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
      value2: 0,
      value2Index: 0,
      types3: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
      value3: 0,
      value3Index: 0,
    }
  }

  render () {

    const { headerContainer, header } = styles;

    return (
      <View>
        <View style={headerContainer}>
          <StatusBar backgroundColor="#16a085"  animated={true} />
          <Toolbar  title="Profile settings" color={getColor("#1abc9c")} />
        </View>
        <View>

        <View style={styles.component}>
           <Text style={styles.welcome}>Choose preffered currency</Text>
           <RadioForm
             ref="radioForm"
             radio_props={this.state.types1}
             initial={0}
             formHorizontal={false}
             labelHorizontal={true}
             buttonColor={'#2196f3'}
             labelColor={'#000'}
             animation={true}
             onPress={(value, index) => {
               this.setState({
                 value1:value,
                 value1Index:index
               })
             }}
           />
           <Text>selected: {this.state.types1[this.state.value1Index].label}</Text>

           <Button
             style={{fontSize: 20, borderColor: '#2196f3', borderWidth: 2}}
             onPress={() => this.refs.radioForm.updateIsActiveIndex(0)}> Force Update </Button>
         </View>

        </View>
      </View>
    );
  }
}

export default Settings;

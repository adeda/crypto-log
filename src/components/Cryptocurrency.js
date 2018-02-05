import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Navigator,
    Alert
} from 'react-native';
import { images } from '../Utils/CoinIcons';
import Touchable from 'react-native-platform-touchable';

import FetchCryptoDetails from './../Actions/FetchCryptoDetails';

import styles from './../styles/styles';

import axios from 'axios';


const {
    touchableBgColor,
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus
} = styles;

OnBUttonPress = (id, curr) => {
   return FetchCryptoDetails(id, curr);
  }

let curr = 'USD';

const Cryptocurrency = ({ id, rank, symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {

    return (

      <Touchable
          onPress={() => this.OnBUttonPress(id, curr)}
          style={touchableBgColor}
          background={Touchable.Ripple('grey')}>

        <View style={container}>

            <View style={upperRow}>
                <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>{price_usd}
                    <Text style={moneySymbol}> $ </Text>
                </Text>
            </View>
            <View style={statisticsContainer}>
                <Text>24h:
                     <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
            </View>
        </View>

         </Touchable>
    );
}

export default Cryptocurrency;

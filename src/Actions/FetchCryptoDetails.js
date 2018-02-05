import axios from 'axios';
import { Alert } from 'react-native';
import { apiBaseURL } from './../Utils/Constants';

export default function FetchCryptoDetails(cryptoId, curr) {

        return axios.get(`${apiBaseURL}/v1/ticker/`+ cryptoId +`/?convert=` + curr)
            .then(res => {
              details = res.data[0];
              console.log(details);
              let price = '';
              let market_cap = '';
              let  volume_24h = '';

                if(curr == 'EUR'){
                  price = details.price_eur;
                  market_cap = details.market_cap_usd;
                  volume = parseFloat(details['24h_volume_eur']);
                }
                if(curr == 'USD'){
                  price = details.price_usd;
                  market_cap = details.market_cap_usd;
                  volume = parseFloat(details['24h_volume_usd']);
                }

                header =  details.rank + " " + details.name + " | " + details.symbol + "     " + parseFloat(price).toFixed(2) + " " + curr + "\n";
                txt = "                                                " + parseFloat(details.price_btc).toFixed(2) + "BTC" + "\n\n" +
                     "       Volume:  " + volume +   "  "  + curr + "\n\n" +
                     "Market cap:  " + market_cap +  "  " + curr +  "\n\n" +
                     "1h:  " + details.percent_change_1h + "%     24h:  "  + details.percent_change_24h + "%     7d:  " + details.percent_change_7d + "%     \n\n" +
                     "       Total Suply:  " + details.total_supply + "\n\n" +
                     "Available Suply:  " + details.available_supply + "\n" +
                     "";

                          Alert.alert(
                            header,
                            txt,
                            [
                              {text: 'Close', onPress: () => console.log(cryptoId + ' pressed')},
                            ],
                            { cancelable: true }
                          );

            })
            .catch(err => {
                console.log(err.data);
            });
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    touchableBgColor: {
        backgroundColor: '#ffff'
    },
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'grey',
    },
    innerContainer: {
      alignItems: 'center',
    },
    toolbar: {
      height: 56,
      justifyContent: 'center'
    },
    title: {
      marginLeft: 16,
      color: 'white'
    },
    settings: {
      right: -340,
      color: 'white'
    },
    headerContainer: {
        display: "flex",
        marginTop: 24,
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
    },
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    },



  welcome: {
   fontSize: 20,
   textAlign: 'center',
   marginTop: 20,
   marginBottom: 20,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
 component: {
   paddingTop: 20,
   alignItems: 'center',
   marginBottom: 50,
 },
 radioStyle: {
   borderRightWidth: 1,
   borderColor: '#2196f3',
   paddingRight: 10
 },
 radioButtonWrap: {
   marginRight: 5
 },
})

export default styles;

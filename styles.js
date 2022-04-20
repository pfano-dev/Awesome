import * as React from 'react';
import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    img:{
        width: 200,
        height: 100,
        marginTop: 20,
    },
    btn:{
        width: 100,
        height: 40,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 30,
    },

    sectionHeader: {
      backgroundColor:'#F7F8FA',
      borderBottomEndRadius: 50,
      borderBottomStartRadius: 50,
      marginLeft: 5,
      paddingBottom:20,
    },
    item: {
      paddingBottom: 10,
      paddingTop: 20,
      paddingLeft:10,
      paddingRight: 10,
      fontSize: 18,
      height: 60,
      textAlign: 'left'
    },

    subText:{
        fontSize: 22,
        color: 'rgb(128, 128, 128)',
        paddingLeft:20,
    },
    text:{
        fontSize: 22,
    },


    container:{
        padding: 30
    },
    label:{
        fontSize: 16,
    },
    scrollView: {
        backgroundColor: 'grey',
        marginHorizontal: 10,
      },
    textBox:{
        backgroundColor: '#efefef',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20,

    },
    button:{
        marginTop: 10,
    }

});

export default styles;
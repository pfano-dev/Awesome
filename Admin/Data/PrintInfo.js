import * as React from 'react';
import {StyleSheet, View, Text , SectionList, Image, Pressable,  RefreshControl,Button, Platform,ScrollView, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { useRoute } from "@react-navigation/native";




const PrintInfo = () => {

    const route = useRoute();
    const data = route.params;
    console.log('.....................................',data.data.prevData)
   


   const Owner = "Owner : " + data.data.prevData.prevData.prevData.item.item.Owner;
  
   const Contant ="Contant : " + data.data.prevData.prevData.prevData.item.item.Contant;
  
   const Location ="Location : " + data.data.prevData.prevData.prevData.item.item.Location;
  
   const StoreName ="StoreName : " + data.data.prevData.prevData.prevData.item.item.StoreName;
  
   const Question1 ="Which wholesaler are they linked to? : " + data.data.prevData.prevData.prevData.item.item.Question1;
  
   const Question2 ="Do they sell Vodacom products? : " + data.data.prevData.prevData.prevData.item.item.Question2;
  
   const Question3 ="Do they have product knowledge/training? : " + data.data.prevData.prevData.prevData.item.item.Question3;
   const Question4 ="Do they experience network issues? : " + data.data.prevData.prevData.prevData.item.item.Question4;
   const Question5 ="Do they Rica? : " + data.data.prevData.prevData.prevData.item.item.Question5;
  

    const html = 
    `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      </head>
      <body">
  
<h1 style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
${Owner}
</h1>
<h1 style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
${Contant}
</h1>
<h1 style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
${Location }
</h1>
<h1 style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
${StoreName}
</h1>
<h1 style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">

</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
${Question1}
</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
${Question2}
</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
${Question3}
</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
${Question4}
</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
${Question5}
</h1>
<h1 style="font-size: 30px;margin:20px font-family: Helvetica Neue; font-weight: normal;">
tiering Questions
</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
${data.data.finalTime}
</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
Shelf capacity ${data.data.question} br

</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
Competitor capacity ${data.data.question1}br

</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
Average store traffic ${data.data.question2}br

</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
Location type ${data.data.question3}br

</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
Brand rand value ${data.data.question4}br

</h1>
<h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
Branding audit ${data.data.question5}br
</h1>

      </body>
    </html>
    `
    
    ;
    
   
    const [selectedPrinter, setSelectedPrinter] = React.useState();

    const print = async () => {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      await Print.printAsync({
        html,
        printerUrl: selectedPrinter?.url, // iOS only
      });
    }
  
    const printToFile = async () => {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      const { uri } = await Print.printToFileAsync({
        html
      });
      console.log('File has been saved to:', uri);
      await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }
  
    const selectPrinter = async () => {
      const printer = await Print.selectPrinterAsync(); // iOS only
      setSelectedPrinter(printer);
    }
  



  return (
    <ScrollView>
    <View style={styles.container}>

<Text style={{margin:5}}>Owner : {" "}{Owner}</Text>
<Text style={{margin:5}}>StoreName : {""}{StoreName}</Text>
<Text style={{margin:5}}>Location :{" "}  {Location}</Text>
<Text style={{margin:5}}>Contact : {" "}{Contant}</Text>
<Text style={{margin:5}}> Which wholesaler are they linked to?{"  "} {Question1}</Text>
<Text style={{margin:5}}>Do they sell Vodacom products?{"  "} {Question2}</Text>
<Text style={{margin:5}}>Do they have product knowledge/training? {"  "}{Question3}</Text>
<Text style={{margin:5}}>Do they experience network issues?{" "}{Question4}</Text>
<Text style={{margin:5}}>Do they Rica?{" "} {Question5}</Text>
<Text style={{margin:5}}>{" "} </Text>
<Text style={{margin:5}}>{data.data.finalTime}</Text>
<Text style={{margin:5}}>Shelf capacity : {data.data.prevData.question}</Text>
<Text style={{margin:5}}>Competitor capacity : {data.data.prevData.question1}</Text>
<Text style={{margin:5}}>Average store traffic:  {data.data.prevData.question2}</Text>
<Text style={{margin:5}}>Location type : {data.data.prevData.question3}</Text>
<Text style={{margin:5}}>Brand rand value : {data.data.prevData.question4}</Text>
<Text style={{margin:5}}>Branding audit : {data.data.prevData.question5}</Text>

<Text style={{margin:35}}></Text>

    <Button title='Print' onPress={print}  />
    <View style={styles.spacer} />
    <Button title='Print to PDF file' onPress={printToFile}/>
    {Platform.OS === 'ios' &&
      <>
        <View style={styles.spacer} />
        <Button title='Select printer' onPress={selectPrinter}/>
        <View style={styles.spacer} />
        {selectedPrinter ? <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
      </>
    }
  </View>
  </ScrollView>
  )
}

export default PrintInfo

const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        flexDirection: 'column',
        padding: 8,
      },
      spacer: {
        height: 8
      },
      printer: {
        textAlign: 'center',
      }



})




















// <h1 style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
// ${Owner}
// </h1>
// <h1 style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
// ${Contant}
// </h1>
// <h1 style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
// ${Location }
// </h1>
// <h1 style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">
// ${StoreName}
// </h1>
// <h1 style="font-size: 30px; font-family: Helvetica Neue; font-weight: normal;">

// </h1>
// <h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
// ${Question1}
// </h1>
// <h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
// ${Question2}
// </h1>
// <h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
// ${Question3}
// </h1>
// <h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
// ${Question4}
// </h1>
// <h1 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
// ${Question5}
// </h1>

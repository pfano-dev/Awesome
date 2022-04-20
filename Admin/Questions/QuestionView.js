import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const QuestionView = () => {

    const route = useRoute();

    const prevData = route.params;
 
    // console.log("?...........prevData",prevData.data.prevData.prevData.item.item)

    const mainQuestions = prevData.data.prevData.prevData.item.item
    const terrifuestions = prevData.data
    console.log("?...........prevData",terrifuestions.finalTime)
  return (
    <View>
      <Text>Owner : {mainQuestions.Owner}</Text>
      <Text>Location : {mainQuestions.Location}</Text>
      <Text>StoreName : {mainQuestions.StoreName}</Text>
      <Text>Contant : {mainQuestions.Contant}</Text>
      <Text>Which wholesaler are they linked to? : {mainQuestions.Question1}</Text>
      <Text>Do they sell Vodacom products? : {mainQuestions.Question2}</Text>
      <Text>Do they have product knowledge/training? : {mainQuestions.Question3}</Text>
      <Text>Do they experience network issues? : {mainQuestions.Question4}</Text>
      <Text>Do they Rica? : {mainQuestions.Question5}</Text>
      <Text style={{marginVertical:20, fontSize:25}}>tiering Questions</Text>
      <Text>{terrifuestions.finalTime}</Text>
      <Text>{terrifuestions.question}</Text>
      <Text>{terrifuestions.question1}</Text>
      <Text>{terrifuestions.question2}</Text>
      <Text>{terrifuestions.question3}</Text>
      <Text>{terrifuestions.question4}</Text>
      <Text>{terrifuestions.question5}</Text>
    

    </View>
  )
}

export default QuestionView

const styles = StyleSheet.create({})
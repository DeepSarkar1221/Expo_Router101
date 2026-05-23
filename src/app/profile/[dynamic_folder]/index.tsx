import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const IndexOfDynamicFolder = () => {

    const {dynamic_folder}=useLocalSearchParams();
  return (
    <View>
      <Text>IndexOfDynamicFolder: {dynamic_folder}</Text>
    </View>
  )
}

export default IndexOfDynamicFolder

const styles = StyleSheet.create({})
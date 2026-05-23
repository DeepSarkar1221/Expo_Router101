import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const UserId = () => {
    const {userId}=useLocalSearchParams();
  return (
    <View>
      <Text>{userId}</Text>
      
    </View>
  )
}

export default UserId

const styles = StyleSheet.create({})
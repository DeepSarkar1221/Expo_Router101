import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>home Page</Text>
      <Link href={"/profile/ChaiCode"}>click here for profile</Link>
      <Link href={"/user/123"}>userIdScreen</Link>
      <Link href={"username/Deep"}>UserNamePage</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

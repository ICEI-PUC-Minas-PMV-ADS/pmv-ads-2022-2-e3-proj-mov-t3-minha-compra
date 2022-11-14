import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LottieView from 'lottie-react-native';

export default function Refresh() {
  const animation = useRef(null);
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 350,
          height: 350
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/image/loading-animation.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {},
});

import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../constants";
import { Alert } from "react-native";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import io from "socket.io-client";
const socket = io("http://192.168.1.40:8000");
const KelimeSabitsiz = () => {
  //http://192.168.1.40:8000
  const navigation = useNavigation();
  const route = useRoute();
  const playerId = route.params.player;
  socket.on("successMessage", (data) => {
    console.log("Başarılı mesaj alındı:", data);
    const limit = data;
    navigation.navigate("LimitedWordInput", { limit: limit, player: playerId });
  });

  socket.on("errorMessage", (message) => {
    console.error("Hata oda dolu:", message);
    // Hata mesajını işle (örneğin kullanıcıya bildir)
  });

  const handleSquarePress = (number) => {
    socket.emit("number", { number: number, player: playerId });
    console.log("Seçilen sayı gönderildi:", number);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => handleSquarePress(4)}
        >
          <Text style={styles.number}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => handleSquarePress(5)}
        >
          <Text style={styles.number}>5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => handleSquarePress(6)}
        >
          <Text style={styles.number}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => handleSquarePress(7)}
        >
          <Text style={styles.number}>7</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black, // Arka planı siyah olarak ayarlayın
  },
  row: {
    flexDirection: "row",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: colors.lightgrey,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    borderColor: colors.darkgrey,
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default KelimeSabitsiz;

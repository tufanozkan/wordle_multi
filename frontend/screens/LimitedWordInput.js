import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import io from "socket.io-client";
const socket = io("http://192.168.1.40:8000");
const LimitedWordInput = () => {
  // props'tan limit'i direkt alıyoruz
  const [text, setText] = useState("");
  const route = useRoute();
  navigation = useNavigation();
  const limit = route.params.limit;
  const playerid = route.params.player;

  socket.on("successMessage", (word) => {
    console.log("Başarılı mesaj alındı:", word);
    //rakibi bekleme ve wordle ekrani gelecek
  });

  socket.on("ReadytoPlay", (word) => {
    console.log(word);
    navigation.navigate("InGame", { word: word, email: playerid });
  });
  socket.on("errorMessage", (message) => {
    console.error("Hata :", message);
    // Hata mesajını işle (örneğin kullanıcıya bildir)
  });

  const handleTextChange = (inputText) => {
    if (inputText.length <= limit) {
      // Karakter sayısını kontrol et
      setText(inputText);
    } else {
      Alert.alert("Uyarı", `Metin ${limit} karakteri geçemez.`);
    }
  };

  const handleSubmit = () => {
    if (text.length == limit) {
      console.log("Girilen metin :" + text);
      const roomId = `room${limit}`;

      socket.emit("word", { word: text, playerid: playerid, roomId: roomId });
    } else {
      Alert.alert("Uyarı", `Metin ${limit} uzunlugunda olmali.`);
    }
  };

  return (
    <View>
      <TextInput
        multiline
        placeholder={`En fazla ${limit} kelime girin`}
        value={text}
        onChangeText={handleTextChange}
      />
      <Button title="Gönder" onPress={handleSubmit} />
    </View>
  );
};

export default LimitedWordInput;

import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Pressable,
  SafeAreaView,
  Alert,
} from "react-native";
import { colors } from "../constants";

const Login = ({ navigation }) => {
  const mailInput = useRef(null);
  const passInput = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonPress = async () => {
    if (email && password) {
      try {
        const response = await fetch("http://192.168.1.40:3000/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        console.log(response.data); // Sunucudan gelen yanıtı yazdırır
        Alert.alert("User logged successfully");
        navigation.navigate("KelimeSabitsiz", { player: email });
      } catch (error) {
        console.error("Error logging user:", error);
        Alert.alert("An error occurred while logging user");
      }
    } else {
      Alert.alert("Email or password is empty");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <Text style={{ marginVertical: 12, color: "white" }}>Sign-In</Text>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginVertical: 8, color: "white" }}>
            Email address
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            height: 48,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22,
            backgroundColor: "white",
          }}
        >
          <TextInput
            placeholder="Enter your email address"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginVertical: 8, color: "white" }}>Password</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 48,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22,
            backgroundColor: "white",
          }}
        >
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Button
          title="Login"
          color={colors.lightgrey}
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={handleButtonPress}
        />
        <Text style={{ color: "white" }}>Don't You Have an Account?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "white" }}>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

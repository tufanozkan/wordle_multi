import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useRef, useState } from "react";

const Register = ({ navigation }) => {
  const mailInput = useRef(null);
  const passInput = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonPress = async () => {
    if (email && password) {
      try {
        const response = await fetch("http://192.168.1.40:3000/user/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        console.log(response.data); // Sunucudan gelen yanıtı yazdırır
        Alert.alert("User registered successfully");
      } catch (error) {
        console.error("Error registering user:", error);
        Alert.alert("An error occurred while registering user");
      }
    } else {
      Alert.alert("Email or password is empty");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <Text style={{ marginVertical: 12 }}>Create an Account</Text>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginVertical: 8 }}>Email address</Text>
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
          }}
        >
          <TextInput
            ref={mailInput}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter your email address"
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginVertical: 8 }}>Password</Text>
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
          }}
        >
          <TextInput
            ref={passInput}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter your password"
          />
        </View>
        <Button
          title="Register"
          style={{ marginTop: 18, marginBottom: 4 }}
          onPress={handleButtonPress}
        />
        <Text>Already Have an Account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});

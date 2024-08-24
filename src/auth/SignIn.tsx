// screens/LoginScreen.tsx
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  ImageBackground,
} from "react-native";
import { signIn } from "../../firebase";
import { useAppContext } from "../../Appcontext";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignIn = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleUpdateUserData } = useAppContext();

  const handleLogin = () => {
    signIn(email, password, (user: any) => {
      handleUpdateUserData(user);
      navigation.navigate("HomeScreen");
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeScreen" }],
      });
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.backgroundimage} source={{uri: "https://firebasestorage.googleapis.com/v0/b/to-do-list-app-2559b.appspot.com/o/BG.png?alt=media&token=ebeb0270-b1d4-4e5f-a8d0-a7884a305561"}}>
      <Text style={styles.SignInText}>Welcome Back!</Text>
      <Image
        style={styles.SignInImage}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/to-do-list-app-2559b.appspot.com/o/young%20man%20explaining%20lesson%20material%20standing%20next%20to%20whiteboard.png?alt=media&token=2bfee27d-e647-4e03-8104-de66dcbda75e",
        }}
      ></Image>

      <TextInput
        style={styles.input}
        placeholder="Enter your Email address "
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.SignInEmail} onPress={() => navigation.navigate("Todo")}>
        <Text style={styles.SignInEmailText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.DontHaveAccountTextContainer}>
        <Text style={styles.DontHaveAccountText}>Don't have account ?</Text>
        <Text
          style={styles.SignUpText}
          onPress={() => navigation.navigate("SignUp")}
        >
          {" "}
          Sign Up{" "}
        </Text>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundimage: {
    flex:1,
   width: "100%"},
  SignInText: {
    fontWeight: 500,
    fontSize: 20,
    alignSelf: "center",
    color: "#000000",
    marginBottom: 30,
  },
  SignInImage: {
    width: 211,
    height: 226,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
   
  },
  SignInEmail: {
    backgroundColor: "#55847A",
    width: 220,
    height: 44,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  SignInEmailText: {
    color: "#FFFFFF",
    fontSize: 14,
    alignSelf: "center",
    justifyContent: "center",
  },
  DontHaveAccountTextContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  DontHaveAccountText: {
    color: "#000000",
    fontSize: 15,
  },
  SignUpText: {
    color: "#55847A",
    fontSize: 15,
  },
  input: {
    width: 300,
    height: 43,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    marginBottom: 12,
    paddingHorizontal: 8,
    alignSelf: "center",
  },
});

export default SignIn;

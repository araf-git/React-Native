// login form submission

import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";
  import { useState } from "react";
  
  export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
  
    function validateForm() {
      let errors = {};
  
      if (!email) {
        errors.email = "Email is required";
      }
      if (!password) {
        errors.password = "Password is required";
      }
  
      setErrors(errors);
  
      return Object.keys(errors).length === 0;
    }
  
    function handleSubmit() {
      if(validateForm()) {
        console.log("Submitted", email, password)
        setEmail("")
        setPassword("")
        setErrors({})
      }
    }
  
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.container}
      >
      
        <View style={styles.form}>
          <Image
            source={require("./assets/adaptive-icon.png")}
            style={styles.image}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
          <Button title="Login" onPress={handleSubmit} />
        </View>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "lightblue",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    form: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      elevation: 8,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: "bold",
    },
    input: {
      height: 40,
      borderColor: "#ddd",
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
    },
    image: {
      width: 200,
      height: 400,
      alignSelf: "center",
      marginBottom: 50,
    },
    errorText: {
      color: "red",
      marginBottom: 10
    }
  });
  
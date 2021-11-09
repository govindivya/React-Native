import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../../firebase.config";

const SignUpForm = ({ navigation }) => {


  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required("A valid email is required !"),
    username: Yup.string().required().min(3, "Username is very short !"),
    password: Yup.string()
      .required()
      .min(6, "Password should have atleast 6 characters !"),
    passwordAgain: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const onSignUp = async (email, username, password) => {
    const auth = getAuth();
    const db = getFirestore();
    const profile_picture= await getRandomProfilePic()
    createUserWithEmailAndPassword(auth, email, password)
      .then((Authuser) => {
        console.log(Authuser.user.uid)
        addDoc(collection(db, "users"), {
          user_uid:Authuser.user.uid,
          email:email,
          username:username,
          profile_picture:profile_picture
        })
          .then((user) => {
            console.log(user.id);
          })
          .catch((e) => {console.log(e)});
      })
      .catch((e) => console.log(e));
  };

  const getRandomProfilePic = async () => {
    const response = await fetch("https:/randomuser.me/api");
    const data = await response.json();
    console.log(data.results[0].picture.large)
    return ""+data.results[0].picture.large+""
  };
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          passwordAgain: "",
        }}
        onSubmit={(values) => {
          onSignUp(values.email, values.username, values.password);
        }}
        validationSchema={SignUpFormSchema}
        validateOnMount={true}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 20,
                color: "gray",
              }}
            >
              Sign up here{" "}
            </Text>
            <TextInput
              name="email"
              placeholder="Phone number , username or email "
              placeholderTextColor="#444"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              style={styles.inputField}
              value={values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {errors.email && values.email.length > 1 && (
              <Text style={{ color: "red", fontSize: 16 }}>
                This is not a valid email
              </Text>
            )}
            <TextInput
              name="username"
              placeholder="username "
              placeholderTextColor="#444"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              style={styles.inputField}
              value={values.username}
              onChange={handleChange("username")}
              onBlur={handleBlur("username")}
            />
            {errors.username && values.username.length > 1 && (
              <Text style={{ color: "red", fontSize: 16 }}>
                {errors.username}
              </Text>
            )}
            <TextInput
              name="password"
              placeholder="Password "
              placeholderTextColor="#444"
              autoCapitalize="none"
              keyboardType="visible-password"
              textContentType="password"
              style={styles.inputField}
              value={values.password}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            {errors.password && values.password.length > 1 && (
              <Text style={{ color: "red", fontSize: 16 }}>
                {errors.password}
              </Text>
            )}
            <TextInput
              name="passwordAgain"
              placeholder="Password again "
              placeholderTextColor="#444"
              autoCapitalize="none"
              keyboardType="visible-password"
              textContentType="password"
              style={styles.inputField}
              values={values.passwordAgain}
              onChange={handleChange("passwordAgain")}
              onBlur={handleBlur("passwordAgain")}
            />
            {errors.passwordAgain && values.passwordAgain.length > 1 && (
              <Text style={{ color: "red", fontSize: 16 }}>
                {errors.passwordAgain}
              </Text>
            )}
            <Pressable
              style={[
                styles.button,
                isValid ? styles.green : styles.lightgreen,
              ]}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={{ fontSize: 18, color: "white" }}>Sign up</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.btnblue, styles.btnMarginTop]}
              onPress={() => navigation.push("LoginScreen")}
            >
              <Text style={{ fontSize: 18, color: "white" }}>
                Already registred? login here
              </Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  inputField: {
    padding: 10,
    height: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    width: "100%",
    maxWidth: 600,
    marginVertical: 3,
  },
  green: {
    backgroundColor: "green",
  },
  lightgreen: {
    backgroundColor: "lightgreen",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 5,
    width: "100%",
    height: 50,
    fontSize: 18,
    maxWidth: 600,
    marginVertical: 5,
  },
  btnblue: {
    backgroundColor: "blue",
  },
  btnMarginTop: {
    marginTop: 50,
  },
});

export default SignUpForm;

import React from "react";
import { Text, View } from "react-native";
import { Button } from 'react-native-paper';

export const Footer = () => {
  return (
    <View style={{flex: 1, alignItems: "flex-start",}}>
      <Text style={{paddingLeft: 16, paddingVertical: 12, fontSize: 16}}>Footer menu</Text>
      <Button uppercase={false} color="#202020" mode="text">About us</Button>
      <Button uppercase={false} color="#202020" mode="text">Contact</Button>
      <Button uppercase={false} color="#202020" mode="text">Questions and answers</Button>
      <Button uppercase={false} color="#202020" mode="text">Terms of trade</Button>
      <Button uppercase={false} color="#202020" mode="text">Shipping and Returns Policy</Button>
      <Button uppercase={false} color="#202020" mode="text">Undo your purchase</Button>
      <Button uppercase={false} color="#202020" mode="text">Make a complaint</Button>
      <Button uppercase={false} color="#202020" mode="text">Personal data policy</Button>
      <Button uppercase={false} color="#202020" mode="text">For companies and the public sector</Button>
    </View>
  );
};

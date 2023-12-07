import { RadioGroup } from "react-native-radio-buttons-group";
import { Slider } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.locOjwqv} renderItem={({
        item
      }) => <View style={styles.XTosAodU}></View>} ItemSeparatorComponent={() => <View style={styles.ndJTZesY} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList><TextInput style={styles.igbRJvAO}></TextInput><Text style={styles.XwGoQOKC}>Lorem ipsum…</Text><ActivityIndicator style={styles.JwhmlmlR}></ActivityIndicator><CheckBox style={styles.NzCZWYmp} title="Checkbox Title"></CheckBox><Slider style={styles.RswdADNR} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><RadioGroup style={styles.QtVCEGxT} radioButtons={[{
        id: "1",
        label: "Option 1",
        value: "option1"
      }, {
        id: "2",
        label: "Option 2",
        value: "option2"
      }]} layout="column"></RadioGroup></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  locOjwqv: {
    position: "absolute",
    width: 100,
    height: 150
  },
  XTosAodU: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  ndJTZesY: {
    backgroundColor: "#000000",
    height: 1
  },
  igbRJvAO: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  XwGoQOKC: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  JwhmlmlR: {
    width: 50,
    height: 50
  },
  NzCZWYmp: {
    width: 183,
    height: 69
  },
  RswdADNR: {
    width: 150,
    height: 40
  },
  QtVCEGxT: {
    width: 120,
    height: 70
  }
});
export default Untitled2;
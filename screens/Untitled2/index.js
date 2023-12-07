import { FlatList } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.QzIpRCco}></View><Text style={styles.rHhQlJhJ}>Lorem ipsum…</Text><FlatList style={styles.ZauhiPJk} renderItem={({
        item
      }) => <View style={styles.iwGTAxcL}></View>} ItemSeparatorComponent={() => <View style={styles.oXRvfvcg} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  QzIpRCco: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  rHhQlJhJ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  ZauhiPJk: {
    position: "absolute",
    width: 100,
    height: 150
  },
  iwGTAxcL: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  oXRvfvcg: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled2;
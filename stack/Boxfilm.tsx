import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { movies } from "./data_2";

const Box = ({ item }) => {
  return (
    <View style={styles.box}>
      <View style={styles.container1}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 100, height: 100 }}
        />
        <View style={styles.container2}>
          <Text>{item.title}</Text>
          <View style={styles.container3}>
            <Text>{item.year}</Text>
            <Text>{item.length}</Text>
            <Text>{item.rate}</Text>
          </View>
          <Text>{item.score}</Text>
        </View>
      </View>
      <Text>{item.description}</Text>
      <Text>{item.category.join(", ")}</Text>
    </View>
  );
};

const Boxfilm = () => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => {
        return <Box item={item} />;
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Boxfilm;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
  },
  container1: {
    flexDirection: "row",
    gap: 10,
  },
  container2: {
    flexDirection: "column",
  },
  container3: {
    flexDirection: "row",
    gap: 20,
  },
});

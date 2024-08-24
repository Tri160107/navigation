import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Movies, movies } from "./data_2";

const Box = () => {
  return (
    <View style={styles.container}>
      {movies.map((movie: { image: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; year: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; length: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; rate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; score: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; category: any[]; }, index: React.Key | null | undefined) => (
        <View key={index} style={styles.box}>
          <View style={styles.container1}>
            <Image
              source={{ uri: movie.image }}
              style={{ width: 100, height: 100 }}
            />
            <View style={styles.container2}>
              <Text>{movie.title}</Text>
              <View style={styles.container3}>
                <Text>{movie.year}</Text>
                <Text>{movie.length}</Text>
                <Text>{movie.rate}</Text>
              </View>
              <Text>{movie.score}</Text>
            </View>
          </View>
          <Text>{movie.description}</Text>
          <Text>{movie.category.join(", ")}</Text>
        </View>
      ))}
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    padding: 10,
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

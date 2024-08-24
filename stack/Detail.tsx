import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Detail: React.FC<{ route: any }> = ({ route }) => {
  const { character } = route.params;
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.dateOfBirth}>Date of Birth: {character.date_of_birth}</Text>
      <Text style={styles.height}>Height: {character.height}</Text>
      <Text style={styles.movies}>Movies: {character.movies.join(", ")}</Text>
      <Text style={styles.awards}>Awards: {character.award.join(", ")}</Text>
      <Image source={{ uri: character.film_image }} style={styles.filmImage} />
      <Image source={{ uri: character.film_images }} style={styles.filmImage} />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  dateOfBirth: {
    fontSize: 18,
    marginBottom: 5,
  },
  height: {
    fontSize: 18,
    marginBottom: 5,
  },
  movies: {
    fontSize: 18,
    marginBottom: 5,
  },
  awards: {
    fontSize: 18,
    marginBottom: 20,
  },
  filmImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
});

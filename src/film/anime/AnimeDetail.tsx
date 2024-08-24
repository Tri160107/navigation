import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const AnimeDetail: React.FC<{ route: any }> = ({ route }) => {
  const { anime } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: anime.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{anime.title}</Text>
        <Text style={styles.details}>Year: {anime.year}</Text>
        <Text style={styles.details}>Rate: {anime.rate}</Text>
        <Text style={styles.description}>{anime.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  info: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#666',
  },
});

export default AnimeDetail;

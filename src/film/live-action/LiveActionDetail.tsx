import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const LiveActionDetail: React.FC<{ route: any }> = ({ route }) => {
  const { liveaction } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: liveaction.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{liveaction.title}</Text>
        <Text style={styles.details}>Year: {liveaction.year}</Text>
        <Text style={styles.details}>Rate: {liveaction.rate}</Text>
        <Text style={styles.description}>{liveaction.description}</Text>
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

export default LiveActionDetail;

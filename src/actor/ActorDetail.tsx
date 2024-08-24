import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteActor } from '../../firebase';
import { useNavigation } from '@react-navigation/native';


const ActorDetail: React.FC<{ route: any }> = ({ route }) => {
  const navigation =useNavigation<any>();
  const { actor } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: actor.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{actor.name}</Text>
        <Text style={styles.details}>Year: {actor.born}</Text>
        <Text style={styles.details}>Rate: {actor.movie}</Text>
        <Text style={styles.description}>{actor.award}</Text>
        <TouchableOpacity onPress={() => {
          deleteActor(actor.id).then(() => {
            navigation.navigate('ActorList')})}}>
          Xóa
        </TouchableOpacity>
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

export default ActorDetail;

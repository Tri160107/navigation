import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Actor, actorData } from './ActorData'; 
import { addActor, deleteActor, getListActor } from '../../firebase';

const ActorList: React.FC = () => {
  const [listActor, setListActor] = useState<Actor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getListActor().then((data) => {
      setListActor(data);
      setLoading(false);
    });
  }, []);
  const navigation = useNavigation<any>();

  const renderItem = ({ item }: { item: Actor }) => (
    <View>
      <TouchableOpacity onPress={() => {navigation.navigate('ActorDetail', { actor: item })}}>Xem chi tiết</TouchableOpacity>
      <TouchableOpacity onPress={() => {
        deleteActor(item.id as string);
        setListActor(listActor.filter((actor) => actor.id !== item.id))
      }}>Xóa</TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View> 
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        addActor()
      }}>
        <Text>Thêm mới</Text>
      </TouchableOpacity>
      <FlatList
        data={listActor}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});

export default ActorList;

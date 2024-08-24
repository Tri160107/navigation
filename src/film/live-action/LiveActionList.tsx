import React, { useEffect, useState } from "react";
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LiveAction, liveactionData } from "./LiveActionData";
import { getListLiveAction } from "../../../firebase";

const LiveActionList: React.FC = () => {
  const [listLiveAction, setListLiveAction] = useState<LiveAction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getListLiveAction().then((data) => {
      setListLiveAction(data);
      setLoading(false);
    });
  }, []);
  const navigation = useNavigation<any>();

  const renderItem = ({ item }: { item: LiveAction }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("LiveActionDetail", { liveaction: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large"></ActivityIndicator>
      ) : (
        <FlatList
          data={listLiveAction}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
  description: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
});

export default LiveActionList;
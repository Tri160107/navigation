import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Todo } from "./Todo";

interface Props {
  item: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
const TodoCard: React.FC<Props> = ({ item, toggleTodo, deleteTodo }) => {
  // const { item, toggleTodo, deleteTodo } = props;
  // const item = props.item
  // const toggleTodo = props.toggleTodo
  // const deleteTodo = props.deleteTodo
  // Component là 1 thành phần giao diện, đảm nhiệm 1 chức năng cụ thể
  // Có thể nhận dữ liệu từ component cha truyền vào thông qua props (properties) => dạng object
  // trả về 1 giao diện (View)
  return (
    <View style={styles.cardTodo}>
      <Text>
        {item.id} - {item.name} -{" "}
        {item.isCompleted ? "Hoàn thành" : "Chưa hoàn thành"}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
          <View
            style={item.isCompleted ? styles.boxDone : styles.boxNotDone}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
          <Entypo name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  boxDone: {
    width: 20,
    height: 20,
    backgroundColor: "green",
  },
  boxNotDone: {
    width: 20,
    height: 20,
    backgroundColor: "red",
  },
  input: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  textBtn: {
    color: "white",
  },
  cardTodo: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

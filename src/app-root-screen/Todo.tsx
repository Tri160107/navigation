import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import TodoCard from "./TodoCard";
import AntDesign from "@expo/vector-icons/AntDesign";
export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

// arrow function () => {
//   // code
// }
// const add = (a: number, b: number) => {
//   return a + b;
// };

// const add = (a: number, b: number) => (a + b);

// arr.map((item,index) => (<></>))
const Todo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const [newNameToDo, setNewNameToDo] = useState<string>("");

  const addTodo = (name: string) => {
    // Tạo mới 1 todo
    let newTodo: Todo;

    newTodo = {
      id: todoList.length + 1,
      name: name,
      isCompleted: false,
    };

    setTodoList([newTodo, ...todoList]);
  };

  const deleteTodo = (id: number) => {
    // [1,2,3,4,5].filter(a=>a != 3) => `id = 3` => 1, 2, 4, 5
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const toggleTodo = (id: number) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    // newTodoList = todoList.map((item) => item.id === id ? {...item, isCompleted: !item.isCompleted} : item);
    setTodoList(newTodoList);
  };
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          
          uri: "https://firebasestorage.googleapis.com/v0/b/to-do-list-app-2559b.appspot.com/o/BG.png?alt=media&token=ebeb0270-b1d4-4e5f-a8d0-a7884a305561",
        }}
      >
        <Image
        style ={styles.image}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/to-do-list-app-2559b.appspot.com/o/back%20view%20of%20young%20woman%20walking%20with%20bicycle.png?alt=media&token=7da2d615-e85b-4479-808f-e7a2ff35cae9",
          }}
        ></Image>
        <View style={styles.list}>
          <View style={styles.container}>
            <TextInput
              style={styles.text}
              placeholder="Dairy Task"
              onChangeText={(text) => setNewNameToDo(text)}
            />
            <TouchableOpacity onPress={() => addTodo(newNameToDo)}>
              <AntDesign name="pluscircle" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {todoList.map((item, index) => (
              <TodoCard
                key={index}
                item={item}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  image: {
    height: 246,
    width: 222,
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 50
  },
  container: {
    flexDirection: "row",
    marginVertical: 20,
  },
  list: {
    backgroundColor: "#FFFFFF",
    height: 240,
    width: 339,
    borderRadius: 30,
    alignSelf: "center",
    flexDirection: "column",
  },
  text: {
    color: "#000000",
    fontSize: 24,
    height: 40,
  },
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

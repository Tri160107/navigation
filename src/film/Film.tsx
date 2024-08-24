import React from "react";
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Anime from "./anime/Anime";
import LiveAction from "./live-action/LiveAction";
import Marvel from "./marvel/Marvel";
import { Button } from "react-native";
import { removeValue } from "../../helper/mystorage";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../../Appcontext";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const navigation = useNavigation<any>();
  const {handleRemoveUserData} = useAppContext()
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => {}} />
      <Button
        title={"Log out"}
        onPress={() => {
          handleRemoveUserData();
          removeValue("user").then(() => navigation.navigate("SignIn"));
        }}
      ></Button>
    </DrawerContentScrollView>
  );
}

const Film: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Anime" component={Anime} />
      <Drawer.Screen name="LiveAction" component={LiveAction} />
      <Drawer.Screen name="Marvel" component={Marvel} />
    </Drawer.Navigator>
  );
};

export default Film;

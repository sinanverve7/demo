import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { encryption, decryption } from "../utils/cryptoUtils";

global.encryption = encryption;
global.decryption = decryption;

export default function Index() {
  return <Redirect href={"/home"} />;

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <Text>Edit app/index.tsx to edit this screen.</Text>
  //   </View>
  // );
}

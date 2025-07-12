import { View, Text, StyleSheet, Button, Modal } from "react-native";
import React, { useState } from "react";
import ReactNativeModal from "react-native-modal";
import { useRouter } from "expo-router";

// const Index = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <View style={styles.container}>
//       <Button title="Open Modal" onPress={() => setVisible(true)} />
//       <Modal visible={visible} animationType="slide" transparent>
//         <View
//           style={{
//             height: 300,
//             backgroundColor: "pink",
//             position: "absolute",
//             bottom: 0,
//             width: "100%",
//           }}
//         >
//           <Button title="Close Modal" onPress={() => setVisible(false)} />
//         </View>
//       </Modal>
//     </View>
//   );
// };

const Index = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const onMapPress = () => {
    router.navigate("/maps");
  };

  const onLiveLocationPress = () => {
    router.navigate("/livelocation");
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setVisible(true)} />
      <Button title="Maps" onPress={onMapPress} />
      <Button title="Live Location" onPress={onLiveLocationPress} />

      <ReactNativeModal
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
        animationIn={"shake"}
        animationOut={"fadeOut"}
        style={{
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "pink",
            width: "auto",
            height: 300,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          }}
        ></View>
      </ReactNativeModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;

import AntDesign from "@expo/vector-icons/AntDesign";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function LoginBioPage() {
  const [facing] = useState<CameraType>("front"); // Fixed to front-facing
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center bg-black px-6">
        <Text className="text-white mb-4 text-center">
          We need your permission to access the camera.
        </Text>
        <Text
          onPress={requestPermission}
          className="text-pink-500 font-bold underline"
        >
          Grant permission
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-black space-y-8">
      {/* Pink scan icon */}
      <AntDesign name="scan1" size={64} color="pink" />

      {/* Circular camera view */}
      <View className="w-60 h-60 rounded-full overflow-hidden border-4 border-secondary my-12">
        <CameraView style={{ flex: 1 }} facing={facing} />
      </View>

      {/* Instruction */}
      <Text className="text-white font-notosans-regular text-center px-4">
        Position your face within the {"\n"}frame and stay still.
      </Text>

      {/* TEMPORARY NEXT BUTTON */}
      <Pressable
        onPress={() => router.push("/(client)/home")}
        className="bg-red-700 rounded-xl py-2 items-center mt-12"
      >
        <Text className="text-white text-lg font-montserrat-bold">TEMPORARY BUTTON</Text>
      </Pressable>
    </View>
  );
}

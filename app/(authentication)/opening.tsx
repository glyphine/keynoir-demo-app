import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function OpeningPage() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <View className="">
        <Image
          source={require("@/assets/images/icon.png")}
          resizeMode="cover"
          className="w-72 h-36"
        />
      </View>
      <Text className="text-3xl text-secondary font-montserrat-bold">
        timenoir.
      </Text>

      <View className="w-full h-1/2 items-center justify-end px-14">
        <Pressable
          className="w-full bg-white py-4 rounded-2xl mb-4"
          onPress={() => router.push("/openingtwo")}
        >
          <Text className="text-xl text-center text-black font-montserrat-bold">
            GET STARTED
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

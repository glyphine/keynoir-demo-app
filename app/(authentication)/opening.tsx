import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function OpeningPage() {
  return (
    <View className="flex-1 justify-between bg-background px-14 py-12">
      {/* Centered Logo + Text */}
      <View className="items-center justify-center flex-1">
        <Image
          source={require("@/assets/images/icon.png")}
          resizeMode="contain"
          className="w-60 h-32 mb-4"
        />
        <Text className="text-3xl text-secondary font-montserrat-bold">
          timenoir.
        </Text>
      </View>

      {/* Bottom Button */}
      <View className="w-full mb-8">
        <Pressable
          className="w-full bg-white py-4 rounded-2xl relative"
          onPress={() => router.push("/openingtwo")}
        >
          {/* Perfectly centered text */}
          <View className="items-center justify-center">
            <Text className="text-lg text-black font-montserrat-bold">
              GET STARTED
            </Text>
          </View>

          {/* Icon positioned absolutely on the right */}
          <MaterialIcons
            name="navigate-next"
            size={24}
            color="black"
            className="absolute right-4 top-full -translate-y-1/2"
          />
        </Pressable>
      </View>
    </View>
  );
}

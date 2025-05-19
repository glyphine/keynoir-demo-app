import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function OpeningTwoPage() {
  return (
    <View className="flex-1 bg-black justify-center items-center relative">
      {/* Branding top-right */}
      <Text className="absolute top-14 right-6 text-secondary font-montserrat-bold text-xl">
        timenoir.
      </Text>

      {/* Smaller curved panel */}
      <View className="w-full h-[80%] inset-shadow bg-backgroundtwo rounded-tr-[200px] rounded-bl-[200px] px-16 py-10 ">
        {/* Pink line */}
        <View className="w-12 h-2 rounded-3xl bg-primary mb-6 mt-6" />

        {/* Headline */}
        <Text className="text-4xl font-montserrat-bold text-black leading-snug mb-40">
          how{"\n"}would you{"\n"}like to{"\n"}proceed?
        </Text>

        {/* Open account button */}
        <Pressable
          onPress={() => router.push("/(register)/phone")}
          className="bg-black rounded-xl py-4 items-center mb-4"
        >
          <Text className="text-white text-lg font-montserrat-bold">
            OPEN AN ACCOUNT
          </Text>
        </Pressable>

        {/* Login button */}
        <Pressable
          onPress={() => router.push("/(login)/login")}
          className="border border-black rounded-xl py-4 items-center"
        >
          <Text className="text-black text-lg font-montserrat-bold">
            login
          </Text>
        </Pressable>
      </View>

      {/* Back button (bottom left) */}
      <Pressable
        onPress={() => router.push("/opening")}
        className="absolute bottom-0 left-0 w-28 h-28 bg-secondary rounded-tr-full"
      >
        <View className="flex-1 items-center justify-center">
          <Ionicons name="chevron-back" size={28} color="white" />
      
        </View>
      </Pressable>
    </View>
  );
}

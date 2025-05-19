import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function FaceIDSetupPage() {
  return (
    <View className="flex-1 bg-black justify-center items-center px-6 space-y-8">
      {/* Header Text */}
      <View>
        <Text className="text-white text-3xl font-montserrat-bold mb-2">
          set up face id.
        </Text>
        <Text className="text-white text-sm text-center font-notosans-regular mb-12">
          Authorize facial recognition for identity verification.
        </Text>
      </View>

      {/* Illustration */}
      <Image
        source={require("@/assets/images/suggy.png")}
        resizeMode="contain"
        className="w-[300px] h-[400px]"
      />

      {/* Register Button */}
      <TouchableOpacity
        onPress={() => router.push("/permission")}
        className="bg-primary px-28 py-4 rounded-2xl mb-4"
      >
        <Text className="text-background font-montserrat-bold text-lg">REGISTER</Text>
      </TouchableOpacity>

      {/* Skip Link */}
      <TouchableOpacity onPress={() => router.push("/(client)/home")}>
        <Text className="text-white underline font-montserrat-bold text-lg mt-2">
          skip for now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PasswordPage() {
  return (
    <View className="flex-1 bg-black justify-center px-6">
      {/* Logo */}
      <View className="items-center mb-6">
        <Image
          source={require("@/assets/images/icon.png")}
          resizeMode="contain"
          className="w-56 h-32"
        />
      </View>

      {/* Login Card */}
      <View className="bg-backgroundtwo w-full rounded-xl p-6 space-y-4">
        <Text className="text-3xl font-montserrat-bold text-black text-center mb-1">
          login.
        </Text>
        <Text className="text-center text-black text-sm font-notosans-regular mb-8">
          Step back into your story.
        </Text>

        {/* Mobile Number */}
        <TextInput
          placeholder="Mobile No."
          placeholderTextColor="#999"
          className="border border-gray-300 bg-white text-black font-notosans-regular rounded-md px-4 py-3 mb-8"
        />

        {/* Password */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          className="border border-gray-300 bg-white text-black font-notosans-regular rounded-md px-4 py-3 mb-2"
        />

        {/* Forgot password */}
        <TouchableOpacity className="items-end">
          <Text className="text-xs font-notosans-bold text-black mb-8">Forgot password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => router.push("/(client)/home")}
          className="bg-black py-4 rounded-xl items-center mb-8"
        >
          <Text className="text-white text-lg font-montserrat-bold">LOGIN</Text>
        </TouchableOpacity>

        {/* Create Account */}
        <Text className="text-center text-black text-sm mb-4">
          Don’t have an account?{" "}
          <Text
            onPress={() => router.push("/(register)/phone")}
            className="text-pink-500 font-bold"
          >
            Create one
          </Text>
        </Text>
      </View>
    </View>
  );
}

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (mobileNumber === "09123456789" && password === "admin1.") {
      setError("");
      router.push("/home"); // ✅ or your next screen
    } else {
      setError("Incorrect mobile number or password.");
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-background">
      {/* Top Section */}
      <View className="items-center justify-center flex-1">
        <Image
          source={require("@/assets/images/icon.png")}
          resizeMode="contain"
          className="w-60 h-32 mb-4"
        />
        <Text className="text-4xl font-montserrat-bold text-secondary leading-snug text-center">
          let&apos;s pick up{"\n"}where you left{"\n"}off.
        </Text>
      </View>

      {/* Bottom Panel */}
      <View className="justify-center items-center w-full h-[55%] inset-shadow bg-backgroundtwo rounded-tl-[200px] rounded-br-[200px] px-12 py-10 space-y-4">
        {/* Input Fields */}
        <TextInput
          placeholder="Mobile No."
          placeholderTextColor="#999"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="number-pad"
          className="w-full bg-white text-black font-notosans-regular rounded-md px-4 py-3 border border-gray-300"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="w-full bg-white text-black font-notosans-regular rounded-md px-4 py-3 border border-gray-300"
        />

        {/* Error Text */}
        {error !== "" && (
          <Text className="text-red-500 font-notosans-regular text-sm">
            {error}
          </Text>
        )}

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-black py-4 px-8 rounded-xl w-full items-center"
        >
          <Text className="text-white text-lg font-montserrat-bold">
            LOGIN
          </Text>
        </TouchableOpacity>

        {/* Or biometrics/password */}
        <View className="flex-row mt-4 space-x-4">
          <TouchableOpacity
            onPress={() => router.push("/biometric")}
            className="bg-primary w-36 h-36 justify-center items-center shadow rounded-t-3xl rounded-bl-3xl"
          >
            <AntDesign name="scan1" size={40} color="black" />
            <Text className="text-black text-center mt-2 font-notosans-regular">
              Biometrics{"\n"}Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/password")}
            className="bg-secondary w-36 h-36 justify-center items-center shadow rounded-b-3xl rounded-tr-3xl mt-6"
          >
            <MaterialIcons name="password" size={36} color="black" />
            <Text className="text-black text-center mt-2 font-notosans-regular">
              Password{"\n"}Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* Sign-up Prompt */}
        <Text className="text-black font-notosans-regular pt-4">
          Don&apos;t have an account?{" "}
          <Text
            className="text-pink-600 font-notosans-bold"
            onPress={() => router.push("/register")}
          >
            Create one
          </Text>
        </Text>
      </View>
    </View>
  );
}

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function LoginPage() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <View className="items-center justify-center flex-1">
        <Image
          source={require("@/assets/images/icon.png")}
          resizeMode="contain"
          className="w-60 h-32 mb-4"
        />
        <Text className="text-4xl font-montserrat-bold text-secondary leading-snug ">
          let&apos;s pick up{"\n"}where you left{"\n"}off.
        </Text>
      </View>
      <View className=" justify-center items-center w-full h-[50%] inset-shadow bg-backgroundtwo rounded-tl-[200px] rounded-br-[200px] px-12 py-10 ">
        {/* Two buttons side-by-side */}
        <View className="flex-row mb-6 space-x-4">
          <TouchableOpacity
            onPress={() => router.push("/biometric")}
            className="bg-primary p- w-40 h-40 justify-center items-center shadow rounded-t-3xl rounded-bl-3xl"
          >
            <AntDesign name="scan1" size={48} color="black" />
            <Text className="text-black text-center mt-2 font-notosans-regular">
              Biometrics {"\n"} Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/password")}
            className="bg-secondary p-6 w-40 h-40 justify-center items-center shadow rounded-b-3xl rounded-tr-3xl mt-6"
          >
            <MaterialIcons name="password" size={40} color="black" />
            <Text className="text-black text-center mt-3 font-montserrat-regular">
              Password {"\n"}Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom link text */}
        <Text className="text-black font-notosans-regular">
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

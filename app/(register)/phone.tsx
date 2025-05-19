import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function MobilePage() {
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
          enter.
        </Text>
        <Text className="text-center text-black text-sm font-notosans-regular mb-8">
          Please input your mobile number.
        </Text>

        {/* Mobile Number */}
        <TextInput
          placeholder="Mobile No."
          placeholderTextColor="#999"
          className="border border-gray-300 bg-white text-black font-notosans-regular rounded-md px-4 py-3 mb-8"
        />

        {/* Country */}
        <TouchableOpacity className="items-start">
          <Text className="text-sm font-notosans-bold text-black mb-2">
            Country: 
          </Text>
        </TouchableOpacity>

        {/* Country number */}
        <TextInput
          placeholder="Philippines (+63)"
          placeholderTextColor="#999"
          secureTextEntry
          className="border border-gray-300 bg-white text-black font-notosans-regular rounded-md px-4 py-3 mb-8"
        />

    

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => router.push("/otp")}
          className="bg-black py-4 rounded-xl items-center mb-8"
        >
          <Text className="text-white text-lg font-montserrat-bold">NEXT <AntDesign name="right" size={16} color="white"/></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

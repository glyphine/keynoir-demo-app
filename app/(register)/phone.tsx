import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function MobilePage() {
  const [mobileNumber, setMobileNumber] = useState("");

  const isValidMobile = /^[0-9]{10,}$/.test(mobileNumber); // Minimum 10 digits
  const showError = mobileNumber !== "" && !isValidMobile;

  const handleNext = () => {
    if (isValidMobile) {
      router.push("/otp");
    }
  };

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

      {/* Card */}
      <View className="bg-backgroundtwo w-full rounded-xl p-6 space-y-4">
        <Text className="text-3xl font-montserrat-bold text-black text-center mb-1">
          enter.
        </Text>
        <Text className="text-center text-black text-sm font-notosans-regular mb-8">
          Please input your mobile number.
        </Text>

        {/* Country Dropdown (static) */}
        <View>
          <Text className="text-sm font-notosans-bold text-black mb-2">
            Country:
          </Text>
          <View className="border border-gray-300 bg-white rounded-md px-4 py-3 mb-4">
            <Text className="text-black font-notosans-regular">Philippines (+63)</Text>
          </View>
        </View>

        {/* Mobile Number */}
        <TextInput
          placeholder="Mobile No."
          placeholderTextColor="#999"
          keyboardType="number-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          className={`border ${
            showError ? "border-red-500" : "border-gray-300"
          } bg-white text-black font-notosans-regular rounded-md px-4 py-3 mb-4`}
        />
        {showError && (
          <Text className="text-red-500 text-sm font-notosans-regular mb-4">
            Please enter a valid mobile number (at least 10 digits).
          </Text>
        )}

        {/* NEXT Button */}
        <TouchableOpacity
          onPress={handleNext}
          disabled={!isValidMobile}
          className={`py-4 rounded-xl items-center mb-8 mt-4 ${
            isValidMobile ? "bg-black" : "bg-black opacity-50"
          }`}
        >
          <Text className="text-white text-lg font-montserrat-bold">
            NEXT <AntDesign name="right" size={16} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

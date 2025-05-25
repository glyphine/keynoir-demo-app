import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Animated,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  KeyboardEvent,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function MobilePage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [keyboardOffset] = useState(new Animated.Value(0));

  const isValidMobile = /^[0-9]{10,}$/.test(mobileNumber);
  const showError = mobileNumber !== "" && !isValidMobile;

  useEffect(() => {
    const keyboardShow = Keyboard.addListener("keyboardDidShow", (event: KeyboardEvent) => {
      Animated.timing(keyboardOffset, {
        toValue: Platform.OS === "ios" ? event.endCoordinates.height - 20 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });

    const keyboardHide = Keyboard.addListener("keyboardDidHide", () => {
      Animated.timing(keyboardOffset, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  },);

  const handleNext = () => {
    if (isValidMobile) {
      router.push("/otp");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={{ flex: 1, paddingBottom: keyboardOffset }} className="bg-black justify-center px-6">
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

          {/* Country Dropdown */}
          <View>
            <Text className="text-sm font-notosans-bold text-black mb-2">
              Country:
            </Text>
            <View className="border border-gray-300 bg-white rounded-md px-4 py-3 mb-4">
              <Text className="text-black font-notosans-regular">Philippines (+63)</Text>
            </View>
          </View>

          {/* Mobile Input */}
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
          </KeyboardAvoidingView>

          {/* Next Button */}
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
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

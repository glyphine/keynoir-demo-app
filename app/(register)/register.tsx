import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Basic validations
  const isMobileValid = /^[0-9]{10,}$/.test(mobileNumber); // At least 10 digits
  const isPasswordValid =
    /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password);
  const passwordsMatch = password === confirmPassword;

  const showPasswordError =
    password && confirmPassword && (!isPasswordValid || !passwordsMatch);
  const showMobileError = mobileNumber !== "" && !isMobileValid;

  const isFormValid = isMobileValid && isPasswordValid && passwordsMatch;

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

      {/* Register Card */}
      <View className="bg-backgroundtwo w-full rounded-xl p-6 space-y-4">
        <Text className="text-3xl font-montserrat-bold text-black text-center mb-1">
          register.
        </Text>
        <Text className="text-center text-black text-sm font-notosans-regular mb-8">
          Start your journey through time.
        </Text>

        {/* Mobile Number */}
        <TextInput
          placeholder="Mobile No."
          placeholderTextColor="#999"
          keyboardType="number-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          className={`border ${
            showMobileError ? "border-red-500" : "border-gray-300"
          } bg-white text-black font-notosans-regular rounded-md px-4 py-3 mb-1`}
        />
        {showMobileError && (
          <Text className="text-red-500 mb-3 font-notosans-regular text-sm">
            Mobile number must be at least 10 digits and numeric only.
          </Text>
        )}

        {/* Password */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className={`border ${
            showPasswordError && !isPasswordValid
              ? "border-red-500"
              : "border-gray-300"
          } bg-white text-black font-notosans-regular rounded-md px-4 py-3 mb-4`}
        />

        {/* Confirm Password Label */}
        <Text className="text-sm font-notosans-bold text-black mb-1">
          Confirm Password:
        </Text>

        {/* Confirm Password */}
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          className={`border ${
            showPasswordError && !passwordsMatch
              ? "border-red-500"
              : "border-gray-300"
          } bg-white text-black font-notosans-regular rounded-md px-4 py-3 mb-4`}
        />

        {/* Password Error Message */}
        {showPasswordError && (
          <Text className="text-red-500 mb-4 font-notosans-regular text-sm">
            {!isPasswordValid
              ? "Password must contain at least 1 number and 1 special character."
              : "Passwords do not match."}
          </Text>
        )}

        {/* Sign Up Button */}
        <TouchableOpacity
          disabled={!isFormValid}
          onPress={() => router.push("/suggestion")}
          className={`py-4 rounded-xl items-center mb-8 mt-4 ${
            isFormValid ? "bg-black" : "bg-black opacity-50"
          }`}
        >
          <Text className="text-white text-lg font-montserrat-bold">
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

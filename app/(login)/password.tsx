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

export default function PasswordPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (mobile === "09123456789" && password === "admin1.") {
      setError(false);
      router.push("/(client)/home");
    } else {
      setError(true);
    }
  };

  const [keyboardOffset] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardShow = Keyboard.addListener(
      "keyboardDidShow",
      (event: KeyboardEvent) => {
        Animated.timing(keyboardOffset, {
          toValue: Platform.OS === "ios" ? event.endCoordinates.height - 20 : 0,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }
    );

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
  }, );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={{ flex: 1, paddingBottom: keyboardOffset }}>
        
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
              <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <TextInput
              placeholder="Mobile No."
              placeholderTextColor="#999"
              keyboardType="number-pad"
              value={mobile}
              onChangeText={setMobile}
              className={`border ${
                error ? "border-red-500" : "border-gray-300"
              } bg-white text-black font-notosans-regular rounded-md px-4 py-3 mb-4`}
            />

            {/* Password */}
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className={`border ${
                error ? "border-red-500" : "border-gray-300"
              } bg-white text-black font-notosans-regular rounded-md px-4 py-3 mb-2`}
            />
            </KeyboardAvoidingView>

            {/* Forgot password */}
            <TouchableOpacity className="items-end">
              <Text className="text-xs font-notosans-bold text-black mb-4">
                Forgot password?
              </Text>
            </TouchableOpacity>

            {/* Error Message */}
            {error && (
              <Text className="text-red-500 text-sm font-notosans-regular text-center mb-2">
                Invalid mobile number or password.
              </Text>
            )}

            {/* Login Button */}
            <TouchableOpacity
              onPress={handleLogin}
              disabled={!mobile || !password}
              className={`py-4 rounded-xl items-center mb-8 mt-4 ${
                !mobile || !password ? "bg-black opacity-50" : "bg-black "
              }`}
            >
              <Text className="text-white text-lg font-montserrat-bold">
                LOGIN
              </Text>
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
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

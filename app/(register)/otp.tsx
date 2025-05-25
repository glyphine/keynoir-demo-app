import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  KeyboardEvent,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

export default function OTPPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(TextInput | null)[]>([]);
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
  }, []);

  const handleChange = (value: string, index: number) => {
    // Paste: handle full string paste
    if (value.length > 1) {
      const chars = value.slice(0, 6).split("");
      setOtp(chars);
      chars.forEach((char, i) => {
        inputs.current[i]?.setNativeProps({ text: char });
      });
      inputs.current[5]?.focus();
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "") {
      const newOtp = [...otp];
      newOtp[Math.max(index - 1, 0)] = "";
      setOtp(newOtp);
      inputs.current[Math.max(index - 1, 0)]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join("");
    console.log("OTP Submitted:", code);
    router.push("/register");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View
        style={{ flex: 1, paddingBottom: keyboardOffset }}
      >
        <View className="flex-1 bg-backgroundtwo px-12 pt-12 justify-between">
          {/* Header + Title */}
          <View>
            <View className="flex-row items-center mb-6 mt-8">
              <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="left" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <Text className="text-3xl font-montserrat-bold text-black text-center mb-1">
              otp.
            </Text>
            <Text className="text-center text-black text-base font-notosans-regular ">
              Verify account with OTP.
            </Text>
          </View>

          {/* OTP Inputs */}
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            <View className="flex-row justify-center items-center space-x-2 mt-8 mb-4">
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(el: TextInput | null) => {
                    inputs.current[index] = el;
                  }}
                  value={digit}
                  onChangeText={(value) => handleChange(value, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  maxLength={1}
                  keyboardType="number-pad"
                  className="w-10 h-14 text-center text-lg border border-black rounded-md bg-white mx-1"
                />
              ))}
            </View>
          </KeyboardAvoidingView>

          {/* Footer: Resend + Submit */}
          <View className="items-center mb-20">
            <Text className="text-black font-notosans-regular text-base">
              Didn’t receive an OTP?
            </Text>
            <TouchableOpacity onPress={() => console.log("Resend code")}>
              <Text className="underline font-notosans-bold text-base text-black mt-4 mb-8">
                Resend Code
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-black py-4 rounded-2xl mt-8 w-full items-center"
            >
              <Text className="text-white font-bold text-base">SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

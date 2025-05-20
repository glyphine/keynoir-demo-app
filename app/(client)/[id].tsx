import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function CapsuleLockedScreen() {
  const { title, date } = useLocalSearchParams();
  const shake = useSharedValue(0);

  const triggerShake = () => {
    shake.value = withSequence(
      withTiming(-10, { duration: 50 }),
      withTiming(10, { duration: 50 }),
      withTiming(-10, { duration: 50 }),
      withTiming(10, { duration: 50 }),
      withTiming(0, { duration: 50 })
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shake.value }],
  }));

  return (
    <View className="flex-1 bg-black px-8 pt-12 items-center justify-between">
      {/* Header */}
      <View className="w-full flex-row items-center mb-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View className="w-full flex-row items-start mb-6">
        <View className="flex-1 items-start ">
          <Text className="text-white text-3xl font-montserrat-bold mb-1">
            capsule is locked.
          </Text>
          <Text className="text-white text-base mt-1 font-notosans-regular">
            Time-locked until <Text className="font-notosans-bold">{date}</Text>
          </Text>
        </View>
      </View>

      {/* Capsule Visual */}
      <TouchableWithoutFeedback onPress={triggerShake}>
        <Animated.View
          style={[animatedStyle]}
          className="items-center justify-center flex-1"
        >
          {/* Capsule */}
          <View className="w-40 h-96 rounded-full overflow-hidden flex-col items-center justify-between">
            <View className="flex-1 w-full bg-indigo-300" />
            <View className="h-2 w-full bg-black" />
            <View className="flex-1 w-full bg-pink-400" />
          </View>

          {/* Lock Icon */}
          <View className="absolute w-16 h-16 bg-black rounded-full items-center justify-center">
            <Ionicons name="lock-closed-outline" size={28} color="white" />
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>

      {/* Title */}
      <Text className="text-primary text-2xl font-montserrat-bold mb-12">
        {title}
      </Text>

      {/* Delete Button */}
      <TouchableOpacity
        onPress={() => console.log("delete pressed")}
        className="w-full bg-white py-4 rounded-2xl items-center mb-10"
      >
        <Text className="text-black font-montserrat-bold text-base">
          DELETE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

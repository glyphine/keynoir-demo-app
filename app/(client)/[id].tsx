import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function CapsuleLockedScreen() {
  const { title, date } = useLocalSearchParams();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const topOffset = useSharedValue(0);
  const bottomOffset = useSharedValue(0);

  const shake = useSharedValue(0);

  useEffect(() => {
    const today = dayjs().format("YYYY-MM-DD");
    if (today === date) {
      setIsUnlocked(true);
    }
  }, [date]);

  const triggerShake = () => {
    shake.value = withSequence(
      withTiming(-10, { duration: 50 }),
      withTiming(10, { duration: 50 }),
      withTiming(-10, { duration: 50 }),
      withTiming(10, { duration: 50 }),
      withTiming(0, { duration: 50 })
    );
  };

  const triggerOpen = () => {
    setHasOpened(true);
    topOffset.value = withTiming(-100, { duration: 600 });
    bottomOffset.value = withTiming(100, { duration: 600 });

    // Delay 3 seconds then navigate
    setTimeout(() => {
      router.push("/(client)/(add)/noteview");
    }, 500);
  };

  const topStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: topOffset.value }],
  }));

  const bottomStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bottomOffset.value }],
  }));

  const capsuleShakeStyle = useAnimatedStyle(() => ({
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

      {/* Info */}
      <View className="w-full flex-row items-start mb-6">
        <View className="flex-1 items-start">
          <Text className="text-white text-3xl font-montserrat-bold mb-1">
            {isUnlocked ? "capsule is ready." : "capsule is locked."}
          </Text>
          <Text className="text-white text-base mt-1 font-notosans-regular">
            Time-locked until <Text className="font-notosans-bold">{date}</Text>
          </Text>
        </View>
      </View>

      {/* Capsule */}
      <Pressable
        onPress={isUnlocked && !hasOpened ? triggerOpen : triggerShake}
        className="flex-1 items-center justify-center"
      >
        <Animated.View style={[capsuleShakeStyle]}>
          <View className="w-40 h-96 rounded-full overflow-hidden items-center justify-between">
            <Animated.View
              style={[topStyle]}
              className="w-full h-1/2 bg-indigo-300 rounded-t-full"
            />
            <View className="h-2 w-full bg-black" />
            <Animated.View
              style={[bottomStyle]}
              className="w-full h-1/2 bg-pink-400 rounded-b-full"
            />
          </View>

          {/* Lock Icon */}

          {!hasOpened && (
            <View
              style={{
                position: "absolute",
                top: "50%",
                left: "25%",
                transform: [{ translateX: -36 }, { translateY: -32 }],
              }}
              className="w-16 h-16 bg-black rounded-full items-center justify-center"
            >
              <Ionicons
                name={isUnlocked ? "lock-open-outline" : "lock-closed-outline"}
                size={28}
                color="white"
              />
            </View>
          )}
        </Animated.View>
      </Pressable>

      {/* Title */}
      <Text className="text-primary text-2xl font-montserrat-bold mb-24">
        {title}
      </Text>

      {/* Delete Button (only when locked) */}
      {!isUnlocked && (
        <TouchableOpacity
          onPress={() => console.log("delete pressed")}
          className="w-full bg-white py-4 rounded-2xl items-center mb-16"
        >
          <Text className="text-black font-montserrat-bold text-lg">
            DELETE
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const icons = [
  require("@/assets/images/cat1.png"),
  require("@/assets/images/cat2.png"),
  require("@/assets/images/cat3.png"),
  require("@/assets/images/cat4.png"),
  require("@/assets/images/cat5.png"),
  require("@/assets/images/cat6.png"),
];

export default function NewCapsulePage() {
  const router = useRouter();
  const { icon } = useLocalSearchParams();
  const selectedIcon = icons[parseInt(icon as string, 10)];

  const [title, setTitle] = useState("");

  const isValid = title.trim().length > 0 && title.trim().length <= 25;

  const handleContinue = () => {
    if (isValid) {
      router.push({
        pathname: "/(client)/(add)/note",
        params: { icon, title },
      });
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      className="bg-black px-8 pt-12"
    >
      <View className="flex-1 justify-between">
        {/* Header */}
        <View>
          <TouchableOpacity onPress={() => router.back()} className="mb-4">
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-3xl font-montserrat-bold leading-tight mb-10">
            new time{"\n"}capsule.
          </Text>
          {/* Icon Preview */}
          <View className="items-center mb-8">
            <View className="w-52 h-52 bg-backgroundtwo rounded-full items-center justify-center border-4 border-primary">
              <Image
                source={selectedIcon}
                className="w-44 h-44"
                resizeMode="contain"
              />
            </View>
          </View>
          {/* Title Input */}
          <Text className="text-white text-base text-center mb-2">
            Give your capsule a name
          </Text>
          <TextInput
            placeholder="Enter title..."
            placeholderTextColor="#888"
            maxLength={25}
            value={title}
            onChangeText={setTitle}
            className="text-white font-notosans-regular border-b border-secondary px-2 pb-1 text-center"
          />
          <Text
            className={`text-center mt-2 text-sm ${
              title.length > 25 ? "text-red-500" : "text-pink-400"
            }`}
          >
            {title.length} / 25
          </Text>
        </View>

        {/* Bottom Note & Button */}
        <View className="mt-12 mb-10 items-center">
          <Text className="text-white text-center text-xs font-notosans-regular mb-4">
            Note: This capsule will open automatically in 1 week.
          </Text>
          <TouchableOpacity
            disabled={!isValid}
            onPress={handleContinue}
            className={`w-full py-4 rounded-2xl items-center ${
              isValid ? "bg-white" : "bg-white/40"
            }`}
          >
            <Text className="text-black font-montserrat-bold text-lg">
              CONTINUE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

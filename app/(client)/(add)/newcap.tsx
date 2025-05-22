import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function NewCapsulePage() {
  const router = useRouter();
  const { icon } = useLocalSearchParams(); // receives icon like 'cat1'
  const [title, setTitle] = useState("");

  const isValid = title.trim().length > 0 && title.trim().length <= 25;

  const handleContinue = () => {
    if (isValid) {
      // You can navigate to the next step and pass title & icon if needed
      router.push({
        pathname: "/(client)/(add)/note", // change this as needed
        params: { icon, title },
      });
    }
  };

  return (
    <View className="flex-1 bg-background px-6 pt-12">
      {/* Header */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      {/* Header */}
      <View>
        <Text className="text-white text-3xl font-montserrat-bold leading-tight mb-10">
          new time{"\n"}capsule.
        </Text>
        <View className="items-center mb-8">
          <View className="w-40 h-40 bg-backgroundtwo rounded-full items-center justify-center">
            {/* <Image
              source={
                icon
                  ? // Ensure icon maps to actual asset file
                    // eslint-disable-next-line @typescript-eslint/no-require-imports
                    //require(`@/assets/images/${icon}.png`)
                  : require("@/assets/images/default.png")
              }
              className="w-24 h-24"
              resizeMode="contain"
            /> */}
          </View>
        </View>

        {/* Title input */}
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
            title.length > 25 ? "text-red-500" : "text-primary"
          }`}
        >
          {title.length} / 25
        </Text>
      </View>

      {/* Bottom Note & Button */}
      <View className="mb-10 items-center">
        <Text className="text-white text-center text-xs mt-6 mb-6 font-notosans-regular">
          Note: This capsule will open automatically in 1 week.
        </Text>

        <TouchableOpacity
          disabled={!isValid}
          onPress={handleContinue}
          className={`w-full bg-white py-4 rounded-2xl items-center mb-6 ${
            isValid ? "bg-white" : "bg-white/40"
          }`}
        >
          <Text className="text-black font-montserrat-bold text-base">
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

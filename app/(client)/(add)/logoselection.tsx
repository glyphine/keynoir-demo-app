import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const icons = [
  require("@/assets/images/cat1.png"),
  require("@/assets/images/cat2.png"),
  require("@/assets/images/cat3.png"),
  require("@/assets/images/cat4.png"),
  require("@/assets/images/cat5.png"),
  require("@/assets/images/cat6.png"),
];

export default function LogoSelectionScreen() {
  const [selected, setSelected] = useState<number | null>(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (selected === null) {
      setError(true);
      return;
    }

    setError(false);
    router.push({
      pathname: "/(client)/(add)/newcap",
      params: {
        icon: selected.toString(), 
      },
    });
  };

  return (
    <View className="flex-1 bg-black px-8 pt-12">
      {/* Header */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text className="text-white text-3xl font-montserrat-bold mb-8">
        icon{"\n"}selection.
      </Text>

      {/* Selected Icon Display */}
      {selected !== null && (
        <View className="self-center mb-6 relative">
          <View className="w-52 h-52 rounded-full bg-pink-100 items-center justify-center border-4 border-primary">
            <Image
              source={icons[selected]}
              className="w-44 h-44"
              resizeMode="contain"
            />
          </View>
        </View>
      )}

      {/* Icon Grid */}
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
        }}
      >
        {icons.map((icon, index) => {
          const isSelected = selected === index;
          return (
            <TouchableOpacity key={index} onPress={() => setSelected(index)}>
              <View
                className={`w-24 h-24 rounded-full bg-pink-100 items-center justify-center relative ${
                  isSelected ? "border-4 border-green-400" : ""
                }`}
              >
                <Image
                  source={icon}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
                {isSelected && (
                  <View className="absolute bottom-0 right-0 bg-green-400 rounded-full p-1">
                    <Ionicons name="checkmark" size={12} color="white" />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Error Message */}
      {error && (
        <Text className="text-red-500 text-center mt-4 font-notosans-regular">
          Please select an icon before continuing.
        </Text>
      )}

      {/* Note */}
      <Text className="text-white text-center text-xs mt-6 mb-6 font-notosans-regular">
        Note: This capsule will open automatically in 1 week.
      </Text>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleContinue}
        className="bg-white py-4 rounded-2xl items-center mb-6"
      >
        <Text className="text-black font-montserrat-bold text-base">
          CONTINUE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function PermissionPage() {
  return (
    <View className="flex-1 bg-black px-8 pt-16 justify-between ">
      {/* Header Section */}
      <View>
        <TouchableOpacity onPress={() => router.back()} className="mb-4">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text className="text-white text-3xl font-montserrat-bold mb-2 ">
          permission.
        </Text>
        <Text className="text-white text-sm font-notosans-regular">
          Consent required to continue.
        </Text>
      </View>

      {/* Big Check Icon */}
      <View className="items-center justify-center flex-1">
        <Ionicons name="checkmark-circle-outline" size={200} color="#A7A5F5" />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={() => router.push("/face-setup")}
        className="bg-primary py-4 rounded-2xl items-center mb-32"
      >
        <Text className="text-black font-montserrat-bold text-base">
          CONTINUE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

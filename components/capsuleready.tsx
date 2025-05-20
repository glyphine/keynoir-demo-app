import { Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CapsuleReadyPopup({ capsule, onOpen, onSkip }: any) {
  return (
    <View className="absolute inset-0 z-50 bg-black/40 items-center justify-center px-6">
      <View className="w-full bg-backgroundtwo rounded-2xl items-center px-6 py-8 space-y-4">
        <TouchableOpacity
          onPress={onSkip}
          className="absolute top-4 right-4"
        >
          <MaterialIcons name="close" size={20} color="black" />
        </TouchableOpacity>

        <Text className="text-black text-2xl font-montserrat-bold text-center">
          your capsule{"\n"}is ready.
        </Text>

        <Image
          source={require("@/assets/images/winky.png")} // update path if needed
          className="w-36 h-36"
          resizeMode="contain"
        />

        <Text className="text-primary font-montserrat-bold text-xl text-center">
          {capsule.title}
        </Text>

        <TouchableOpacity
          className="bg-black w-full py-4 rounded-2xl items-center"
          onPress={onOpen}
        >
          <Text className="text-white font-montserrat-bold text-base">
            OPEN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSkip}>
          <Text className="text-black underline font-notosans-bold text-base">
            skip for now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CapsuleReadyPopup({ capsule, onOpen, onSkip }: any) {
  return (
    <View className="absolute inset-0 z-50 bg-black/40 items-center justify-center px-6">
      <View className="w-full bg-backgroundtwo rounded-2xl px-8 py-12 space-y-4">
      <TouchableOpacity onPress={onSkip} className="absolute top-4 right-4">
        <MaterialIcons name="close" size={20} color="black" />
      </TouchableOpacity>

      <Text className="text-black text-4xl font-montserrat-bold ">
        your capsule{"\n"}is ready.
      </Text>

      <View className=" items-center">
        <Image
          source={require("@/assets/images/mrcappy.gif")}
          style={{ width: 200, height: 200 }}
        />

        <Text className="text-primary font-montserrat-bold text-2xl text-center mb-12">
          {capsule.title}
        </Text>

        <TouchableOpacity
          className="bg-black w-full py-4 rounded-2xl items-center mb-4"
          onPress={onOpen}
        >
          <Text className="text-white font-montserrat-bold text-xl">
            OPEN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSkip}>
          <Text className="text-black underline font-notosans-bold text-lg">
            skip for now
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

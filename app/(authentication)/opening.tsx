import SlideButton from '@/components/slidingbutton';
import { Image, Text, View } from "react-native";

export default function OpeningPage() {
  return (
    <View className="flex-1 justify-between bg-background px-12 py-12">
      {/* Centered Logo + Text */}
      <View className="items-center justify-center flex-1">
        <Image
          source={require("@/assets/images/icon.png")}
          resizeMode="contain"
          className="w-60 h-32 mb-4"
        />
        <Text className="text-3xl text-secondary font-montserrat-bold">
          timenoir.
        </Text>
      </View>

      {/* Bottom Button */}
      <SlideButton/>
    </View>
  );
}

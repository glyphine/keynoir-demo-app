import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { capsuleData } from "./capsuleData";



const { width } = Dimensions.get("window");

export default function TimeCapsuleScreen() {
  
  return (
    <View className="flex-1 bg-black pt-12">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 mb-4 mt-4">
        <Text className="text-white text-3xl font-montserrat-bold">
          choose a time{"\n"}capsule to view.
        </Text>
        <TouchableOpacity>
          <MaterialIcons name="logout" size={24} color="#FF82A9" />
        </TouchableOpacity>
      </View>

      {/* Info Bar */}
      <View className="flex-row w-full h-9  overflow-hidden ">
        <View className="flex-1 bg-primary justify-center pl-4">
          <Text className="text-black text-base  font-notosans-regular">
            active capsules: <Text className="font-notosans-bold">4</Text>
          </Text>
        </View>
        <View className="flex-1 bg-secondary justify-center pr-4 items-end">
          <Text className="text-black text-base font-notosans-regular">
            max capacity: <Text className="font-notosans-bold">10</Text>
          </Text>
        </View>
      </View>

      {/* Capsule Grid */}
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
          paddingBottom: 40,
        }}
      >
        {capsuleData.map((item) => (
          <PopBubble key={item.id} item={item} />
        ))}

        {/* Add Button */}
        <TouchableOpacity className="items-center">
          <View className="w-36 h-36 bg-primary rounded-full justify-center items-center">
            <Text className="text-white text-6xl font-notosans-bold">+</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function PopBubble({ item }: any) {
  const router = useRouter();
  const scale = useSharedValue(0);

  const offsetX = useSharedValue(Math.random() * 80 - 40);
  const offsetY = useSharedValue(Math.random() * 40);
  const bubbleSize = Math.floor(Math.random() * 40) + 100;

  useEffect(() => {
    scale.value = withSpring(1, { damping: 10 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: offsetX.value },
      { translateY: offsetY.value },
    ],
  }));

  const handlePress = () => {
    router.push({
      pathname: "/(client)/[id]",
      params: {
        id: item.id,
        title: item.title,
        date: item.dateToBeOpened,
      },
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <Animated.View
        style={[animatedStyle]}
        className="items-center justify-center mb-4 m-2"
      >
        {/* Bubble */}
        <View
          className="bg-backgroundtwo rounded-full items-center justify-center"
          style={{
            width: bubbleSize,
            height: bubbleSize,
          }}
        >
          <Image
            source={item.image}
            className="w-16 h-16"
            resizeMode="cover"
          />
        </View>

        {/* Title & Date */}
        <Text className="text-white text-center text-sm mt-2 font-notosans-regular w-36">
          {item.title}
        </Text>
        <Text className="text-white text-center text-sm font-bold w-36">
          {item.dateToBeOpened}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
}
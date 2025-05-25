import CapsuleReadyPopup from "@/components/capsuleready";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { capsuleData } from "./capsuleData";

type Capsule = {
  id: number;
  title: string;
  letter: string;
  dateInputted: string;
  dateToBeOpened: string;
  image: any;
};

const icons = [
  require("@/assets/images/cat1.png"),
  require("@/assets/images/cat2.png"),
  require("@/assets/images/cat3.png"),
  require("@/assets/images/cat4.png"),
  require("@/assets/images/cat5.png"),
  require("@/assets/images/cat6.png"),
];

export default function TimeCapsuleScreen() {
  const [showPopup, setShowPopup] = useState(false);
  const [readyCapsule, setReadyCapsule] = useState<Capsule | null>(null);
  const [capsules, setCapsules] = useState(capsuleData);
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    if (params?.capsule && capsules.length < 10) {
      try {
        const rawCapsule = JSON.parse(params.capsule as string);
        const imageIndex = parseInt(rawCapsule.image, 10);

        //  Prevent duplicates by checking unique ID or title
        const alreadyExists = capsules.some(
          (c) =>
            c.title === rawCapsule.title &&
            c.dateToBeOpened === rawCapsule.dateToBeOpened
        );
        if (alreadyExists) return;

        const newCapsule: Capsule = {
          ...rawCapsule,
          image: icons[imageIndex],
        };

        setCapsules((prev) => [...prev, newCapsule]);
      } catch (err) {
        console.error("Invalid capsule format", err);
      }
    }
  }, [params?.capsule]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const matched = capsuleData.find(
      (capsule) => capsule.dateToBeOpened === today
    );

    if (matched) {
      setReadyCapsule(matched);
      setShowPopup(true);
    }
  }, []);

  const handleOpen = () => {
    if (readyCapsule) {
      router.push({
        pathname: "/(client)/[id]",
        params: {
          id: readyCapsule.id,
          title: readyCapsule.title,
          date: readyCapsule.dateToBeOpened,
        },
      });
    }
    setShowPopup(false);
  };

  const handleSkip = () => setShowPopup(false);

  return (
    <View className="flex-1 bg-black pt-12">
      {/* Popup */}
      {showPopup && readyCapsule && (
        <CapsuleReadyPopup
          capsule={readyCapsule}
          onOpen={handleOpen}
          onSkip={handleSkip}
        />
      )}

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
      <View className="flex-row w-full h-9 overflow-hidden">
        <View className="flex-1 bg-primary justify-center pl-4">
          <Text className="text-black text-base font-notosans-regular">
            active capsules:{" "}
            <Text className="font-notosans-bold">{capsules.length}</Text>
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
        {capsules.map((item) => (
          <PopBubble key={item.id} item={item} />
        ))}

        {/* Add Button */}
        {capsules.length < 10 && (
          <TouchableOpacity
            className="items-center"
            onPress={() => router.push("/logoselection")}
          >
            <View className="w-36 h-36 bg-primary rounded-full justify-center items-center">
              <Text className="text-white text-6xl font-notosans-bold">+</Text>
            </View>
          </TouchableOpacity>
        )}
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
  });

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
          <Image source={item.image} className="w-24 h-24" resizeMode="cover" />
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

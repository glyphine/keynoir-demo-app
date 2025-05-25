import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { capsuleData } from "../capsuleData"; 

export default function CapsuleNoteViewScreen() {
  const router = useRouter();
  const { title } = useLocalSearchParams();
  const [capsules, setCapsules] = useState(capsuleData);

  const [pages, setPages] = useState([""]);
  const [currentPage, setCurrentPage] = useState(0);

  const wordCount = pages.reduce(
    (acc, page) => acc + page.trim().split(/\s+/).filter(Boolean).length,
    0
  );

  const handlePageChange = (direction: "prev" | "next") => {
    if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next") {
      if (currentPage === pages.length - 1) {
        setPages([...pages, ""]);
      }
      setCurrentPage(currentPage + 1);
    }
  };

  const updatePageContent = (text: string) => {
    const updated = [...pages];
    updated[currentPage] = text;
    setPages(updated);
  };

  const handleDone = () => {
  
  router.push({
    pathname: "/(client)/home",
  });
};


  return (
    <View className="flex-1 bg-black px-6 pt-12">
      {/* Title */}
      <Text className="text-white text-3xl font-montserrat-bold mb-8">
        {title}
      </Text>

      {/* Stats */}
      <View className="flex-row gap-4 mb-8">
        <Text className="text-white font-montserrat-bold text-lg">
          {pages.length} <Text className="font-normal">pages</Text>
        </Text>
        <Text className="text-white font-montserrat-bold text-lg">
          {wordCount} <Text className="font-normal">words</Text>
        </Text>
      </View>

      {/* Note box */}
      <View className="bg-backgroundtwo rounded-xl px-4 py-3 h-1/2">
        <TextInput
          placeholder="Message from this moment.."
          placeholderTextColor="#999"
          multiline
          textAlignVertical="top"
          value={pages[currentPage]}
          onChangeText={updatePageContent}
          className="text-black font-notosans-regular text-base h-80"
        />
      </View>

      {/* Page Controls */}
      <View className="flex-row justify-between items-center mt-4 px-2 py-3">
        <Text className="text-white font-notosans-regular text-base">
          Page {currentPage + 1}
        </Text>
        <View className="flex-row">
          {currentPage > 0 && (
            <TouchableOpacity
              onPress={() => handlePageChange("prev")}
              className="bg-secondary px-3 py-2 rounded-l-md border-2 border-white"
            >
              <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => handlePageChange("next")}
            className="bg-secondary px-3 py-2 rounded-r-md border-2 border-white"
          >
            <Ionicons name="chevron-forward" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Lock Button */}
      <TouchableOpacity
        onPress={handleDone}
        className="bg-primary py-4 rounded-2xl items-center mt-8"
      >
        <Text className="text-black font-montserrat-bold text-lg">
           DONE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

import { Image, View } from "react-native";

export default function NotViewPage() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
     <Image
          source={require("@/assets/images/middle.jpg")}
          style={{ width: 200, height: 200 }}
        />

    </View>
    
   
  )
}
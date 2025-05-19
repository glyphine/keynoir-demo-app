import { Text, View } from "react-native";

export default function LoginPage() {
  return (
     <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-2xl text-secondary font-montserrat-bold">This is Montserrat Bold</Text>
        <Text className="text-2xl font-notosans-regular">This is Noto Regular</Text>
        <Text className="text-2xl font-notosans-bold">This is Noto Bold</Text>
      
    </View>
    
  )
}
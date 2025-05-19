import "@/app/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "Montserrat-Bold": require("./../assets/fonts/Montserrat-Bold.ttf"),
    "NotoSans-Regular": require("./../assets/fonts/NotoSans-Regular.ttf"),
    "NotoSans-Bold": require("./../assets/fonts/NotoSans-Bold.ttf"),
  });

  return (
    <Stack initialRouteName="(authentication)/opening">
      <Stack.Screen name="(authentication)/opening" options={{ headerShown: false }} />
      <Stack.Screen name="(authentication)/openingtwo" options={{ headerShown: false }} />
      <Stack.Screen name="(client)" options={{ headerShown: false }} />
      <Stack.Screen name="(authentication)" options={{ headerShown: false, animation: "none" }}/>
      <Stack.Screen name="components" options={{ headerShown: false, animation: "none" }}/>
    </Stack>
  );
}

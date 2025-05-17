import "@/app/global.css";
import { useFonts } from "expo-font";
import { Stack } from 'expo-router';

export default function RootLayout() {
  useFonts({
    "Montserrat-Bold": require("./../assets/fonts/Montserrat-Bold.ttf"),
    "NotoSans-Regular": require("./../assets/fonts/NotoSans-Regular.ttf"),
    "NotoSans-Bold": require("./../assets/fonts/NotoSans-Bold.ttf"),
  });

  return (
    <Stack/>
  );
}
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "_layout-app" }} />
      <Stack.Screen name="maps" options={{ title: "maps-app" }} />
    </Stack>
  );
}

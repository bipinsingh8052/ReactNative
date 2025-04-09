import { Stack } from "expo-router";

export default function _layout() {
  return (
     <Stack >
        <Stack.Screen name="index" options={{ headerShown: false}} />
      </Stack>
  )
}

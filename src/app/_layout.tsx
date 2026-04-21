import { Stack } from "expo-router";

import { DataProvider } from "../hooks/data.context";

export default function RootLayout() {
  return (
    <DataProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </DataProvider>
  );
}

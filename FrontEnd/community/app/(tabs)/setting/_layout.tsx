import { colors } from "@/constants"
import { Stack } from "expo-router"

const SettingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen name="index" options={{
        headerShown: false,
        title: "설정"
      }} />
    </Stack>
  )
}

export default SettingLayout

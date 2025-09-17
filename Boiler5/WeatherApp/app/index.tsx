import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/page" as any}>Go to Page</Link>
      {/* app/index.ts => app/(tabs)/page.tsx */}
    </View>
  );
}

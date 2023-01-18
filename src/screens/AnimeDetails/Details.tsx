import { useRoute } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";

type ParamsProps = {
  synopsis: string;
};

export const DetailsAnime = () => {
  const route = useRoute();
  const { synopsis } = route.params as ParamsProps;
  return (
    <ScrollView className="flex-1 px-3">
      <View className="pb-3">
        <Text className="text-slate-300 font-bold text-xl mb-3">Synopsis</Text>
        <Text className="text-slate-300 text-justify text-base">
          {synopsis}
        </Text>
      </View>
    </ScrollView>
  );
};

import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { AnimesData } from "../../@types/types";
import { getOneAnime } from "../../service/Api";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "react-query";
import { TabsDetails } from "../../routes/details.routes";
import { HeaderDetails } from "../../components/HeaderDetails";

type ParamsProps = {
  id: string;
};

export const AnimeDetails = () => {
  const route = useRoute();
  const { id } = route.params as ParamsProps;

  const { data, isLoading, isError } = useQuery<AnimesData>(
    ["oneAnime", id],
    () => getOneAnime(id)
  );

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-900">
        <ActivityIndicator size={"large"} color="#FFF" />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-900">
        <Text className="text-lg text-red-500">There was some error :( </Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <StatusBar style="auto" hidden={true} />
      <HeaderDetails
        coverImage={data?.attributes?.coverImage?.original}
        image={data.attributes.posterImage.medium}
        titleEn={data?.attributes.titles.en}
        titleJp={data?.attributes.titles.en_jp}
        episodeCount={data.attributes.episodeCount}
        score={data.attributes.averageRating}
      />
      <TabsDetails
        synopsis={data.attributes.synopsis}
        idVideo={data.attributes.youtubeVideoId}
      />
    </View>
  );
};

import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
} from "react-native";
import { AnimesData } from "../../@types/types";
import { getOneAnime } from "../../service/Api";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "react-query";

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
    <ScrollView className="flex-1  bg-slate-900 ">
      <StatusBar style="auto" hidden={true} />

      {data.attributes.coverImage?.original && (
        <ImageBackground
          className="w-full h-40"
          source={{ uri: data.attributes.coverImage.original }}
          fadeDuration={200}
        >
          <LinearGradient
            className="w-full h-full"
            colors={["transparent", "rgba(15, 23, 42, 0.767)"]}
          />
        </ImageBackground>
      )}

      <View className="flex-row items-center justify-between mt-7 px-3">
        <View className="flex-row items-center ">
          <Image
            className="w-24 h-28 mr-2 rounded-md"
            source={{ uri: data.attributes.posterImage.medium }}
          />

          <View className=" w-7/12">
            <Text className="text-slate-300 font-bold text-lg  ">
              {data.attributes.titles.en_jp
                ? data.attributes.titles.en_jp
                : data.attributes.titles.en}
            </Text>
            <Text className="text-slate-300 ">
              {data.attributes?.episodeCount} Episodes
            </Text>
          </View>
        </View>

        <View>
          <Text className="text-slate-300 font-bold text-lg">Score</Text>
          <Text className="text-slate-300 text-center">
            {data.attributes?.averageRating}
          </Text>
        </View>
      </View>

      <View className="mt-7 px-3 pb-3">
        <Text className="text-slate-300 font-bold text-xl mb-3">Synopsis</Text>
        <Text className="text-slate-300 text-justify text-base">
          {data.attributes?.synopsis}
        </Text>
      </View>
    </ScrollView>
  );
};

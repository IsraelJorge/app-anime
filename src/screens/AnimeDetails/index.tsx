import { useEffect, useState } from "react";
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

type ParamsProps = {
  id: string;
};

export const AnimeDetails = () => {
  const [anime, setAnime] = useState({} as AnimesData);
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();

  const { id } = route.params as ParamsProps;

  const fetchOneAnime = async () => {
    const data = await getOneAnime(id);
    setAnime(data.data);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchOneAnime();
  }, []);

  if (!isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-900">
        <ActivityIndicator size={"large"} color="#FFF" />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1  bg-slate-900 ">
      <StatusBar style="auto" hidden={true} />

      {anime.attributes.coverImage?.original && (
        <ImageBackground
          className="w-full h-40"
          source={{ uri: anime.attributes.coverImage.original }}
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
            source={{ uri: anime.attributes.posterImage.medium }}
          />

          <View className=" w-7/12">
            <Text className="text-slate-300 font-bold text-lg  ">
              {anime.attributes.titles.en_jp
                ? anime.attributes.titles.en_jp
                : anime.attributes.titles.en}
            </Text>
            <Text className="text-slate-300 ">
              {anime.attributes?.episodeCount} Episodes
            </Text>
          </View>
        </View>

        <View>
          <Text className="text-slate-300 font-bold text-lg">Score</Text>
          <Text className="text-slate-300 text-center">
            {anime.attributes?.averageRating}
          </Text>
        </View>
      </View>

      <View className="mt-7 px-3 pb-3">
        <Text className="text-slate-300 font-bold text-lg">Synopsis</Text>
        <Text className="text-slate-300 text-justify text-base">
          {anime.attributes?.synopsis}
        </Text>
      </View>
    </ScrollView>
  );
};

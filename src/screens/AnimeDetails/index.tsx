import { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { AnimesData } from "../../@types/types";
import { getOneAnime } from "../../service/Api";
import { useRoute } from "@react-navigation/native";

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
      <View className="flex-1 items-center justify-center bg-sky-700">
        <ActivityIndicator size={"large"} color="#FFF" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-sky-700">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center ">
          <Image
            className="w-24 h-28 mr-2 rounded-md"
            source={{ uri: anime.attributes.posterImage.medium }}
          />

          <View>
            <Text>{anime.attributes?.titles.en_jp}</Text>
            <Text>{anime.attributes?.episodeCount} Episodes</Text>
          </View>
        </View>

        <View>
          <Text>Score</Text>
          <Text>{anime.attributes?.averageRating}</Text>
        </View>
      </View>

      <View>
        <Text>Synopsis</Text>
        <Text>{anime.attributes?.synopsis}</Text>
      </View>
    </View>
  );
};

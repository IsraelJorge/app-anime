import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
  ActivityIndicator,
} from "react-native";
import { AnimesData } from "../../@types/types";
import { getCategoriesAnimes } from "../../service/Api";
import { Card } from "../Card";

export const Carousel = ({ title, categorie }) => {
  const [animes, setAnimes] = useState<AnimesData[]>([]);
  const [isLoading, setLoading] = useState(false);

  const fetchCategorieAnime = async () => {
    setLoading(true);

    const data = await getCategoriesAnimes(categorie);

    if (data) {
      setAnimes(data.data);
    }
    setLoading(false);
  };

  const RenderItem = ({ item }: ListRenderItemInfo<AnimesData>) => {
    return (
      <Card
        url={item.attributes.posterImage.medium}
        title={
          item.attributes.titles.en_jp
            ? item.attributes.titles.en_jp
            : item.attributes.titles.en
        }
        id={item.id}
      />
    );
  };

  useEffect(() => {
    fetchCategorieAnime();
  }, []);

  return (
    <View>
      <Text className="text-slate-200 font-medium text-xl ml-1">{title}</Text>

      {isLoading ? (
        <View className="h-56 items-center justify-center">
          <ActivityIndicator size={"large"} color="#FFF" />
        </View>
      ) : (
        <FlatList
          data={animes}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      )}
    </View>
  );
};

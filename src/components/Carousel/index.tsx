import {
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "react-query";
import { AnimesData } from "../../@types/types";
import { getCategoriesAnimes } from "../../service/Api";
import { Card } from "../Card";

export const Carousel = ({ title, categorie }) => {
  const { data, isLoading, isError } = useQuery<AnimesData[]>(
    ["categories", categorie],
    () => getCategoriesAnimes(categorie)
  );

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

  return (
    <View>
      <Text className="text-slate-200 font-medium text-xl ml-1">{title}</Text>

      {isError && (
        <View className="h-40  justify-center">
          <Text className="text-lg text-red-500">There was some error :( </Text>
        </View>
      )}

      {isLoading ? (
        <View className="h-56 items-center justify-center">
          <ActivityIndicator size={"large"} color="#FFF" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      )}
    </View>
  );
};

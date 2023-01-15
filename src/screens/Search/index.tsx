import {
  ListRenderItemInfo,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Input } from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { AnimesData } from "../../@types/types";
import { Card } from "../../components/Card";

import colors from "tailwindcss/colors";
import { getSearchAnimes } from "../../service/Api";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [animes, setAnimes] = useState<AnimesData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchAnime = async () => {
    setIsLoading(true);

    const data = await getSearchAnimes(search);

    if (data) {
      setAnimes(data.data);
    }
    setIsLoading(false);
  };

  const RenderItem = ({ item }: ListRenderItemInfo<AnimesData>) => {
    return (
      <Card
        url={item.attributes.posterImage.medium}
        title={item.attributes.titles.en_jp}
        id={item.id}
      />
    );
  };

  useEffect(() => {
    fetchSearchAnime();
  }, [search]);

  return (
    <View className="flex-1 px-3 pt-16 items-center bg-slate-900 ">
      <Input
        keyboardType="web-search"
        placeholder="search anime"
        Icon={
          <MaterialIcons name="search" color={colors.slate[900]} size={27} />
        }
        onChangeText={(text: string) => setSearch(text)}
      />

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={"large"} color="#FFF" />
        </View>
      ) : (
        <FlatList
          data={animes}
          renderItem={RenderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

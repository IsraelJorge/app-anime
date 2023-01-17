import {
  ListRenderItemInfo,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import { Input } from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { AnimesData } from "../../@types/types";
import { Card } from "../../components/Card";

import colors from "tailwindcss/colors";
import { getSearchAnimes } from "../../service/Api";
import { useQuery } from "react-query";

export const Search = () => {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useQuery<AnimesData[]>(
    ["search", search],
    () => getSearchAnimes(search)
  );

  const RenderItem = ({ item }: ListRenderItemInfo<AnimesData>) => {
    return (
      <Card
        url={item.attributes.posterImage.medium}
        title={item.attributes.titles.en_jp}
        id={item.id}
      />
    );
  };

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

      {isError && (
        <View className="flex-1 items-center justify-center bg-slate-900">
          <Text className="text-lg text-red-500">There was some error :( </Text>
        </View>
      )}

      {isLoading && search ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={"large"} color="#FFF" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={RenderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

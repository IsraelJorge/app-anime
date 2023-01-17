import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
} from "react-native";
import { useQuery, useInfiniteQuery } from "react-query";
import { AnimesData, AnimesDataPagination } from "../../@types/types";
import { Card } from "../../components/Card";
import { getAnimes } from "../../service/Api";

export const Catalog = () => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<AnimesDataPagination>("catalog", getAnimes, {
      retry: 2,
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      },
    });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const RenderItem = ({ item }: ListRenderItemInfo<AnimesData>) => {
    return (
      <Card
        url={item?.attributes?.posterImage?.medium}
        title={item?.attributes?.titles.en_jp}
        id={item.id}
      />
    );
  };

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator className="m-4 " size={"large"} color="#FFF" />
      </View>
    );
  }

  const flattenData = data.pages.flatMap((page) => page.data);

  return (
    <View className="flex-1  px-3 pt-16 items-center bg-slate-900">
      <FlatList
        data={flattenData}
        renderItem={RenderItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => {
          return isFetchingNextPage ? (
            <ActivityIndicator className="m-4 " size={"large"} color="#FFF" />
          ) : (
            <View className="h-16" />
          );
        }}
      />
    </View>
  );
};

import axios from "axios";
import { Alert } from "react-native";

export const Api = axios.create({
  baseURL: "https://kitsu.io/api/edge",
});

export const getAnimes = async (offset: number) => {
  try {
    const { data } = await Api.get("/anime?page[limit]=20", {
      params: {
        page: {
          offset: offset,
        },
      },
    });
    return data;
  } catch (error) {
    Alert.alert("Error");
    console.log(error);
  }
};

export const getOneAnime = async (id: string) => {
  try {
    const { data } = await Api.get(`/anime/${id}`);

    return data;
  } catch (error) {
    Alert.alert("Error");
    console.log(error);
  }
};

export const getCategoriesAnimes = async (categories: string) => {
  try {
    const { data } = await Api.get("/anime", {
      params: {
        filter: {
          categories: categories,
          seasonYear: 2017,
          streamers: "Crunchyroll",
        },
      },
    });
    return data;
  } catch (error) {
    Alert.alert("Error");
    console.log(error);
  }
};

export const getSearchAnimes = async (search: string) => {
  try {
    const { data } = await Api.get("/anime", {
      params: {
        filter: {
          text: search,
        },
      },
    });
    return data;
  } catch (error) {
    Alert.alert("Error");
    console.log(error);
  }
};

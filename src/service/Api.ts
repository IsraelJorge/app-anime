import axios from "axios";
import { toastErrorNotNerwork } from "../utils/toastShow";

export const Api = axios.create({
  baseURL: "https://kitsu.io/api/edge",
});

export const getAnimes = async ({ pageParam = 0 }) => {
  const { data } = await Api.get("/anime?page[limit]=20", {
    params: {
      page: {
        offset: pageParam,
      },
    },
  });

  return {
    data: data.data,
    nextPage: pageParam + 20,
  };
};

export const getOneAnime = async (id: string) => {
  const { data } = await Api.get(`/anime/${id}`);

  return data.data;
};

export const getCategoriesAnimes = async (categories: string) => {
  const { data } = await Api.get("/anime", {
    params: {
      filter: {
        categories: categories,
        seasonYear: 2017,
        streamers: "Crunchyroll",
      },
    },
  });
  return data.data;
};

export const getSearchAnimes = async (search: string) => {
  const { data } = await Api.get("/anime", {
    params: {
      filter: {
        text: search,
      },
    },
  });
  return data.data;
};

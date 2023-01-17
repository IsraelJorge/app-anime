export type AnimesData = {
  id: string;
  attributes: {
    titles: {
      en_jp: string;
      en: string;
    };
    canonicalTitle: string;
    posterImage: {
      medium: string;
    };
    synopsis: string;
    year: number;
    youtubeVideoId: string;
    episodeCount: number;
    averageRating: string;
    coverImage: {
      original: string;
    };
  };
};

export type AnimesDataPagination = {
  data: AnimesData[];
  nextPage: number;
};

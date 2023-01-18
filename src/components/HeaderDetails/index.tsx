import { View, Text, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type HeaderDetailsProps = {
  coverImage: string;
  image: string;
  episodeCount: number;
  titleJp: string;
  titleEn: string;
  score: string;
};

export const HeaderDetails = ({
  coverImage,
  image,
  episodeCount,
  titleJp,
  titleEn,
  score,
}: HeaderDetailsProps) => {
  return (
    <View>
      {coverImage && (
        <ImageBackground
          className="w-full h-40"
          source={{ uri: coverImage }}
          fadeDuration={200}
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
            source={{ uri: image }}
          />

          <View className=" w-7/12">
            <Text className="text-slate-300 font-bold text-lg  ">
              {titleJp ? titleJp : titleEn}
            </Text>
            <Text className="text-slate-300 ">{episodeCount} Episodes</Text>
          </View>
        </View>

        <View>
          <Text className="text-slate-300 font-bold text-lg">Score</Text>
          <Text className="text-slate-300 text-center">{score}</Text>
        </View>
      </View>
    </View>
  );
};

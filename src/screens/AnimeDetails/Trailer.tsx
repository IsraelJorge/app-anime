import { useFocusEffect, useRoute } from "@react-navigation/native";
import { useCallback, useState, useRef } from "react";
import { View, TouchableOpacity, Text, Linking } from "react-native";
import YoutubePlayer, {
  YoutubeIframeRef,
  getYoutubeMeta,
  YoutubeMeta,
} from "react-native-youtube-iframe";

import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import Toast from "react-native-toast-message";

type ParamsProps = {
  idVideo: string;
};

export const Trailer = () => {
  const route = useRoute();
  const { idVideo } = route.params as ParamsProps;
  const [playing, setPlaying] = useState(false);
  const [data, setData] = useState<YoutubeMeta>({} as YoutubeMeta);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const playerRef = useRef<YoutubeIframeRef>(null);

  const seekBackAndForth = (control) => {
    playerRef.current?.getCurrentTime().then((currentTime) => {
      control === "next"
        ? playerRef.current?.seekTo(currentTime + 15, true)
        : playerRef.current?.seekTo(currentTime - 15, true);
    });
  };

  const getMetaVideo = async () => {
    try {
      const data = await getYoutubeMeta(idVideo);

      setData(data);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Could not find the video",
      });
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getMetaVideo();
    }, [])
  );

  return (
    <View className="flex-1 px-3 pt-1">
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={idVideo}
        ref={playerRef}
      />

      {data.title && (
        <View className="mt-6">
          <Text className="text-slate-300">
            <Text className="text-base font-bold">Title:</Text> {data.title}
          </Text>
          <Text className="text-slate-300">
            <Text className="text-base font-bold">Author Name:</Text>{" "}
            {data.author_name}
          </Text>
          <Text
            className="text-slate-300 "
            onPress={() => Linking.openURL(data.author_url)}
          >
            <Text className="text-base font-bold">Link:</Text>{" "}
            <Text className="underline">{data.author_url}</Text>
          </Text>
        </View>
      )}

      <View className="items-center flex-row justify-around mt-9">
        <TouchableOpacity onPress={() => seekBackAndForth("previous")}>
          <MaterialIcons
            name="skip-previous"
            color={colors.slate[200]}
            size={50}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlaying}>
          {playing ? (
            <MaterialIcons
              name="pause-circle-filled"
              color={colors.slate[200]}
              size={50}
            />
          ) : (
            <MaterialIcons
              name="play-circle-fill"
              color={colors.slate[200]}
              size={50}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => seekBackAndForth("next")}>
          <MaterialIcons name="skip-next" color={colors.slate[200]} size={50} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

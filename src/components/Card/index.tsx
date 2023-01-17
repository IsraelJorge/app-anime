import { Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

type CardProps = {
  url: string;
  title: string;
  id?: string;
};

export const Card = ({ url, title, id }: CardProps) => {
  const navigation = useNavigation();

  const openAnimeDetails = () => {
    navigation.navigate("animeDetails", { id: id });
  };

  return (
    <TouchableOpacity
      className="w-40 p-4 m-1 bg-indigo-900 rounded-md"
      onPress={openAnimeDetails}
    >
      <Image className=" h-40 rounded-md" source={{ uri: url }} />

      <Text className="text-slate-200 font-bold mt-3" numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

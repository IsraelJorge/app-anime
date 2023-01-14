import { View, Image, Text } from "react-native";

type CardProps = {
  url: string;
  title: string;
  id?: number;
};

export const Card = ({ url, title, id }: CardProps) => {
  return (
    <View className="w-40 p-4 m-1 bg-gray-900 rounded-md">
      <Image className=" h-40 rounded-md" source={{ uri: url }} />

      <Text className="text-white font-bold mt-3">{title}</Text>
    </View>
  );
};

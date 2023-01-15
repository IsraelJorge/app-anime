import { ScrollView, View } from "react-native";
import { Carousel } from "../../components/Carousel";

export const Categories = () => {
  return (
    <ScrollView>
      <View className="flex-1 pl-3 pb-1 mt-16">
        <Carousel title="Action" categorie="action" />
        <Carousel title="Adventure" categorie="adventure" />
        <Carousel title="Romance" categorie="romance" />
      </View>
    </ScrollView>
  );
};

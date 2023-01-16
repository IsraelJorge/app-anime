import { ScrollView, View } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Carousel } from "../../components/Carousel";

export const Home = () => {
  return (
    <ScrollView>
      <View className="flex-1 pl-3 pb-1">
        <Carousel title="Action" categorie="action" />
        <Carousel title="Adventure" categorie="adventure" />
        <Carousel title="Romance" categorie="romance" />
      </View>
    </ScrollView>
  );
};

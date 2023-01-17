import Toast from "react-native-toast-message";

export const toastErrorNotNerwork = () => {
  Toast.show({
    type: "error",
    text1: "No network",
  });
};

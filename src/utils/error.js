import { Toast } from "native-base";

export const error = msg => {
  Toast.show({
    text: msg,
    position: "center",
    duration: 400
  });
};

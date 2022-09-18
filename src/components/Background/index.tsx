import { ImageBackground } from "react-native";

import galaxyBackground from "../../assets/background-galaxy.png";
import { styles } from "./styles";

type Props = {
  children: React.ReactNode;
};

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={galaxyBackground}
      defaultSource={galaxyBackground}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}

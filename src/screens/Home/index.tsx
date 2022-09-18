import { useEffect, useState } from "react";
import { Image, View, FlatList } from "react-native";

import logo from "../../assets/logo-nlw-esports.png";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { BASE_URL } from "../../secrets";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar"
      />

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

"use client";
import { Box, Button, Flex, Image, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const buscarPoke = async (name: string) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return data;
};

export default function Home() {
  const [pokemon, setPokemon] = useState("");
  const [buscar, setBuscar] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemon", buscar],
    queryFn: () => buscarPoke(buscar),
    enabled: !!buscar,
  });

  const handleSearch = () => {
    setBuscar(pokemon.toLowerCase());
  };

  return (
    <Box bg={"#FF0000"}>
      <Flex
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid red",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <Text>POKEMON</Text>
        <input
          type="text"
          placeholder="Digite o nome do Pokémon"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <Button onClick={handleSearch}>Buscar</Button>

        {isLoading && <p>Carregando...</p>}
        {isError && (
          <p style={{ color: "black" }}>{(error as Error).message}</p>
        )}

        {data && (
          <Flex
            dir={"flex"}
            justify={"center"}
            align={"center"}
            style={{ border: "1px solid red" }}
          >
            <Text>{data.name}</Text>
            <Text>{data.types[0].type.name}</Text>

            <Image
              w={"500px"}
              h={"500px"}
              src={data.sprites.front_default}
              alt={data.name}
            />
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

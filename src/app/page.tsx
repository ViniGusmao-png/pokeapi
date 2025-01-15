"use client";
import { Box, Button, Flex, Text, TextInput, Image } from "@mantine/core";
import "./page.css";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const buscarPoke = async (name: string) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return data;
};

function Home() {
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemon", busca],
    queryFn: () => buscarPoke(busca),
    enabled: !!busca,
  });

  const handleSearchA = () => {
    setBusca(input.toLowerCase());
  };
  const handleSearchB = () => {
    setBusca(input.toLowerCase());
  };
  return (
    <Box w={"100vw"} h={"100vh"} style={{ backgroundColor: "red" }}>
      <Flex
        style={{ gap: "20px" }}
        display={"flex"}
        direction={"column"}
        justify={"center"}
        align={"center"}
      >
        <Flex style={{ marginTop: "30px" }}>
          <Text
            style={{
              fontSize: "72px",
              color: "yellow",
              fontWeight: "800",
              fontFamily: "sans-serif",
              textShadow:
                "2px 2px 1px #000, 4px 4px 2px #000, 6px 6px 3px #000",
              WebkitTextStroke: "4px rgb(0, 38, 255)",
            }}
          >
            Pokedex
          </Text>
        </Flex>
        <Flex
          display={"flex"}
          direction={"column"}
          align={"center"}
          style={{ gap: "10px" }}
        >
          <TextInput
            placeholder="digite o nome do Pokemon"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            styles={{
              input: {
                height: "35px",
                borderRadius: "8px",
                backgroundColor: "rgb(123, 160, 49)",
                color: "black",
                fontSize: "20px",
                paddingLeft: "5px",
                fontWeight: "bold",
              },
            }}
          />
          <Flex display={"flex"} align={"center"} style={{ gap: "10px" }}>
            <Button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                fontSize: "30px",
                backgroundColor: "#6D011A",
              }}
              onClick={handleSearchA}
            >
              {" "}
              A
            </Button>
            <Button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                fontSize: "30px",
                backgroundColor: "#6D011A",
              }}
              onClick={handleSearchB}
            >
              {" "}
              B
            </Button>
            {isLoading && <p>Carregando...</p>}
            {isError && (
              <p style={{ color: "black" }}>{(error as Error).message}</p>
            )}
          </Flex>
        </Flex>
        {data && (
          <Flex
            display={"flex"}
            direction={"column"}
            align={"center"}
            style={{ gap: "30px", width: "500px" }}
          >
            <Text style={{ fontSize: "30px", fontFamily: "sans-serif" }}>
              {data.name} - {data.order}
            </Text>

            <Flex
              display={"flex"}
              direction={"column"}
              justify={"center"}
              align={"center"}
              style={{
                backgroundColor: "white",
                width: "200px",
                height: "200px",
                backgroundImage: "url('./assets/fundoPoke.png')",
                backgroundSize: "cover",
                borderRadius: "20px",
              }}
            >
              <Image src={data.sprites.front_default} alt={data.name} />
            </Flex>
            <Flex
              style={{
                height: "35px",
                borderRadius: "8px",
                backgroundColor: "rgb(123, 160, 49)",
                color: "black",
                fontSize: "20px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                padding: "5px 5px 5px 5px",
              }}
            >
              <Text
                style={{
                  gap: "20px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  fontSize: "28px",
                }}
              >
                {" "}
                {data.types.map(
                  (typeObj: { type: { name: string } }, index: number) => (
                    <Text key={index}>{typeObj.type.name}</Text>
                  )
                )}
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
export default Home;

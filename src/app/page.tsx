"use client";
import { Box, Button, Flex, Input, Text, TextInput } from "@mantine/core";
import "./page.css";
function Home() {
  return (
    <Box w={"100vw"} h={"100vh"} style={{ backgroundColor: "red" }}>
      <Flex
        style={{ border: "1px solid blue", gap: "20px" }}
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
            bg={"rgb(123, 160, 49)"}
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
            >
              {" "}
              B
            </Button>
          </Flex>
        </Flex>
        <Flex
          display={"flex"}
          direction={"column"}
          align={"center"}
          style={{ gap: "30px", width: "200px" }}
        >
          <Text>Nome do pokemon numero</Text>

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
            <Text>Foto do pokemon</Text>
          </Flex>
          <Text>Elemento do pokemon</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
export default Home;

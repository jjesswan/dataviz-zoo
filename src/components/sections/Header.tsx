import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme"


export default function Header() {
  return (
    <div id="top">
      <Flex
        minHeight={"100vh"}
        justifyContent={"center"}
        alignItems={{lg: "flex-end", base: "center"}}
        flexDir={"column"}
        w="100%"
        role="header"
        aria-label="header"
        pr={{lg: "2rem", base: "0rem"}}
      >
        <Flex gap={{md: "1rem", base: "0rem"}} flexDir={{md:"row", base: "column"}}>
          <Text variant="bigHeader" color="orange" textAlign={{md: "right", base: "center"}}>
            The
          </Text>
          <Text variant="bigHeader" color="lightGrey" textAlign={{md: "right", base: "center"}}>
            Silver
          </Text>
          <Text variant="bigHeader" color="orange" textAlign={{md: "right", base: "center"}}>
            Lining
          </Text>
        </Flex>
       
        <Text variant={{md: "medHeader", base: "subHeader"}} color="orange" textAlign={{md: "right", base: "center"}} mt="1rem">
          The Protective (and Hurtful) Power of Zoos
        </Text>
        <Text variant="subHeader" textAlign={{md: "right", base: "center"}} color="lightGrey" px="2rem" mt="1rem">
          A Data-Driven Analysis of Zoos' Impact on Endangered Species Maximum Life Expectancy (MLE)
        </Text>
      </Flex>
    </div>
  );
}

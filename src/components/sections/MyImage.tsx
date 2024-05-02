import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme";

interface ImageProps{
    src: string,
    captionDesc: string,
    captionLink: string
}

export default function MyImage(props: ImageProps) {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w="90vw"
      marginLeft={"10rem"}
      role="banner"
      aria-label="banner"
      paddingX={"15rem"}
      paddingY={"2rem"}
      flexDir={"column"}
    >
        <Image src={props.src} />
        <Text variant="body">Source: {props.captionDesc}</Text>
    </Flex>
  );
}

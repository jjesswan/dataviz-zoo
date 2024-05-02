import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import customTheme from "../../styles/theme";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";


interface ImageProps{
    src: string,
    captionDesc: string,
    captionLink: string
}

export default function MyImage(props: ImageProps) {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"right"}
      w="90vw"
      marginLeft={"10rem"}
      role="banner"
      aria-label="banner"
      paddingX={"15rem"}
      paddingY={"2rem"}
      flexDir={"column"}
    >
      <Image src={props.src} />
      <ChakraLink
        variant="sourceLink"
        href={props.captionLink}
        target="_blank"
      >
        Source: {props.captionDesc}
      </ChakraLink>
    </Flex>
  );
}

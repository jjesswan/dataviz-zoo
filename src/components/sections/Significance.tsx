import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import customTheme from "../../styles/theme";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";


export default function Significance() {
  return (
    <div id="two">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w="90vw"
        marginLeft={"10rem"}
        role="banner"
        aria-label="banner"
        paddingX={"18rem"}
        paddingY={"2rem"}
        flexDir={"column"}
        gap={"2rem"}
        paddingTop={"12rem"}
      >
        <Text variant="bigNumber" textAlign={"right"}>
          Why does this matter?
        </Text>
        <Text variant="body">
          <b>Zoos</b> play a crucial role in breeding programs to safeguard
          against extinction. Challenges in conservation stem from the specific
          requirements of red pandas' habitats, which are increasingly scarce
          due to human activities. The Smithsonian's National Zoo has been
          instrumental in conservation efforts, while the International Union
          for Conservation of Nature emphasizes habitat protection, reducing
          threats, and raising awareness as key strategies for red panda
          conservation. However, interestingly, the maximum life expectancy of
          animals held captive in zoos is significantly shorter than the same
          life expectancy found in wild habitats – including the case for red
          pandas. This poses a compelling dilemma: are zoos beneficial or
          detrimental to critically endangered species, especially as more and
          more species have become at risk in the past 20 years? 
          
          <ChakraLink
            variant="sourceLink"
            href="https://nationalzoo.si.edu/animals/red-panda#:~:text=Red%20pandas%20are%20endangered%20and,over%20the%20past%20two%20decades"
            target="_blank"
          >
            Source.
          </ChakraLink>
        </Text>
      </Flex>
    </div>
  );
}

import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import customTheme from "../../styles/theme";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";


export default function RedPanda() {
  return (
    <div id="one">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w="90vw"
        marginLeft={"10rem"}
        role="banner"
        aria-label="banner"
        paddingX={"15rem"}
        paddingY={"2rem"}
      >
        <Flex width={"40%"}>
          <Text variant="body">
            Red pandas, legally protected in several Asian countries, face
            critical threats including habitat loss, human interference, and
            poaching. Their population has declined significantly over the past
            two decades, with continued decline expected due to ongoing threats.
            Despite protection measures, activities like logging, livestock
            grazing, and hunting persist in their habitats. These animals are
            particularly vulnerable to habitat fragmentation and inbreeding due
            to human encroachment. Illegal pet trade poses a growing threat,
            though poaching for pelts and meat has decreased. Climate change,
            natural disasters, and insufficient conservation efforts further
            exacerbate their plight.{" "}
            <ChakraLink
              variant="sourceLink"
              href="https://nationalzoo.si.edu/animals/red-panda#:~:text=Red%20pandas%20are%20endangered%20and,over%20the%20past%20two%20decades"
              target="_blank"
            >
              Source.
            </ChakraLink>
          </Text>
        </Flex>
        <Flex flexDir={"column"}>
          <Flex alignItems={"center"} gap={"1rem"}>
            <Text variant="bigNumber">10,000</Text>
            <Text variant="subtitle">individuals</Text>
          </Flex>
          <Flex alignItems={"center"} gap={"1rem"}>
            <Text variant="bigNumber">19</Text>
            <Text variant="subtitle">years MLE in wild</Text>
          </Flex>
          <Flex alignItems={"center"} gap={"1rem"}>
            <Text variant="bigNumber">10.5</Text>
            <Text variant="subtitle">years MLE in zoos</Text>
          </Flex>
          <Flex alignItems={"center"} gap={"1rem"}>
            <Text variant="bigNumber">8.5</Text>
            <Text variant="subtitle">difference in MLE</Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

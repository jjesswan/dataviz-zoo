import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme";

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
        <Flex width={"30%"}>
          <Text variant="body">
            The red panda is slightly larger than a domestic cat with a
            bear-like body and thick russet fur. The belly and limbs are black,
            and there are white markings on the side of the head and above its
            small eyes. Red pandas are very skillful and acrobatic animals that
            predominantly stay in trees. Almost 50% of the red panda’s habitat
            is in the Eastern Himalayas. They use their long, bushy tails for
            balance and to cover themselves in winter, presumably for warmth.
            Primarily an herbivore, the name panda is said to come from the
            Nepali word ‘ponya,’ which means bamboo or plant eating animal.
          </Text>
        </Flex>
        <Flex flexDir={"column"}>
          <Flex alignItems={"center"} gap={"1rem"}>
            <Text variant="bigNumber">
              10,000
            </Text>
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

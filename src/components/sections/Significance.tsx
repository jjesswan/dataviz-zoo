import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme";

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
          The red panda is slightly larger than a domestic cat with a bear-like
          body and thick russet fur. The belly and limbs are black, and there
          are white markings on the side of the head and above its small eyes.
          Red pandas are very skillful and acrobatic animals that predominantly
          stay in trees. Almost 50% of the red panda’s habitat is in the Eastern
          Himalayas. They use their long, bushy tails for balance and to cover
          themselves in winter, presumably for warmth. Primarily an herbivore,
          the name panda is said to come from the Nepali word ‘ponya,’ which
          means bamboo or plant eating animal.
        </Text>
      </Flex>
    </div>
  );
}

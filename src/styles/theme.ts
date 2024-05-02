import { extendTheme, textDecoration, ThemeConfig, useColorModeValue } from "@chakra-ui/react";
import "@fontsource/inria-sans/300.css";
import "@fontsource/inria-sans/400.css";
import "@fontsource/inria-sans/700.css";

const colors = {
  // blue color scheme based off of #3A496F
  yellow: "#FFC747",
  red: "#CB2121",
  lightBlue: "#ADE2FF",
  darkBlue: "#7BD0FF",
  darkestBlue: "#3C6278",
  darkGrey: "#313946",
  mediumGrey: "#38475B",
  lightGrey: "#B6B6B6",
  brown: "#5D3011",
  offWhite: "#F8F8F8",

  orange: "#E1580B",
};

const fonts = {
  heading: `'Inria Sans', sans-serif`,
  heading1: `"Balsamiq Sans", sans-serif`,
  body: `'Inria Sans', sans-serif`,
  subtitle: `"Pitagon Sans Mono", sans-serif;`,
};

const components = {
  Link: {
    variants: {
      navLink1: () => ({
        fontFamily: fonts.heading,
        fontWeight: "800",
        fontSize: "2rem",
        color: "orange",
        lineHeight: "100%",
        textDecoration: "none",
        transition: "all 0.4s",
        _hover: {
          color: "white",
          textDecoration: "none",
          transition: "all 0.4s",
        },
      }),
      navLink2: () => ({
        fontFamily: fonts.body,
        fontSize: "1rem",
        fontWeight: "500",
        letterSpacing: "-.05rem",
        paddingX: "1rem",
        textDecoration: "none",
        transition: "all 0.4s",
        color: "black",
        _hover: {
          color: "lightGrey",
          textDecoration: "none",
          transition: "all 0.4s",
        },
      }),
      sideLink: () => ({
        fontFamily: fonts.body,
        fontSize: "1.5rem",
        fontWeight: "500",
        letterSpacing: "-.05rem",
        textDecoration: "none",
        transition: "all 0.4s",
        color: "white",
        _hover: {
          color: "mediumGrey",
          textDecoration: "none",
          transition: "all 0.4s",
        },
      }),
      sourceLink: () => ({
        fontFamily: fonts.body,
        fontSize: ".8rem",
        textAlign: "right",
        color: colors.orange,
        fontStyle: "italic",
        textDecoration: "none",
        transition: "all 0.4s",
        _hover: {
          color: "white",
          transition: "all 0.4s",
        },
      }),
    },
  },
  Text: {
    variants: {
      // HEADER
      bigHeader: () => ({
        fontFamily: fonts.heading,
        fontWeight: "800",
        fontSize: "7rem",
        color: "white",
      }),
      bigNumber: () => ({
        fontFamily: fonts.heading,
        fontWeight: "800",
        fontSize: "5rem",
        color: "white",
        lineHeight: "100%",
      }),
      smallNumber: () => ({
        fontFamily: fonts.heading,
        fontWeight: "700",
        fontSize: "1.5rem",
        color: "white",
        lineHeight: "100%",
      }),
      subHeader: () => ({
        fontFamily: fonts.heading,
        fontSize: "2rem",
        color: "white",
      }),
      subtitle: () => ({
        fontFamily: fonts.heading,
        fontSize: "1.5rem",
        color: "white",
      }),
      body: () => ({
        fontFamily: fonts.body,
        fontSize: ".8rem",
        textAlign: "justify",
        color: "#B8B8B8",
      }),
    },
  },
};

const customTheme = {
  //config,
  colors,
  //styles,
  fonts,
  components,
};

export default extendTheme(customTheme);

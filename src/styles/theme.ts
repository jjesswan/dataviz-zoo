import { extendTheme, textDecoration, ThemeConfig, useColorModeValue } from "@chakra-ui/react";
import "@fontsource/inria-sans/300.css";
import "@fontsource/inria-sans/400.css";
import "@fontsource/inria-sans/700.css";
import '@fontsource-variable/noto-serif-georgian/wght.css';
import '@fontsource-variable/vollkorn/wght.css';

const colors = {
  lightGrey: "#d7d7d7",
  orange: "#E1580B",
  brown: "#331807"
};

const fonts = {
  heading: `'Vollkorn Variable', serif`,
  body: `'Noto Serif Georgian Variable', serif`,
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
      sourceLink: () => ({
        fontFamily: fonts.subtitle,
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
      creditLink: () => ({
        fontFamily: fonts.subtitle,
        color: "#a1d3ff",
        textDecoration: "underline",
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
        fontWeight: "600",
        fontSize: "7rem",
        color: "white",
      }),
      medHeader: () => ({
        fontFamily: fonts.heading,
        fontWeight: "400",
        fontSize: "3rem",
        color: "white",
      }),
      bigNumber: () => ({
        fontFamily: fonts.heading,
        fontWeight: "600",
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
        fontFamily: fonts.subtitle,
        fontSize: "1rem",
        color: "white",
      }),
      subtitle: () => ({
        fontFamily: fonts.subtitle,
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

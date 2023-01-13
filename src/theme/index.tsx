import PropTypes from "prop-types";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { useIsDarkMode } from "state/user/hooks";

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

declare module "@mui/material/styles" {
  interface TypeBackground {
    footer?: string;
    transparent?: string;
  }
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useIsDarkMode();
  console.log("darkMode", darkMode);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#19131A",
        light: "#ffffff",
        dark: "#676370",
      },
      secondary: {
        main: "#FF2D55",
        light: darkMode ? "#816AEF" : "#816AEF",
        dark: darkMode ? "#4D69CD" : "#4D69CD",
      },
      background: {
        default: darkMode ? "#231D24" : "#ffffff",
        footer: darkMode ? "#383039" : "#eeeeee",
        transparent: "transparent",
      },
      text: {
        primary: "#ffffff",
        secondary: "#16141A",
        disabled: "#FF2D55"
      }
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

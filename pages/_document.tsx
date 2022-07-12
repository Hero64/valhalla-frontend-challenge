import { Html, Head, Main, NextScript } from "next/document";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, createTheme, colors } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    background: {
      default: colors.blueGrey[50],
    },
  },
});

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
};

export default Document;

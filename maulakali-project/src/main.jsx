import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";

render(
  <MantineProvider>
    <App />
  </MantineProvider>,
  document.getElementById("app")
);

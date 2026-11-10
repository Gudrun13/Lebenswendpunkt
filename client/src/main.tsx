import { createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/montserrat/wght-italic.css";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

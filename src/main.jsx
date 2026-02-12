import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyles from "./styles/globalStyles";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <AppRoutes />
  </>
);

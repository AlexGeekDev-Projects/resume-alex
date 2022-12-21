import ReactDOM from "react-dom/client";
import "./sass/theme.scss";
import "./sass/main.scss";
import second from "./sass/Styles.css";
import { App } from "./App";
import { AdminProvider, UiProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UiProvider>
    <AdminProvider>
      <App />
    </AdminProvider>
  </UiProvider>
);

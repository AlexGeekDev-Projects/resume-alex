import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register } from "../auth";
import { Home } from "../Pages/";
import { useUiContext } from "../context/uiContext";
import { Layout } from "../layout/Layout";
import routes from "./routes";

export const Path = () => {
  const { active } = useUiContext();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path={routes.home} element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

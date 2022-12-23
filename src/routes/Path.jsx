import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register } from "../auth";
import { Home, Awards } from "../Pages/";
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
          <Route exact path={routes.awards} element={<Awards />} />
          <Route exact path={routes.login} element={<Login />} />
          <Route exact path={routes.register} element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

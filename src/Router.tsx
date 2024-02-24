import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";

import { RouterLayout } from "./common/RouterLayout";
import CharacterDetails from "./pages/CharacterDetails";
import Login from "./pages/Login";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/personaje/:id" element={<CharacterDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

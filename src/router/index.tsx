import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};

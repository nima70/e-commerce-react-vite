import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ProductScreen from "./screens/ProductScreen.tsx";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen.tsx";
import LoginScreen from "./screens/LogInScreen.tsx";
import RegisterScreen from "./screens/RegisterScreen.tsx";
function MainRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="about" element={<div>about</div>} />
          <Route path="*" element={<div>not found</div>} />
          <Route path="products/:id" element={<ProductScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MainRoot />
    </Provider>
  </StrictMode>
);

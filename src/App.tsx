import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { I18NProvider } from "./i18n";
import { Blog } from "./views/Blog";
import { Home } from "./views/Home/Home";

export const App: FC = () => {
  return (
    <I18NProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </I18NProvider>
  );
};

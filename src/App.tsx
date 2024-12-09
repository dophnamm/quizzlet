import { BrowserRouter, Routes, Route } from "react-router";

import Questions from "./pages/Questions";
import Result from "./pages/Result";
import ScrollToTop from "./components/ScrollToTop/index.tsx";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

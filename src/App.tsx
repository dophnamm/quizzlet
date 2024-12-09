import { BrowserRouter, Routes, Route } from "react-router";

import Questions from "./pages/Questions";
import Result from "./pages/Result";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

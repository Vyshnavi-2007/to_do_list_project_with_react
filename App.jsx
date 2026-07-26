import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Todo from "./components/Todo";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/header"element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
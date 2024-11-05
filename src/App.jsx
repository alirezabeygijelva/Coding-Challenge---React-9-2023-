import { Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./components/book";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;

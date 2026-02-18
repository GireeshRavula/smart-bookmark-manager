import { Routes, Route } from "react-router-dom";
import BookmarkListPage from "./pages/BookmarkListPage";
import BookmarkFormPage from "./pages/BookmarkFormPage";
import "./styles/app.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BookmarkListPage />} />
      <Route path="/add" element={<BookmarkFormPage />} />
      <Route path="/edit/:id" element={<BookmarkFormPage />} />
    </Routes>
  );
};

export default App;

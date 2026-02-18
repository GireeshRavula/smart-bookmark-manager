import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createBookmark, updateBookmark } from "../services/api";
import BookmarkForm from "../components/BookmarkForm";

const BookmarkFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const editingBookmark = location.state || null;

  const handleSubmit = async (data) => {
    if (editingBookmark) {
      await updateBookmark(id, data);
    } else {
      await createBookmark(data);
    }

    navigate("/");
  };

  return (
        <div className="container">
            <h1>Smart Bookmark Application</h1>


            <BookmarkForm
            onSubmit={handleSubmit}
            editingBookmark={editingBookmark}
            cancelEdit={() => navigate("/")}
            />

        </div>
    );
};

export default BookmarkFormPage;

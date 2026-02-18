import { useEffect, useState } from "react";
import { getBookmarks, deleteBookmark } from "../services/api";
import BookmarkList from "../components/BookmarkList";
import { useNavigate } from "react-router-dom";

const BookmarkListPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBookmarks = async () => {
    try {
      const res = await getBookmarks();
      setBookmarks(res.data);
    } catch (err) {
      console.error("Error fetching bookmarks", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this bookmark?")) return;
    await deleteBookmark(id);
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  return (
    <div className="container">
        
        <div className="page-header">
            <h1>Manage Bookmarks</h1>

            <button className="primary-btn" onClick={() => navigate("/add")}>
                Add Bookmark
            </button>
        </div>

      <BookmarkList
        bookmarks={bookmarks}
        onEdit={(bookmark) => navigate(`/edit/${bookmark.id}`, { state: bookmark })}
        onDelete={handleDelete}
        loading={loading}
      />
    </div>
  );
};

export default BookmarkListPage;

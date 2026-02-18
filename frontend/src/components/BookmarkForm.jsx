import { useEffect, useState } from "react";

const BookmarkForm = ({ onSubmit, editingBookmark, cancelEdit }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingBookmark) {
      setTitle(editingBookmark.title);
      setUrl(editingBookmark.url);
    } else {
      setTitle("");
      setUrl("");
    }
  }, [editingBookmark]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (!url.startsWith("http")) {
      setError("Enter valid URL");
      return;
    }

    onSubmit({ title, url });

    setTitle("");
    setUrl("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingBookmark ? "Edit Bookmark" : "Add Bookmark"}</h2>

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <div className="form-actions">
        <button type="submit" className="primary-btn">
            {editingBookmark ? "Update" : "Add"}
        </button>

        <button
            type="button"
            className="secondary-btn"
            onClick={cancelEdit}
        >
            Bookmark List
        </button>
      </div>
    </form>
  );
};

export default BookmarkForm;
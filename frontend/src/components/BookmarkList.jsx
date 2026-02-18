import BookmarkItem from "./BookmarkItem";

const BookmarkList = ({ bookmarks, onEdit, onDelete, loading }) => {
  if (loading) return <p>Loading...</p>;

  if (!bookmarks.length) return <p>No bookmarks added yet</p>;

  return (
    <>
      {bookmarks.map((b) => (
        <BookmarkItem
          key={b.id}
          bookmark={b}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default BookmarkList;

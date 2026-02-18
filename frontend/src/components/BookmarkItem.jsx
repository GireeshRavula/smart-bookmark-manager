const BookmarkItem = ({ bookmark, onEdit, onDelete }) => {
  return (
    <div className="bookmark-item">
      <a href={bookmark.url} target="_blank" rel="noreferrer">
        {bookmark.title}
      </a>

      <div className="actions">
        <button className="primary-btn" onClick={() => onEdit(bookmark)}>Edit</button>
        
        <button className="danger-btn" onClick={() => onDelete(bookmark.id)}>Delete</button>
      </div>
    </div>
  );
};

export default BookmarkItem;

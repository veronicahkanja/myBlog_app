import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function PostPage() {
  const { id } = useParams(); // Get post ID from URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null); // Store single post
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch post from JSON Server
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Post not found");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Delete post with confirmation
  function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) return;

    fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate("/")) // Go back to Home after deletion
      .catch((err) => console.error("Error deleting post:", err));
  }

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{post.title}</h1>
      <p style={{ whiteSpace: "pre-line" }}>{post.body}</p>

      <button
        onClick={() => navigate(`/edit/${post.id}`)}
        style={{ padding: "8px 15px", marginRight: "10px" }}
      >
        Edit
      </button>

      <button
        onClick={handleDelete}
        style={{ padding: "8px 15px", background: "red", color: "white" }}
      >
        Delete
      </button>

      <br />
      <br />
      <Link to="/">← Back Home</Link>
    </div>
  );
}

export default PostPage;

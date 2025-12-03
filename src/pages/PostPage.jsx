import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function PostPage() {
    const { id } = useParams(); // Get post ID from Url
    const navigate = useNavigate();
    const [post, setPosts] = useState(null); // Storee single post

// Fetch post from JSON Server
useEffect(() =>{
     fetch(`http://localhost:8000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching post:", err));
}, [id]);    
// Delete post function 
function handleDelete() {
  const confirmDelete = window.confirm("Are you sure you want to delete this post?");

  if (!confirmDelete) return;

  fetch(`http://localhost:8000/posts/${id}`, {
    method: "DELETE",
  }).then(() => navigate("/"));
}


 if (!post) return <h2>Loading...</h2>; // Show loading while fetching

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <button onClick={() => navigate(`/edit/${post.id}`)}>Edit</button>
      <button
        onClick={handleDelete}
        style={{ marginLeft: "10px", background: "red", color: "white" }}
      >
        Delete
      </button>

      <br />
      <br />
      <Link to="/">← Back Home</Link>
    </div>
  );
}

export default PostPage

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

function handleSubmit(e) {
    e.preventDefault(); 
fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    })
      .then(() => {
        // After creating post, go back to Home page
        navigate("/");
      })
      .catch((err) => console.error("Error creating post:", err));
}
  return (
    <div style={{ padding: "20px" }}>
      <h1>Create New Post</h1>

     <form 
  onSubmit={handleSubmit}
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
  }}
>
  <input
    type="text"
    placeholder="Post Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    required
    style={{
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px"
    }}
  />

  <textarea
    placeholder="Post Content"
    value={body}
    onChange={(e) => setBody(e.target.value)}
    required
    style={{
      padding: "12px",
      height: "200px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px"
    }}
  />

  <button
    type="submit"
    style={{
      padding: "12px",
      background: "black",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "18px"
    }}
  >
    Save Post
  </button>
</form>
 
    </div>
  );
}

export default NewPost;

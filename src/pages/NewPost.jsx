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
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
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
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    }}
  />

  <textarea
    placeholder="Write your post..."
    value={body}
    onChange={(e) => setBody(e.target.value)}
    required
    style={{
      padding: "12px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      minHeight: "180px",
    }}
  />

  <button
    type="submit"
    style={{
      background: "#0077ff",
      color: "white",
      padding: "12px",
      fontSize: "16px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    Save
  </button>
</form>

    </div>
  );
}

export default NewPost;

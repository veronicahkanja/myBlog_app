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

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
        </div>

        <div>
          <textarea
            placeholder="Post Content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", height: "150px" }}
          />
        </div>

        <button
          type="submit"
          style={{ marginTop: "10px", padding: "10px 20px" }}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default NewPost;

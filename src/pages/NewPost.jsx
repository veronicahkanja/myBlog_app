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
    <div>
      
    </div>
  )
}

export default NewPost;

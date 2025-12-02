import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const { id } = useParams(); // Get post ID from URL
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Fetch existing post data when page loads
  useEffect(() => {
    fetch(`http://localhost:8000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
      })
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  // Handle form submission to update post
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:8000/posts/${id}`, {
      method: "PATCH", // PATCH updates only the provided fields
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    })
      .then(() => navigate(`/posts/${id}`)) // Redirect to the post page
      .catch((err) => console.error("Error updating post:", err));
  }
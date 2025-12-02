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
    fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate("/")) // Go back to Home after deletion
      .catch((err) => console.error("Error deleting post:", err));
}

 if (!post) return <h2>Loading...</h2>; // Show loading while fetching

  return (
    <div>
      
    </div>
  )
}

export default PostPage

import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function PostPage() {
    const { id } = useParams(); // Get post ID from Url
    const navigate = useNavigate();
    const [post, setPosts] = useState(null); // Storee single post
  return (
    <div>
      
    </div>
  )
}

export default PostPage

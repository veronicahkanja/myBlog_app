import {useState, useEffect} from "react";
import { Link } from "react-router-dom";



function Home() {
    const [posts, setPosts] = useState([]); // here we have used State to store posts

    // Fetch posts when component Loads

    useEffect(() => {
        fetch("http://localhost:8000/posts") // this is our JSON server endpoint
        .then ((res) => res.json())
        .then ((data) => setPosts(data)) // save posts in store
        .catch((err) => console.error("Error fetching posts:", err));
    }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Posts</h1>
      <Link to="/new">Create New Post</Link>

      <div style={{ marginTop: "20px" }}>
        {posts.length === 0 ? ( // conditional rendering
          <p>No posts yet.</p>
        ) : (
          posts.map((post) => ( // Loops through the posts and renders them.
            <div
              key={post.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h2>{post.title}</h2>
              <Link to={`/posts/${post.id}`}>Read More</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home

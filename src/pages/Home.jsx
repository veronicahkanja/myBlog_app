import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
  <div style={{ padding: "20px" }}>
    <h1>All Blog Posts</h1>

    {/* Search Bar (added now, but we will activate it later) */}
    <input
      type="text"
      placeholder="Search posts..."
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "20px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #ccc"
      }}
    />

    {/* Posts Container */}
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
    }}>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.body.substring(0, 100)}...</p>
          <a
            href={`/posts/${post.id}`}
            style={{ color: "#0077ff", textDecoration: "none" }}
          >
            Read More →
          </a>
        </div>
      ))}
    </div>
  </div>
);

}

export default Home;

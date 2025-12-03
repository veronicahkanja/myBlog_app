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
    <div>
      <h1>All Blog Posts</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "white",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 120)}...</p>
            <Link
              to={`/posts/${post.id}`}
              style={{
                color: "blue",
                textDecoration: "underline",
                fontWeight: "bold"
              }}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Blog Posts</h1>

        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 15px",
            marginBottom: "30px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {filteredPosts.length === 0 ? (
          <p style={{ textAlign: "center" }}>No posts found.</p>
        ) : (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: "white",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "10px",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h2>{post.title}</h2>
              <p style={{ maxHeight: "60px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "pre-line" }}>
                {post.body}
              </p>
              <Link to={`/posts/${post.id}`} style={{ color: "#007BFF", fontWeight: "bold" }}>
                Read More →
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;

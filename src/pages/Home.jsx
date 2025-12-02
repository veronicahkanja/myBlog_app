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
    <div>
      
    </div>
  )
}

export default Home

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import Header from "./components/Header";

function App() {
  return(
    <Router>
      <Header />  {/* Display header on all pages */}.

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
      </div>
    </Router>
  );
}
export default App;
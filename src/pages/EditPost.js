import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const { id } = useParams(); // Get post ID from URL
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
import { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { api } from "../../lib/axios";


export function OnePost() {
  const [post, setPost] = useState({})

  const { id } = useParams();

  useEffect(() => {
    api.get(`/posts/${id}`)
    .then(response => setPost(response.data))
    .catch(err => console.log("error de compilação", err)) 
  }, []);

  return (
    <article className="onePostContainer">
      <h2>{post.title}</h2>
      <p>
        {post.description}
      </p>
    </article>
  );
}

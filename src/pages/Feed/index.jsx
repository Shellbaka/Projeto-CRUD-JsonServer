import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import "./styles.css";
import { api } from "../../lib/axios";

export function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar posts:", error);
      });
  }, []);

  function handleDeletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
    api.delete(`/posts/${id}`);
    console.log("clicaram em mim");
  }

  return (
    <div className="feedContainer">
      {posts.map((post) => (
        <Card key={post.id} post={post} onDeletePost={handleDeletePost} />
      ))}
    </div>
  );
}

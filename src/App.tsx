import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/post/Post";
import { CommentsType, PostType } from "./Types/postType";

const URL = "https://jsonplaceholder.typicode.com";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [comments, setComments] = useState<CommentsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Get posts and comments

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetch(`${URL}/posts`);
        const res = await data.json();
        setPosts(res);
        setLoading(false);
      } catch (error) {
        console.log("fetch error", error);
      }
    })();

    (async () => {
      try {
        const data = await fetch(`${URL}/comments`);
        const res = await data.json();
        setComments(res);
      } catch (error) {
        console.log("fetch error", error);
      }
    })();
  }, []);

  // Remove a post with id
  const removePost = async (id: number) => {
    setLoading(true);
    try {
      const res = await fetch(`${URL}/posts/${id}`, { method: "DELETE" });
      if (res.status === 200) {
        setPosts((value) => value.filter((post) => post.id !== id));
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // Edit a post with id
  const editPost = async (id: number, title: string, body: string) => {
    setLoading(true);
    try {
      await fetch(`${URL}/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, body }),
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="container">
        {posts?.map((post) => (
          <Post
            key={post.id}
            postData={post}
            comments={comments}
            removePost={(id: number) => removePost(id)}
            editPost={(id: number, title: string, body: string) =>
              editPost(id, title, body)
            }
          />
        ))}
      </div>
      {loading && (
        <div className="loading">
          <img src="/spin.gif" alt="spinner" className="spinner" />
        </div>
      )}
    </div>
  );
}

export default App;

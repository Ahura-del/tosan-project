import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/post/Post";
import { CommentsType, PostType } from "./Types/postType";


const URL = "https://jsonplaceholder.typicode.com";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [comments, setComments] = useState<CommentsType[]>([]);
const [loading , setLoading] = useState<boolean>(false)

// Get posts and comments

  useEffect(() => {
    (async () => {
      setLoading(true)
      const data = await fetch(`${URL}/posts`);
      const res = await data.json();
      setPosts(res);
      setLoading(false)
    })();

    (async () => {
      const data = await fetch(`${URL}/comments`);
      const res = await data.json();
      setComments(res);
    })();
  }, []);

  // Remove a post with id
  const removePost = async (id: number) => {
    setLoading(true)
    const res = await fetch(`${URL}/posts/${id}`, { method: "DELETE" });
    if(res.status === 200){
      setPosts(value=>(value.filter(post=>post.id !== id)))
      setLoading(false)
    }
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

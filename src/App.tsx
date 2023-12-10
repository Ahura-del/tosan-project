import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/post/Post";
import { CommentsType, PostType } from "./Types/postType";


const URL = "https://jsonplaceholder.typicode.com";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [comments, setComments] = useState<CommentsType[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(`${URL}/posts`);
      const res = await data.json();
      setPosts(res);
    })();

    (async () => {
      const data = await fetch(`${URL}/comments`);
      const res = await data.json();
      setComments(res);
    })();
  }, []);

  const removePost = async (id: number) => {
    const res = await fetch(`${URL}/posts/${id}`, { method: "DELETE" });
    if(res.status === 200){
      setPosts(value=>(value.filter(post=>post.id !== id)))
    }
  };
  return (
    <div className="App">
      {posts?.map((post) => (
        <Post
          key={post.id}
          postData={post}
          comments={comments}
          removePost={(id: number) => removePost(id)}
        />
      ))}
    </div>
  );
}

export default App;

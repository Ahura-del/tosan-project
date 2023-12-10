import "./Post.css";
import { FC, useState } from "react";
import { FaComment, FaTrash, FaEdit } from "react-icons/fa";
import Comment from "../comment/Comment";
import { CommentsType, PostType } from "../../Types/postType";



interface Props {
  postData: PostType;
  comments: CommentsType[];
  removePost: (id: number) => void;
}

const Post: FC<Props> = ({ postData, comments, removePost }) => {
  const { userId, body, title, id } = postData;
  const [showComment, setShowComment] = useState<boolean>(false);

  const showCommentHandler = () => {
    setShowComment(!showComment); 
  };

  return (
    <div className="post">
      <div className="postContainer">
        <div className="postHeader">
          <div className="userData">
            <span className="userPic" />
            <p className="userName">User {userId}</p>
          </div>
          {userId === 1 && (
            <div className="settingPost">
              <button>
                <FaEdit />
              </button>
              <button onClick={() => removePost(id)}>
                <FaTrash />
              </button>
            </div>
          )}
        </div>
        <div className="postBody">Post {id}</div>
        <div className="commentIcon">
          <button onClick={showCommentHandler}>
            <FaComment />
          </button>
        </div>
        <div className="postContent">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      </div>
      {showComment && (
        <>
          {comments.map(
            (comment) =>
              comment.postId == id && (
                <Comment key={comment.id} commentData={comment} />
              )
          )}
        </>
      )}
    </div>
  );
};

export default Post;

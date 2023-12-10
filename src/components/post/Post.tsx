import "./Post.css";
import { FC, useState } from "react";
import { FaComment, FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import Comment from "../comment/Comment";
import { CommentsType, PostType } from "../../Types/postType";

interface Props {
  postData: PostType;
  comments: CommentsType[];
  removePost: (id: number) => void;
  editPost: (id: number, title: string, body: string) => void;
}

const Post: FC<Props> = ({ postData, comments, removePost, editPost }) => {
  const { userId, id } = postData;
  const [showComment, setShowComment] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(postData.title!);
  const [body, setBody] = useState<string>(postData.body!);

  const showCommentHandler = () => {
    setShowComment(!showComment);
  };

  const editHandler = (id: number) => {
    setEdit(false);
    editPost(id, title, body);
  };

  return (
    <div className="post">
      <div className="postContainer">
        <div className="postHeader">
          <div className="userData">
            <span className="userPic">😊️</span>
            <p className="userName">User {userId}</p>
          </div>
          {userId === 1 && (
            <div className="settingPost">
              {edit ? (
                <button onClick={() => editHandler(id)}>
                  <FaCheck color="blue" />
                </button>
              ) : (
                <button onClick={() => setEdit(true)}>
                  <FaEdit color="blue" />
                </button>
              )}
              <button onClick={() => removePost(id)}>
                <FaTrash color="red" />
              </button>
            </div>
          )}
        </div>
        <div className="postBody">Post {id}</div>
        <div className="commentIcon">
          <button onClick={showCommentHandler}>
            <FaComment color="purple" />
          </button>
        </div>
        <div className="postContent">
          <textarea
            className="postTitle"
            style={{ textDecoration: edit ? "underline" : "none" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            readOnly={!edit}
          />
          <textarea
            className="postBodyText"
            value={body}
            rows={6}
            style={{ textDecoration: edit ? "underline" : "none" }}
            readOnly={!edit}
            onChange={(e) => setBody(e.target.value)}
          />
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

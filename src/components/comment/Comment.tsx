import { FC } from "react";
import "./Comment.css";
import { CommentsType } from "../../Types/postType";

interface Props {
  commentData: CommentsType;
}

const Comment: FC<Props> = ({ commentData }) => {
  const { name, email, body } = commentData;
  console.log(name);
  return (
    <div className="comments">
      <div>
        <div className="userData">
          <span className="userPic" />
          <div>
            <p className="commentUserName">{name}</p>
            <p className="commentEmail">{email}</p>
          </div>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Comment;

import './Post.css'
import { FC } from "react";
import { FaComment,FaTrash, FaEdit } from "react-icons/fa";
const Post:FC = () => {
  return (
    <div className='post'>
        <div className='postContainer'>
        <div className='postHeader'>
          <div className='userData'>
          <span className='userPic' />
          <p className='userName'>User 1</p>
          </div>
          <div className='settingPost'>
            <button><FaEdit/> </button>
            <button><FaTrash/></button>
          </div>
        </div>
        <div className='postBody'>Post</div>
        <div className='commentIcon'>
          <button><FaComment/></button>
        </div>
        <div className='postContent'>
          <h3>title</h3>
          <p>body</p>
        </div>
        </div>
        <div className='comments'>
          <div>
          <div className='userData'>
          <span className='userPic' />
          <div>
          <p className='commentUserName'>User 1</p>
          <p className='commentEmail'>email</p>
          </div>
          </div>
          <p>comment</p>
          </div>
        </div>
      </div>
  )
}

export default Post
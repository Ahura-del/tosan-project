import './Comment.css'
const Comment = () => {
  return (
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
  )
}

export default Comment
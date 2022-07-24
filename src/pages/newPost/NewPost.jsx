import "./newpost.scss";
import { BsImages } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const NewPost = () => {

  const handleClose = (e) =>{
    // const close = document.querySelector(".postClose");
    const NewPost = document.querySelector(".newPost");
    const PostPush = document.querySelector(".postPush");
    NewPost.style.display="none";
    PostPush.onclick = e =>{
      e.stopPropagation()
    }
  }
  return (
    <div className="newPost" onClick={handleClose}>
      <div className="postClose">
        <AiOutlineClose className="postClose" onClick={handleClose} />
      </div>
      <div className="postPush">
        <div className="postHeader">
          <span>Tạo bài viết</span>
        </div>
        <div className="postHrr"></div>
        <div className="postChoose">
          <BsImages style={{fontSize : "50px"}}/>
          <span>Kéo ảnh và video vào đây</span>
        </div>
        <label for="files" class="btn-input-file">Chọn từ máy tính</label>
        <input id="files" style={{visibility:"hidden"}} type="file"/>
      </div>
    </div>

  );
}

export default NewPost;

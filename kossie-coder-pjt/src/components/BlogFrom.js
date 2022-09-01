import { useState } from "react";
import axios from "axios";
const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const onSubmit = () => {
        axios.post('http://localhost:3001/posts', {
        title, //db로 보낼 변수(key)와 state변수명(value)이 같으면 생략가능
        body: body
        })
    };
    return (
        <div>
            <h1>Create a blog post</h1>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input 
                className="form-control"
                value={title}
                onChange={(event)=>{
                  console.log(event.target.value)
                  setTitle(event.target.value)
                }}
                />
            </div>
            <div className="mb-3">
              <label className="form-label">Body</label>
              <textarea 
                className="form-control"
                value={body}
                onChange={(event)=>{
                  console.log(event.target.value)
                  setBody(event.target.value)
                }}
                rows="20"
                />
            </div>
            <button 
              className="btn btn-primary"
              onClick={onSubmit}
              >
              Post
            </button>
        </div>
    );
};
export default BlogForm;
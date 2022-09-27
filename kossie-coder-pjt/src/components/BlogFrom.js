import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { bool } from "prop-types";
import { useParams } from "react-router-dom";
const BlogForm = ({ editing = false }) => {
  const history = useHistory();
  const { blogId } = useParams();
  const [originalTitle, setOriginalTitle] = useState("");
  const [title, setTitle] = useState("");
  const [originalBody, setOriginalBody] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editing) {
      axios.get(`http://localhost:3001/posts/${blogId}`).then((res) => {
        setTitle(res.data.title);
        setOriginalTitle(res.data.title);
        setBody(res.data.body);
        setOriginalBody(res.data.body);
      });
    }
  }, [blogId, editing]);

  const isEdited = () => {};

  const onSubmit = () => {
    if (editing) {
      axios.patch(`http://localhost:3001/posts/${blogId}`, {
        title,
        body,
      });
    } else {
      axios
        .post("http://localhost:3001/posts", {
          title, //db로 보낼 변수(key)와 state변수명(value)이 같으면 생략가능
          body: body,
          createdAt: Date.now(),
        })
        .then(() => {
          history.push("/blogs");
        });
    }
  };
  return (
    <div>
      <h1>{editing ? "Edit" : "Create"} a blog post</h1>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(event) => {
            console.log(event.target.value);
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          value={body}
          onChange={(event) => {
            console.log(event.target.value);
            setBody(event.target.value);
          }}
          rows="10"
        />
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        {editing ? "Edit" : "Post"}
      </button>
    </div>
  );
};

BlogForm.propTypes = {
  editing: bool,
};
// BlogForm.defaultProps = {
//   editing: false,
// };
export default BlogForm;

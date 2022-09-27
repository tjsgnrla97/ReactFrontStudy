import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "./../components/LoadingSpinner";
import { useHistory } from "react-router";

const ShowPage = () => {
  const { blogId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  // const history = useHistory();
  // console.log(blogId);

  const getPost = (blogId) => {
    axios.get(`http://localhost:3001/posts/${blogId}`).then((res) => {
      // console.log(res);
      setPost(res.data);
      setLoading(false);
    });
  };
  useEffect(
    () => {
      // console.log("hello");
      getPost(blogId);
    }, //[blogId]
    []
  );
  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="d-flex">
        <h1 className="flex-grow-1">{post.title}</h1>
        <div>
          <Link className="btn btn-primary" to={`/blogs/${blogId}/edit`}>
            Edit
          </Link>
        </div>
      </div>
      <small className="text-muted">
        Created At: {printDate(post.createdAt)}
      </small>
      <hr />
      <p>{post.body}</p>
      {/* <button onClick={() => history.push("/blogs/2")}>Click</button> */}
    </div>
  );
};

export default ShowPage;

import { useParams } from "react-router-dom";
import styles from "./PostIdPage.module.css";
import { useFetching } from "../../hooks/useFetching";
import { useEffect, useState } from "react";
import PostService from "../../API/PostService";
import { Loader } from "../../Components/UI/Loader/Loader";

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getByID(id);
    setPost(response.data);
  });
  const [fetchCommentById, isCommentLoading, commentError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsByID(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentById(params.id);
  }, []);

  return (
    <div className={styles.post}>
      <h1 className={styles.number}>Post number {params.id}</h1>
      {isLoading ? <Loader /> : <div>{post.title}</div>}
      <h1>Comments</h1>
      {isCommentLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div>
              <a>{comm.email}</a>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

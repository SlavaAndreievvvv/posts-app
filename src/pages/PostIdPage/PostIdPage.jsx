import { useHistory, useParams } from "react-router-dom";
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

  const history = useHistory();

  return (
    <div className={styles.post}>
      <a onClick={history.goBack} className={styles.back}>
        <span className={styles.arrow}></span>
        back to posts
      </a>
      <div className={styles.head}>
        <h1 className={styles.title}>Post number #{params.id}</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.content}>
            <h2 className={styles.subtitle}>{post.title}</h2>
            <p className={styles.desc}>{post.body}</p>
          </div>
        )}
      </div>
      {isCommentLoading ? (
        <Loader />
      ) : (
        <div className={styles.comments}>
          <h1 className={styles.title}>Comments</h1>
          {comments.map((comm) => (
            <div className={styles.card} key={comm.id}>
              <a className={styles.link}>{comm.email}</a>
              <div className={styles.desc}>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import styles from "./PostItem.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button } from "../UI/Button";
import { useHistory } from "react-router-dom";

export const PostItem = (props) => {
  const router = useHistory();

  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <p className={clsx(styles.title, styles.text)}>{props.post.title}</p>
        <p className={clsx(styles.desc, styles.text)}>{props.post.body}</p>
      </div>
      <div className={styles.postBtn}>
        <Button onClick={() => router.push(`/posts/${props.post.id}`)}>
          open
        </Button>
        <Button onClick={() => props.remove(props.post)}>delete</Button>
      </div>
    </div>
  );
};

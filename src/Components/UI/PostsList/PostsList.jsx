import styles from "./PostsList.module.css";
import PropTypes from "prop-types";
import { PostItem } from "../PostItem";

export const PostsList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Not Posts</h1>;
  }
  return (
    <div className={styles.PostsList}>
      <h1 className={styles.title}>{title}</h1>

      {posts.map((post) => (
        <PostItem key={post.id} remove={remove} post={post} />
      ))}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      desc: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

PostsList.defaultProps = {
  title: "Posts",
  posts: [],
};

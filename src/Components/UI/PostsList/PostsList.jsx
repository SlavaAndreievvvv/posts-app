import styles from "./PostsList.module.css";
import PropTypes from "prop-types";
import { PostItem } from "../PostItem";

export const PostsList = ({ posts, title }) => {
  return (
    <div className={styles.PostsList}>
      <h1 className={styles.title}>{title}</h1>
      {posts.map((post) => (
        <PostItem title={post.title} desc={post.desc} key={post.id} />
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

import styles from "./App.module.css";
import clsx from "clsx";
import { useState } from "react";
import { PostsList } from "../Components/UI/PostsList";
import { PostForm } from "../Components/UI/PostForm";

export const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "JavaScript",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "JavaScript",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className={styles.App}>
      <div className={clsx(styles.container)}>
        <PostForm create={createPost} />
        {posts.length !== 0 ? (
          <PostsList remove={removePost} posts={posts} />
        ) : (
          <div className={styles.notPosts}>Not Posts</div>
        )}
      </div>
    </div>
  );
};

import styles from "./App.module.css";
import clsx from "clsx";
import { useState } from "react";
import { PostsList } from "../Components/UI/PostsList";
import { PostForm } from "../Components/UI/PostForm";
import { Select } from "../Components/UI/Select/Select";

export const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "React",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "HTML",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [selectedSort, setSelectedSort] = useState("");

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className={styles.App}>
      <div className={clsx(styles.container)}>
        <PostForm create={createPost} />
        <Select
          value={selectedSort}
          onChange={sortPosts}
          defaultOptions="sort"
          options={[
            { value: "title", name: "title" },
            { value: "desc", name: "description" },
          ]}
        />
        {posts.length !== 0 ? (
          <PostsList remove={removePost} posts={posts} />
        ) : (
          <div className={styles.notPosts}>Not Posts</div>
        )}
      </div>
    </div>
  );
};
